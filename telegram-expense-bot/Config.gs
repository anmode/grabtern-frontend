/**
 * Config.gs — the only file you normally need to edit.
 *
 * Anything set in Script Properties (Apps Script editor -> Project Settings ->
 * Script Properties) overrides the value below, so you can keep the bot token
 * out of source control. Property names are the same as the keys here.
 */
var CONFIG = {
  // From @BotFather. Prefer setting this as a Script Property named BOT_TOKEN.
  BOT_TOKEN: 'PASTE_BOT_TOKEN_HERE',

  // The long id in the Sheet URL: docs.google.com/spreadsheets/d/<SHEET_ID>/edit
  SHEET_ID: 'PASTE_SHEET_ID_HERE',
  SHEET_NAME: 'ledger',

  // ---- the two partners -------------------------------------------------
  // Numeric Telegram user ids (not @usernames). Send /whoami to the bot to
  // learn an id, or use @userinfobot.
  ANMOL_ID: '111111111',
  ANUJ_ID: '222222222',
  ANMOL_NAME: 'Anmol',
  ANUJ_NAME: 'Anuj',

  // Group chat id used for the automatic monthly summary. Left empty, the bot
  // fills it in the first time a partner posts in a group.
  GROUP_CHAT_ID: '',

  // Random string appended to the webhook URL (?secret=...). Telegram is the
  // only party that knows it, so stray POSTs to the web app are dropped.
  WEBHOOK_SECRET: 'change-me-to-a-random-string',

  TIMEZONE: 'Asia/Kolkata',
  BUSINESS_NAME: 'Morpankhi Home Stays',

  // Hour (0-23, IST) at which the 1st-of-month summary is posted.
  MONTHLY_SUMMARY_HOUR: 9,
};

/** Config value, with Script Properties taking precedence. */
function cfg_(key) {
  var override = PropertiesService.getScriptProperties().getProperty(key);
  if (override !== null && override !== '') return override;
  return CONFIG[key];
}

function setCfg_(key, value) {
  PropertiesService.getScriptProperties().setProperty(key, String(value));
}

/** Telegram user id -> partner name. Unknown ids return ''. */
function personFor_(userId) {
  var id = String(userId);
  if (id === String(cfg_('ANMOL_ID'))) return cfg_('ANMOL_NAME');
  if (id === String(cfg_('ANUJ_ID'))) return cfg_('ANUJ_NAME');
  return '';
}

/** Both partner names, in a stable order. */
function partners_() {
  return [cfg_('ANMOL_NAME'), cfg_('ANUJ_NAME')];
}

function tz_() {
  return cfg_('TIMEZONE') || 'Asia/Kolkata';
}
