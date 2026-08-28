/**
 * Code.gs — webhook entry point, command router, scheduled summary, setup.
 *
 * Deploy as a web app (Execute as: me, Access: anyone) and point the Telegram
 * webhook at <exec url>?secret=<WEBHOOK_SECRET>. See README.md.
 */

/** Telegram posts every update here. Always answers 200 so it does not retry. */
function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) return ok_();

    var secret = cfg_('WEBHOOK_SECRET');
    if (secret && (!e.parameter || e.parameter.secret !== secret)) {
      console.warn('Rejected webhook call with a bad or missing secret.');
      return ok_();
    }

    var update = JSON.parse(e.postData.contents);
    if (update.update_id && !claimUpdate_(update.update_id)) return ok_(); // retry of one we did

    var msg = update.message;
    if (msg && msg.text) handleMessage_(msg);
  } catch (err) {
    console.error(err && err.stack ? err.stack : err);
    try {
      var chatId = errorChatId_(e);
      if (chatId) sendMessage_(chatId, '⚠️ Bot error: ' + (err && err.message ? err.message : err));
    } catch (ignored) {
      // never let error reporting break the 200
    }
  }
  return ok_();
}

/** Health check in a browser. */
function doGet() {
  return ContentService.createTextOutput(
    cfg_('BUSINESS_NAME') + ' expense bot is deployed. Telegram posts to this URL.',
  );
}

function ok_() {
  return ContentService.createTextOutput('ok');
}

function errorChatId_(e) {
  try {
    var u = JSON.parse(e.postData.contents);
    return u.message && u.message.chat ? u.message.chat.id : '';
  } catch (err) {
    return '';
  }
}

/** Cheap idempotency guard — Telegram re-delivers an update if we are slow. */
function claimUpdate_(updateId) {
  var cache = CacheService.getScriptCache();
  var key = 'upd:' + updateId;
  if (cache.get(key)) return false;
  cache.put(key, '1', 3600);
  return true;
}

function handleMessage_(msg) {
  var chatId = msg.chat.id;
  var userId = msg.from ? msg.from.id : '';
  var text = String(msg.text).trim();
  var person = personFor_(userId);

  // /whoami works for anyone: it is how you find the ids for Config.gs.
  if (/^\/whoami(@\w+)?\b/i.test(text)) {
    sendMessage_(
      chatId,
      'Telegram user id: ' +
        userId +
        '\nName: ' +
        ((msg.from && msg.from.first_name) || '?') +
        '\nChat id: ' +
        chatId +
        '\nMapped partner: ' +
        (person || 'none — add this id to Config.gs'),
    );
    return;
  }

  if (!person) return; // strangers are ignored silently

  rememberGroupChat_(msg.chat);

  if (text.charAt(0) === '/') {
    handleCommand_(chatId, person, text);
    return;
  }

  var exp = parseExpense_(text);
  if (!exp) return; // no leading number, not a command -> not for us

  var when = new Date((msg.date || Math.floor(Date.now() / 1000)) * 1000);
  var row = appendEntry_(exp, person, when, msg.message_id);
  sendMessage_(chatId, buildConfirmation_(row));
}

/** First group message from a partner tells us where to post monthly summaries. */
function rememberGroupChat_(chat) {
  if (!chat || String(chat.type).indexOf('group') === -1) return;
  if (String(cfg_('GROUP_CHAT_ID')) === String(chat.id)) return;
  setCfg_('GROUP_CHAT_ID', chat.id);
}

function handleCommand_(chatId, person, text) {
  var parts = text.split(/\s+/);
  var cmd = parts[0].replace(/@\w+$/, '').slice(1).toLowerCase();
  var args = parts.slice(1);
  var names = partners_();
  var thisMonth = currentMonthKey_();

  switch (cmd) {
    case 'start':
    case 'help':
      sendMessage_(chatId, helpText_(cfg_('BUSINESS_NAME')));
      return;

    case 'total':
      sendMessage_(
        chatId,
        buildMonthSummary_(entriesForMonth_(thisMonth), thisMonth, names, cfg_('BUSINESS_NAME')),
      );
      return;

    case 'month': {
      var key = args[0];
      if (!isMonthKey_(key)) {
        sendMessage_(chatId, 'Use /month YYYY-MM, e.g. /month ' + shiftMonth_(thisMonth, -1));
        return;
      }
      sendMessage_(
        chatId,
        buildMonthSummary_(entriesForMonth_(key), key, names, cfg_('BUSINESS_NAME')),
      );
      return;
    }

    case 'settle': {
      var scope = (args[0] || '').toLowerCase();
      if (scope === 'all' || scope === 'lifetime') {
        sendMessage_(chatId, buildSettle_(readEntries_(false), 'all time', names));
      } else if (isMonthKey_(scope)) {
        sendMessage_(chatId, buildSettle_(entriesForMonth_(scope), monthLabel_(scope), names));
      } else if (scope) {
        sendMessage_(chatId, 'Use /settle, /settle all, or /settle YYYY-MM.');
      } else {
        sendMessage_(
          chatId,
          buildSettle_(entriesForMonth_(thisMonth), monthLabel_(thisMonth), names),
        );
      }
      return;
    }

    case 'me':
      sendMessage_(chatId, buildPersonSummary_(entriesForMonth_(thisMonth), person, thisMonth));
      return;

    case 'undo': {
      var removed = undoLastFor_(person);
      if (!removed) {
        sendMessage_(chatId, 'Nothing to undo — no live entries from ' + person + '.');
        return;
      }
      sendMessage_(
        chatId,
        'Removed ' +
          formatINR_(removed.amount) +
          ' | ' +
          removed.description +
          ' | ' +
          titleCase_(removed.flat) +
          ' | ' +
          removed.datetime,
      );
      return;
    }

    case 'csv': {
      var csv = ledgerCsv_();
      var stamp = Utilities.formatDate(new Date(), tz_(), 'yyyy-MM-dd');
      var blob = Utilities.newBlob(csv, 'text/csv', 'morpankhi-ledger-' + stamp + '.csv');
      sendDocument_(chatId, blob, 'Full ledger · ' + stamp);
      return;
    }

    default:
      sendMessage_(chatId, 'Unknown command: /' + cmd + '\nTry /help');
  }
}

function currentMonthKey_() {
  return Utilities.formatDate(new Date(), tz_(), 'yyyy-MM');
}

/**
 * Runs on the 1st of every month (see installTriggers) and posts last month's
 * summary plus the settle-up in the group.
 */
function postMonthlySummary() {
  var chatId = cfg_('GROUP_CHAT_ID');
  if (!chatId) {
    console.warn('GROUP_CHAT_ID is not set yet — post any message in the group first.');
    return;
  }
  var key = shiftMonth_(currentMonthKey_(), -1);
  var entries = entriesForMonth_(key);
  var names = partners_();
  var text =
    '🗓 Month closed — ' +
    monthLabel_(key) +
    '\n\n' +
    buildMonthSummary_(entries, key, names, cfg_('BUSINESS_NAME')) +
    '\n\n' +
    buildSettle_(entries, monthLabel_(key), names);
  sendMessage_(chatId, text);
}

/* ------------------------------------------------------------------ setup */

/** One-shot setup: sheet headers, webhook, command menu, monthly trigger. */
function setup() {
  var problems = [];
  if (!cfg_('BOT_TOKEN') || cfg_('BOT_TOKEN').indexOf('PASTE') === 0) problems.push('BOT_TOKEN');
  if (!cfg_('SHEET_ID') || cfg_('SHEET_ID').indexOf('PASTE') === 0) problems.push('SHEET_ID');
  if (String(cfg_('ANMOL_ID')) === '111111111') problems.push('ANMOL_ID');
  if (String(cfg_('ANUJ_ID')) === '222222222') problems.push('ANUJ_ID');
  if (problems.length) {
    throw new Error('Still using placeholder config for: ' + problems.join(', '));
  }

  getSheet_(); // creates the tab + headers if missing
  setBotCommands();
  installTriggers();
  var hook = setWebhook();
  console.log('Setup done. Webhook ok=' + hook.ok);
  return hook;
}

/** (Re)creates the 1st-of-month summary trigger. */
function installTriggers() {
  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() === 'postMonthlySummary') {
      ScriptApp.deleteTrigger(triggers[i]);
    }
  }
  ScriptApp.newTrigger('postMonthlySummary')
    .timeBased()
    .onMonthDay(1)
    .atHour(Number(cfg_('MONTHLY_SUMMARY_HOUR')) || 9)
    .inTimezone(tz_())
    .create();
  console.log('Monthly summary trigger installed.');
}

/** Handy in the editor: post last month's summary right now. */
function testMonthlySummaryNow() {
  postMonthlySummary();
}
