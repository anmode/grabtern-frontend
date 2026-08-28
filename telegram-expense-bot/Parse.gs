/**
 * Parse.gs — pure helpers (no Google services used here, so they are easy to
 * reason about and are covered by runSelfTests() in Tests.gs).
 */

/** Flat detection keywords, evaluated in this order. */
var FLAT_KEYWORDS = [
  ['orchid', ['orchid', 'studio']],
  ['florence', ['florence', '1bhk', '1 bhk', '1-bhk', 'one bhk', 'onebhk']],
];

/** Category auto-tag keywords, evaluated in this order (first hit wins). */
var CATEGORY_KEYWORDS = [
  [
    'commission',
    [
      'commission',
      'airbnb',
      'agoda',
      'oyo',
      'booking.com',
      'makemytrip',
      'mmt',
      'brokerage',
      'broker',
      'agent',
      'referral',
      'platform fee',
      'listing fee',
    ],
  ],
  ['rent', ['rent', 'rents', 'lease', 'landlord', 'deposit']],
  [
    'cleaning',
    [
      'cleaning',
      'clean',
      'cleaner',
      'housekeeping',
      'maid',
      'laundry',
      'dhobi',
      'washing',
      'wash',
      'garbage',
      'sweeper',
      'sweeping',
    ],
  ],
  [
    'repair',
    [
      'repair',
      'repairs',
      'fix',
      'fixing',
      'plumber',
      'plumbing',
      'electrician',
      'carpenter',
      'mason',
      'service',
      'servicing',
      'maintenance',
      'leak',
      'leakage',
      'paint',
      'painting',
      'spare',
      'replacement',
    ],
  ],
  [
    'utility',
    [
      'electricity',
      'eb bill',
      'power bill',
      'water',
      'wifi',
      'internet',
      'broadband',
      'jio',
      'airtel',
      'gas',
      'cylinder',
      'dth',
      'recharge',
      'bill',
    ],
  ],
  [
    'furnishing',
    [
      'furniture',
      'furnishing',
      'mattress',
      'bed',
      'sofa',
      'curtain',
      'curtains',
      'table',
      'chair',
      'wardrobe',
      'almirah',
      'cupboard',
      'decor',
      'lamp',
      'mirror',
      'rug',
      'carpet',
      'linen',
      'bedsheet',
      'bedsheets',
      'pillow',
      'pillows',
      'tv',
      'fridge',
      'geyser',
    ],
  ],
  [
    'supplies',
    [
      'supplies',
      'supply',
      'soap',
      'shampoo',
      'toiletries',
      'toiletry',
      'tissue',
      'tissues',
      'towel',
      'towels',
      'grocery',
      'groceries',
      'amenities',
      'bulb',
      'bulbs',
      'mop',
      'broom',
      'phenyl',
      'detergent',
      'sanitizer',
      'tea',
      'coffee',
      'snacks',
    ],
  ],
];

var CATEGORIES = [
  'rent',
  'furnishing',
  'cleaning',
  'utility',
  'repair',
  'supplies',
  'commission',
  'misc',
];

var FLATS = ['orchid', 'florence', 'general'];

/**
 * Leading amount. Accepts "450", "1,200", "1,20,000", "450.50", "1.5k",
 * optionally prefixed with a currency marker ("₹450", "Rs 450").
 * The "k" multiplier only applies when it is not glued to a word, so
 * "450 kitchen supplies" stays 450.
 * @return {?{amount: number, rest: string}}
 */
function parseAmount_(text) {
  if (!text) return null;
  var m = /^\s*(?:₹|rs\.?\s*|inr\s*)?(\d{1,3}(?:,\d{2,3})*(?:\.\d+)?|\d+(?:\.\d+)?)\s*([kK])?(?![A-Za-z0-9])/i.exec(
    text,
  );
  if (!m) return null;
  var amount = parseFloat(m[1].replace(/,/g, ''));
  if (!isFinite(amount) || amount <= 0) return null;
  if (m[2]) amount = amount * 1000;
  return {
    amount: Math.round(amount * 100) / 100,
    rest: text.slice(m[0].length).trim(),
  };
}

function escapeRegex_(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function hasKeyword_(text, keywords) {
  for (var i = 0; i < keywords.length; i++) {
    var re = new RegExp('(^|[^a-z0-9])' + escapeRegex_(keywords[i]) + '($|[^a-z0-9])', 'i');
    if (re.test(text)) return true;
  }
  return false;
}

/** Pulls out "#orchid" / "#repair" style overrides and strips them from the text. */
function extractTags_(text) {
  var flat = '';
  var category = '';
  var cleaned = text.replace(/#([A-Za-z]+)/g, function (full, word) {
    var w = word.toLowerCase();
    if (FLATS.indexOf(w) !== -1) {
      flat = w;
      return '';
    }
    if (CATEGORIES.indexOf(w) !== -1) {
      category = w;
      return '';
    }
    return full;
  });
  return { flat: flat, category: category, text: cleaned.replace(/\s{2,}/g, ' ').trim() };
}

function detectFlat_(text) {
  for (var i = 0; i < FLAT_KEYWORDS.length; i++) {
    if (hasKeyword_(text, FLAT_KEYWORDS[i][1])) return FLAT_KEYWORDS[i][0];
  }
  return 'general';
}

function detectCategory_(text) {
  for (var i = 0; i < CATEGORY_KEYWORDS.length; i++) {
    if (hasKeyword_(text, CATEGORY_KEYWORDS[i][1])) return CATEGORY_KEYWORDS[i][0];
  }
  return 'misc';
}

/**
 * Full parse of an expense message.
 * @return {?{amount:number, description:string, flat:string, category:string}}
 */
function parseExpense_(rawText) {
  if (!rawText) return null;
  var text = String(rawText).replace(/[\r\n]+/g, ' ').trim();
  var parsed = parseAmount_(text);
  if (!parsed) return null;

  var tagged = extractTags_(parsed.rest);
  var description = tagged.text;

  return {
    amount: parsed.amount,
    description: description || '(no description)',
    flat: tagged.flat || detectFlat_(description),
    category: tagged.category || detectCategory_(description),
  };
}

/** ₹ with Indian digit grouping: 1234567 -> ₹12,34,567 */
function formatINR_(n) {
  var num = Number(n) || 0;
  var neg = num < 0;
  num = Math.abs(num);
  var s = (Math.round(num * 100) / 100).toFixed(2).replace(/\.00$/, '');
  var parts = s.split('.');
  var int = parts[0];
  var last3 = int.slice(-3);
  var rest = int.slice(0, -3);
  if (rest) last3 = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + last3;
  return (neg ? '-' : '') + '₹' + last3 + (parts[1] ? '.' + parts[1] : '');
}

function titleCase_(s) {
  s = String(s || '');
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
}

/** "2026-08" -> "Aug 2026" */
function monthLabel_(monthKey) {
  var names = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var bits = String(monthKey).split('-');
  var idx = parseInt(bits[1], 10) - 1;
  if (!names[idx]) return String(monthKey);
  return names[idx] + ' ' + bits[0];
}

/** Shifts a "YYYY-MM" key by n months. */
function shiftMonth_(monthKey, n) {
  var bits = String(monthKey).split('-');
  var y = parseInt(bits[0], 10);
  var m = parseInt(bits[1], 10) - 1 + n;
  y += Math.floor(m / 12);
  m = ((m % 12) + 12) % 12;
  return y + '-' + ('0' + (m + 1)).slice(-2);
}

function isMonthKey_(s) {
  return /^\d{4}-(0[1-9]|1[0-2])$/.test(String(s || '').trim());
}
