/**
 * Tests.gs — self-tests for the pure logic (Parse.gs + Report.gs).
 * Run runSelfTests() in the Apps Script editor; it throws on the first
 * failure and logs PASS lines otherwise. No Google services are touched.
 */

function assertEq_(actual, expected, label) {
  var a = JSON.stringify(actual);
  var b = JSON.stringify(expected);
  if (a !== b) throw new Error('FAIL ' + label + '\n  expected ' + b + '\n  got      ' + a);
  console.log('PASS ' + label);
}

function runSelfTests() {
  // ---- amounts ----------------------------------------------------------
  assertEq_(parseAmount_('450 cleaning'), { amount: 450, rest: 'cleaning' }, 'plain int');
  assertEq_(parseAmount_('1,200 rent'), { amount: 1200, rest: 'rent' }, 'comma');
  assertEq_(parseAmount_('1,20,000 lease'), { amount: 120000, rest: 'lease' }, 'indian grouping');
  assertEq_(parseAmount_('1.5k AC repair'), { amount: 1500, rest: 'AC repair' }, 'k suffix');
  assertEq_(parseAmount_('2K taxi'), { amount: 2000, rest: 'taxi' }, 'capital K');
  assertEq_(parseAmount_('₹450 soap'), { amount: 450, rest: 'soap' }, 'rupee sign');
  assertEq_(parseAmount_('Rs. 900 wifi'), { amount: 900, rest: 'wifi' }, 'Rs prefix');
  assertEq_(parseAmount_('450 kitchen supplies').amount, 450, 'k not glued to word');
  assertEq_(parseAmount_('75.50 soap'), { amount: 75.5, rest: 'soap' }, 'decimal');
  assertEq_(parseAmount_('hello 450'), null, 'no leading number');
  assertEq_(parseAmount_('/total'), null, 'command is not an amount');
  assertEq_(parseAmount_('0 free stuff'), null, 'zero rejected');

  // ---- flat + category --------------------------------------------------
  var e1 = parseExpense_('450 cleaning studio');
  assertEq_([e1.flat, e1.category], ['orchid', 'cleaning'], 'studio->orchid, cleaning');
  var e2 = parseExpense_('1.5k AC repair florence');
  assertEq_([e2.amount, e2.flat, e2.category], [1500, 'florence', 'repair'], 'florence repair');
  var e3 = parseExpense_('900 electricity bill 1bhk');
  assertEq_([e3.flat, e3.category], ['florence', 'utility'], '1bhk->florence, utility');
  var e4 = parseExpense_('2500 airbnb payout cut');
  assertEq_(e4.category, 'commission', 'airbnb->commission');
  var e5 = parseExpense_('3000 new mattress');
  assertEq_([e5.flat, e5.category], ['general', 'furnishing'], 'default flat general');
  var e6 = parseExpense_('600 misc stuff #orchid #furnishing');
  assertEq_([e6.flat, e6.category, e6.description], ['orchid', 'furnishing', 'misc stuff'], 'hashtag overrides');
  assertEq_(parseExpense_('what about 500'), null, 'non-leading number ignored');
  var e7 = parseExpense_('200');
  assertEq_([e7.amount, e7.category], [200, 'misc'], 'bare amount -> misc');

  // ---- formatting -------------------------------------------------------
  assertEq_(formatINR_(450), '₹450', 'inr small');
  assertEq_(formatINR_(1200), '₹1,200', 'inr thousands');
  assertEq_(formatINR_(1234567), '₹12,34,567', 'inr lakh grouping');
  assertEq_(formatINR_(75.5), '₹75.50', 'inr paise');
  assertEq_(monthLabel_('2026-08'), 'Aug 2026', 'month label');
  assertEq_(shiftMonth_('2026-01', -1), '2025-12', 'shift back over year');
  assertEq_(shiftMonth_('2026-12', 1), '2027-01', 'shift forward over year');
  assertEq_(isMonthKey_('2026-08'), true, 'valid month key');
  assertEq_(isMonthKey_('2026-13'), false, 'invalid month key');

  // ---- reports ----------------------------------------------------------
  var entries = [
    { person: 'Anmol', amount: 450, flat: 'orchid', category: 'cleaning', date: '2026-08-01', description: 'cleaning studio' },
    { person: 'Anuj', amount: 1500, flat: 'florence', category: 'repair', date: '2026-08-02', description: 'AC repair' },
    { person: 'Anmol', amount: 1200, flat: 'orchid', category: 'rent', date: '2026-08-03', description: 'rent' },
  ];
  var names = ['Anmol', 'Anuj'];

  var settle = buildSettle_(entries, 'Aug 2026', names);
  if (settle.indexOf('Anuj owes Anmol ₹75') === -1) {
    throw new Error('FAIL settle math\n' + settle);
  }
  console.log('PASS settle math (3150 total, 1575 each, Anuj owes 75)');

  var summary = buildMonthSummary_(entries, '2026-08', names, 'Morpankhi Home Stays');
  if (summary.indexOf('Total ₹3,150') === -1 || summary.indexOf('• Anmol — ₹1,650') === -1) {
    throw new Error('FAIL month summary\n' + summary);
  }
  console.log('PASS month summary');

  var conf = buildConfirmation_({
    amount: 450, category: 'cleaning', flat: 'orchid', person: 'Anmol', date: '2026-08-29',
  });
  assertEq_(conf, 'OK ₹450 | cleaning | Orchid | Anmol | 29 Aug', 'confirmation line');

  var even = buildSettle_(
    [
      { person: 'Anmol', amount: 500, flat: 'general', category: 'misc', date: '2026-08-01' },
      { person: 'Anuj', amount: 500, flat: 'general', category: 'misc', date: '2026-08-01' },
    ],
    'Aug 2026',
    names,
  );
  if (even.indexOf('All square') === -1) throw new Error('FAIL even settle\n' + even);
  console.log('PASS even settle');

  console.log('\nAll self-tests passed ✔');
  return 'All self-tests passed';
}
