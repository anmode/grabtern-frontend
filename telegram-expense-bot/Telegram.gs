/**
 * Telegram.gs — thin wrapper over the Bot API.
 */

function tgApiUrl_(method) {
  return 'https://api.telegram.org/bot' + cfg_('BOT_TOKEN') + '/' + method;
}

function tgCall_(method, payload, isMultipart) {
  var options = {
    method: 'post',
    muteHttpExceptions: true,
  };
  if (isMultipart) {
    options.payload = payload; // UrlFetchApp builds multipart when a Blob is present
  } else {
    options.contentType = 'application/json';
    options.payload = JSON.stringify(payload);
  }
  var res = UrlFetchApp.fetch(tgApiUrl_(method), options);
  var body = res.getContentText();
  var parsed;
  try {
    parsed = JSON.parse(body);
  } catch (err) {
    parsed = { ok: false, description: body };
  }
  if (!parsed.ok) {
    console.error('Telegram ' + method + ' failed: ' + body);
  }
  return parsed;
}

/** Plain-text send — no parse_mode, so descriptions never break formatting. */
function sendMessage_(chatId, text) {
  if (!chatId) return null;
  return tgCall_('sendMessage', {
    chat_id: String(chatId),
    text: text,
    disable_web_page_preview: true,
  });
}

function sendDocument_(chatId, blob, caption) {
  if (!chatId) return null;
  return tgCall_(
    'sendDocument',
    { chat_id: String(chatId), document: blob, caption: caption || '' },
    true,
  );
}

/**
 * Registers this deployment's /exec URL as the webhook. Run once after deploy.
 * If ScriptApp reports the editor's /dev URL (a known quirk when running from
 * the editor), set a Script Property WEBAPP_URL to the real .../exec URL.
 */
function setWebhook() {
  var url = PropertiesService.getScriptProperties().getProperty('WEBAPP_URL') ||
    ScriptApp.getService().getUrl();
  if (!url) throw new Error('Deploy the project as a web app first (Deploy > New deployment).');
  if (/\/dev$/.test(url)) {
    throw new Error(
      'Got the /dev URL. Copy the web app URL ending in /exec from Deploy > Manage deployments ' +
      'into a Script Property named WEBAPP_URL, then run setWebhook again.',
    );
  }
  var hookUrl = url + '?secret=' + encodeURIComponent(cfg_('WEBHOOK_SECRET'));
  var res = tgCall_('setWebhook', {
    url: hookUrl,
    allowed_updates: ['message'],
    drop_pending_updates: true,
  });
  console.log(JSON.stringify(res));
  return res;
}

function deleteWebhook() {
  var res = tgCall_('deleteWebhook', { drop_pending_updates: true });
  console.log(JSON.stringify(res));
  return res;
}

function getWebhookInfo() {
  var res = tgCall_('getWebhookInfo', {});
  console.log(JSON.stringify(res));
  return res;
}

/** Registers the command list shown in Telegram's "/" menu. */
function setBotCommands() {
  var res = tgCall_('setMyCommands', {
    commands: [
      { command: 'total', description: 'This month: total, by person, flat, category' },
      { command: 'settle', description: 'Who owes whom (50-50)' },
      { command: 'me', description: 'My spends this month' },
      { command: 'month', description: 'Summary for a month, e.g. /month 2026-08' },
      { command: 'undo', description: 'Remove my last entry' },
      { command: 'csv', description: 'Export the full ledger as CSV' },
      { command: 'help', description: 'Usage examples' },
      { command: 'whoami', description: 'Show my Telegram id and this chat id' },
    ],
  });
  console.log(JSON.stringify(res));
  return res;
}
