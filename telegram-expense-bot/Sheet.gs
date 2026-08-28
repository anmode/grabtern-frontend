/**
 * Sheet.gs — the Google Sheet is the database.
 * One row per expense; deletes are soft (deleted_flag = TRUE).
 */

var HEADERS = [
  'entry_id',
  'datetime',
  'date',
  'person',
  'amount',
  'description',
  'flat',
  'category',
  'telegram_msg_id',
  'deleted_flag',
];

var COL = {
  entry_id: 0,
  datetime: 1,
  date: 2,
  person: 3,
  amount: 4,
  description: 5,
  flat: 6,
  category: 7,
  telegram_msg_id: 8,
  deleted_flag: 9,
};

function getSheet_() {
  var ss = SpreadsheetApp.openById(cfg_('SHEET_ID'));
  var name = cfg_('SHEET_NAME') || 'ledger';
  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    initSheetLayout_(sheet);
  } else if (sheet.getLastRow() === 0) {
    initSheetLayout_(sheet);
  }
  return sheet;
}

function initSheetLayout_(sheet) {
  sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]).setFontWeight('bold');
  sheet.setFrozenRows(1);
  // datetime / date / telegram_msg_id are stored as plain text so the sheet
  // never reformats them behind the bot's back.
  sheet.getRange(1, COL.datetime + 1, sheet.getMaxRows(), 2).setNumberFormat('@');
  sheet.getRange(1, COL.telegram_msg_id + 1, sheet.getMaxRows(), 1).setNumberFormat('@');
  sheet.getRange(1, COL.amount + 1, sheet.getMaxRows(), 1).setNumberFormat('0.00');
}

/**
 * Sheets treats a cell starting with = + - @ as a formula. Descriptions come
 * from chat, so prefix a quote — Sheets shows the text as-is without it
 * becoming a live formula.
 */
function safeText_(s) {
  s = String(s === null || s === undefined ? '' : s);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function newEntryId_(now) {
  return (
    'E' +
    Utilities.formatDate(now, tz_(), 'yyyyMMdd-HHmmss') +
    '-' +
    Utilities.getUuid().slice(0, 4)
  );
}

/**
 * Appends one expense. Returns the stored row object.
 * @param {{amount:number, description:string, flat:string, category:string}} exp
 * @param {string} person
 * @param {Date} when  message timestamp
 * @param {string|number} msgId
 */
function appendEntry_(exp, person, when, msgId) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var sheet = getSheet_();
    var row = {
      entry_id: newEntryId_(when),
      datetime: Utilities.formatDate(when, tz_(), 'yyyy-MM-dd HH:mm:ss'),
      date: Utilities.formatDate(when, tz_(), 'yyyy-MM-dd'),
      person: person,
      amount: exp.amount,
      description: exp.description,
      flat: exp.flat,
      category: exp.category,
      telegram_msg_id: String(msgId || ''),
      deleted_flag: false,
    };
    sheet.appendRow([
      row.entry_id,
      row.datetime,
      row.date,
      row.person,
      row.amount,
      safeText_(row.description),
      row.flat,
      row.category,
      row.telegram_msg_id,
      row.deleted_flag,
    ]);
    return row;
  } finally {
    lock.releaseLock();
  }
}

function cellToDateStr_(v, pattern) {
  if (v instanceof Date) return Utilities.formatDate(v, tz_(), pattern);
  return String(v || '').trim();
}

function isDeleted_(v) {
  var s = String(v).trim().toLowerCase();
  return v === true || s === 'true' || s === '1' || s === 'yes' || s === 'y';
}

/**
 * All rows as objects. `rowNumber` is the 1-based sheet row, handy for updates.
 * @param {boolean=} includeDeleted
 */
function readEntries_(includeDeleted) {
  var sheet = getSheet_();
  var lastRow = sheet.getLastRow();
  if (lastRow < 2) return [];
  var values = sheet.getRange(2, 1, lastRow - 1, HEADERS.length).getValues();
  var out = [];
  for (var i = 0; i < values.length; i++) {
    var v = values[i];
    if (!v[COL.entry_id] && !v[COL.amount]) continue;
    var deleted = isDeleted_(v[COL.deleted_flag]);
    if (deleted && !includeDeleted) continue;
    out.push({
      rowNumber: i + 2,
      entry_id: String(v[COL.entry_id]),
      datetime: cellToDateStr_(v[COL.datetime], 'yyyy-MM-dd HH:mm:ss'),
      date: cellToDateStr_(v[COL.date], 'yyyy-MM-dd'),
      person: String(v[COL.person]),
      amount: Number(v[COL.amount]) || 0,
      description: String(v[COL.description]),
      flat: String(v[COL.flat]),
      category: String(v[COL.category]),
      telegram_msg_id: String(v[COL.telegram_msg_id]),
      deleted_flag: deleted,
    });
  }
  return out;
}

function monthOf_(entry) {
  return String(entry.date || '').slice(0, 7);
}

function entriesForMonth_(monthKey) {
  return readEntries_(false).filter(function (e) {
    return monthOf_(e) === monthKey;
  });
}

/** Soft-deletes a person's most recent live entry. Returns it, or null. */
function undoLastFor_(person) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var entries = readEntries_(false).filter(function (e) {
      return e.person === person;
    });
    if (!entries.length) return null;
    var last = entries[entries.length - 1];
    getSheet_().getRange(last.rowNumber, COL.deleted_flag + 1).setValue(true);
    return last;
  } finally {
    lock.releaseLock();
  }
}

function csvCell_(v) {
  var s = String(v === null || v === undefined ? '' : v);
  return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
}

/** Whole ledger (deleted rows included, flagged) as a CSV string. */
function ledgerCsv_() {
  var rows = [HEADERS.join(',')];
  var entries = readEntries_(true);
  for (var i = 0; i < entries.length; i++) {
    var e = entries[i];
    rows.push(
      [
        e.entry_id,
        e.datetime,
        e.date,
        e.person,
        e.amount,
        e.description,
        e.flat,
        e.category,
        e.telegram_msg_id,
        e.deleted_flag ? 'TRUE' : 'FALSE',
      ]
        .map(csvCell_)
        .join(','),
    );
  }
  return rows.join('\n');
}
