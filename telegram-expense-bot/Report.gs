/**
 * Report.gs — turns ledger rows into the text the bot posts.
 * Pure functions: they take entries + names and return strings.
 */

function sumBy_(entries, key) {
  var totals = {};
  for (var i = 0; i < entries.length; i++) {
    var k = entries[i][key] || 'general';
    totals[k] = (totals[k] || 0) + entries[i].amount;
  }
  return totals;
}

function total_(entries) {
  var t = 0;
  for (var i = 0; i < entries.length; i++) t += entries[i].amount;
  return Math.round(t * 100) / 100;
}

/** "• Anmol — ₹8,000" lines, biggest first. */
function breakdownLines_(totals, labelFn) {
  var keys = Object.keys(totals).sort(function (a, b) {
    return totals[b] - totals[a];
  });
  return keys.map(function (k) {
    return '• ' + (labelFn ? labelFn(k) : k) + ' — ' + formatINR_(totals[k]);
  });
}

/** Person totals, always listing both partners (even at zero). */
function personTotals_(entries, names) {
  var totals = sumBy_(entries, 'person');
  for (var i = 0; i < names.length; i++) {
    if (!(names[i] in totals)) totals[names[i]] = 0;
  }
  return totals;
}

function buildMonthSummary_(entries, monthKey, names, businessName) {
  var label = monthLabel_(monthKey);
  if (!entries.length) return 'No entries for ' + label + ' yet.';

  var lines = [];
  lines.push('📊 ' + label + (businessName ? ' · ' + businessName : ''));
  lines.push('Total ' + formatINR_(total_(entries)) + ' · ' + entries.length + ' entries');
  lines.push('');
  lines.push('By person');
  lines = lines.concat(breakdownLines_(personTotals_(entries, names)));
  lines.push('');
  lines.push('By flat');
  lines = lines.concat(breakdownLines_(sumBy_(entries, 'flat'), titleCase_));
  lines.push('');
  lines.push('By category');
  lines = lines.concat(breakdownLines_(sumBy_(entries, 'category')));
  return lines.join('\n');
}

/** 50-50 partnership settle-up for whatever entries are passed in. */
function buildSettle_(entries, periodLabel, names) {
  var t = total_(entries);
  if (!entries.length) return 'Nothing to settle for ' + periodLabel + ' — no entries.';

  var totals = personTotals_(entries, names);
  var share = Math.round((t / 2) * 100) / 100;
  var a = names[0];
  var b = names[1];
  var paidA = totals[a] || 0;
  var paidB = totals[b] || 0;

  var lines = [];
  lines.push('🤝 Settle · ' + periodLabel);
  lines.push('Total ' + formatINR_(t) + ' · 50-50 → ' + formatINR_(share) + ' each');
  lines.push('• ' + a + ' paid ' + formatINR_(paidA));
  lines.push('• ' + b + ' paid ' + formatINR_(paidB));

  // Anything else in the person column (a third payer, a typo) is surfaced.
  var others = Object.keys(totals).filter(function (k) {
    return k !== a && k !== b;
  });
  for (var i = 0; i < others.length; i++) {
    lines.push('• ' + others[i] + ' paid ' + formatINR_(totals[others[i]]) + ' (not a partner?)');
  }

  var diff = Math.round(((paidA - paidB) / 2) * 100) / 100;
  lines.push('');
  if (Math.abs(diff) < 1) {
    lines.push('✅ All square.');
  } else if (diff > 0) {
    lines.push('➡️ ' + b + ' owes ' + a + ' ' + formatINR_(diff));
  } else {
    lines.push('➡️ ' + a + ' owes ' + b + ' ' + formatINR_(-diff));
  }
  return lines.join('\n');
}

function buildPersonSummary_(entries, person, monthKey) {
  var label = monthLabel_(monthKey);
  var mine = entries.filter(function (e) {
    return e.person === person;
  });
  if (!mine.length) return person + ' — no entries in ' + label + '.';

  var lines = [];
  lines.push('👤 ' + person + ' · ' + label);
  lines.push('Total ' + formatINR_(total_(mine)) + ' · ' + mine.length + ' entries');
  lines.push('(group total ' + formatINR_(total_(entries)) + ')');
  lines.push('');
  lines.push('By flat');
  lines = lines.concat(breakdownLines_(sumBy_(mine, 'flat'), titleCase_));
  lines.push('');
  lines.push('By category');
  lines = lines.concat(breakdownLines_(sumBy_(mine, 'category')));
  lines.push('');
  lines.push('Latest');
  var recent = mine.slice(-5).reverse();
  for (var i = 0; i < recent.length; i++) {
    var e = recent[i];
    lines.push(
      '• ' +
        e.date.slice(8) +
        ' ' +
        monthLabel_(e.date.slice(0, 7)).split(' ')[0] +
        ' — ' +
        formatINR_(e.amount) +
        ' ' +
        e.description,
    );
  }
  return lines.join('\n');
}

/** One-line confirmation: "OK ₹450 | cleaning | Orchid | Anmol | 29 Aug" */
function buildConfirmation_(row) {
  var day = row.date.slice(8).replace(/^0/, '');
  var mon = monthLabel_(row.date.slice(0, 7)).split(' ')[0];
  return (
    'OK ' +
    formatINR_(row.amount) +
    ' | ' +
    row.category +
    ' | ' +
    titleCase_(row.flat) +
    ' | ' +
    row.person +
    ' | ' +
    day +
    ' ' +
    mon
  );
}

function helpText_(businessName) {
  return [
    '💸 ' + (businessName || 'Expense bot'),
    '',
    'Log an expense — just start the message with the amount:',
    '  450 cleaning studio',
    '  1.5k AC repair florence',
    '  1,200 rent orchid',
    '  ₹2,500 airbnb commission',
    '',
    'Flat is picked up from the text: studio/orchid → Orchid,',
    '1bhk/florence → Florence, otherwise General.',
    'Category is auto-tagged (rent, furnishing, cleaning, utility,',
    'repair, supplies, commission, misc).',
    'Override either with a tag: 600 misc stuff #orchid #furnishing',
    '',
    'Commands',
    '/total — this month: total, by person, flat, category',
    '/settle — who owes whom this month (50-50). /settle all for lifetime,',
    '   /settle 2026-08 for one month',
    '/me — my spends this month',
    '/month 2026-08 — that month’s summary',
    '/undo — soft-delete my last entry',
    '/csv — full ledger as a CSV file',
    '/whoami — my Telegram id and this chat id',
    '/help — this message',
    '',
    'Messages without a leading number are ignored.',
  ].join('\n');
}
