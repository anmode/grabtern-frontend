# Morpankhi Home Stays — Telegram Expense Bot

A zero-cost expense tracker for a 2-person partnership (Anmol + Anuj).
The bot lives in your private Telegram group; a Google Sheet is the
database; Google Apps Script hosts the webhook. No servers, no bills.

```
Telegram group ──webhook──▶ Apps Script web app ──▶ Google Sheet ("ledger")
      ▲                              │
      └────────── replies ───────────┘
```

## What it does

Any group message that **starts with a number** is logged as an expense:

| You type                    | Logged as                                        |
| --------------------------- | ------------------------------------------------ |
| `450 cleaning studio`       | ₹450 · cleaning · Orchid · you · msg time (IST)  |
| `1.5k AC repair florence`   | ₹1,500 · repair · Florence                       |
| `1,200 rent orchid`         | ₹1,200 · rent · Orchid                           |
| `₹2,500 airbnb commission`  | ₹2,500 · commission · General                    |
| `600 misc stuff #orchid #furnishing` | hashtags force flat / category          |

The bot confirms in one line:

```
OK ₹450 | cleaning | Orchid | Anmol | 29 Aug
```

- **Amount**: first number — `450`, `1,200`, `1,20,000`, `450.50`, `1.5k`,
  optional `₹` / `Rs` / `INR` prefix. All amounts INR.
- **Flat**: `studio`/`orchid` → **orchid**, `1bhk`/`florence` → **florence**,
  else **general**. Override with `#orchid` / `#florence` / `#general`.
- **Category**: auto-tagged from keywords — rent, furnishing, cleaning,
  utility, repair, supplies, commission, misc. Override with `#repair` etc.
- **Person**: mapped from your Telegram user id (see config).
- Messages with no leading number (and non-commands) are ignored.

### Commands

| Command          | Does                                                        |
| ---------------- | ----------------------------------------------------------- |
| `/total`         | Current month: total, by person, by flat, by category       |
| `/settle`        | 50-50 settle-up: who owes whom, this month. Also `/settle all`, `/settle 2026-07` |
| `/me`            | Your own spends this month + latest entries                 |
| `/month 2026-08` | That month's summary                                        |
| `/undo`          | Soft-deletes **your** last entry (row stays, flagged)       |
| `/csv`           | Full ledger as a CSV file in chat                           |
| `/help`          | Usage examples                                              |
| `/whoami`        | Your Telegram id + this chat id (works before config too)   |

On the **1st of each month** (9:00 IST by default) the bot automatically
posts last month's summary and settle-up in the group.

## Files

| File             | Purpose                                              |
| ---------------- | ---------------------------------------------------- |
| `Config.gs`      | **Edit this** — token, sheet id, the two user ids    |
| `Code.gs`        | Webhook entry (`doPost`), command router, monthly trigger, `setup()` |
| `Parse.gs`       | Amount / flat / category parsing (pure functions)    |
| `Sheet.gs`       | Ledger read/write, soft delete, CSV export           |
| `Report.gs`      | Summary / settle / confirmation text                 |
| `Telegram.gs`    | Bot API wrapper, `setWebhook`, command menu          |
| `Tests.gs`       | `runSelfTests()` — 33 assertions over the pure logic |
| `appsscript.json`| Manifest (V8, Asia/Kolkata, web app access)          |

Sheet columns: `entry_id, datetime, date, person, amount, description,
flat, category, telegram_msg_id, deleted_flag`.

---

## Setup (≈15 minutes)

### 1. Create the bot with BotFather

1. In Telegram, open **@BotFather** → `/newbot`.
2. Name it (e.g. *Morpankhi Expenses*), pick a username (e.g.
   `morpankhi_expense_bot`).
3. Copy the **HTTP API token** (`123456789:AA...`).
4. **Important:** `/setprivacy` → select your bot → **Disable**.
   With privacy ON (the default) the bot cannot see plain group messages
   like `450 cleaning studio` — only commands.

### 2. Create the Google Sheet

1. [sheets.new](https://sheets.new) → name it *Morpankhi Ledger*.
2. Copy the **Sheet ID** from the URL:
   `https://docs.google.com/spreadsheets/d/`**`<SHEET_ID>`**`/edit`.
   The bot creates the `ledger` tab and headers itself.

### 3. Create the Apps Script project

1. [script.new](https://script.new) → name the project.
2. Create one script file per `.gs` file here (File ➕ → Script) and paste
   the contents: `Config`, `Code`, `Parse`, `Sheet`, `Report`, `Telegram`,
   `Tests`.
3. Project Settings (⚙) → check **Show "appsscript.json"** → paste
   `appsscript.json` over the default manifest.

### 4. Configure

In `Config.gs` set:

```js
BOT_TOKEN: '123456789:AA...',        // from BotFather (or better: Script Property)
SHEET_ID:  '1AbC...xyz',             // from the Sheet URL
ANMOL_ID:  '111111111',              // numeric Telegram ids — see below
ANUJ_ID:   '222222222',
WEBHOOK_SECRET: 'any-long-random-string',
```

**Finding the user ids:** message **@userinfobot** on Telegram, or finish
setup with placeholder ids and send `/whoami` to the bot — it replies with
your id even when unmapped, then update `Config.gs`.

> Prefer keeping `BOT_TOKEN` out of the code: Project Settings → **Script
> Properties** → add `BOT_TOKEN`. Script Properties override `Config.gs`
> for every key.

### 5. Deploy the web app

1. **Deploy → New deployment → Web app.**
2. *Execute as*: **Me** · *Who has access*: **Anyone** (this is what lets
   Telegram's servers call the URL; the `WEBHOOK_SECRET` query param keeps
   strangers out).
3. Authorize the permissions prompt (Sheets + external requests).
4. Copy the **Web app URL** ending in `/exec`.

### 6. Wire it up

In the Apps Script editor, select the **`setup`** function and ▶ Run. It:

- creates the `ledger` tab + headers,
- registers the Telegram command menu,
- installs the 1st-of-month summary trigger (9:00 IST),
- calls `setWebhook` pointing Telegram at your `/exec` URL
  (with `?secret=...`).

If `setWebhook` complains it got a `/dev` URL, add a Script Property
named `WEBAPP_URL` with the `/exec` URL from step 5 as its value, and run
`setWebhook` again. Verify anytime with `getWebhookInfo`.

### 7. Add the bot to your group

1. Create/open the private group with Anmol and Anuj.
2. Add the bot as a member.
3. Send `450 test entry` — you should get
   `OK ₹450 | misc | General | Anmol | …`. Then `/undo` to remove it.
4. The bot remembers this group's chat id automatically for the monthly
   summary (or set `GROUP_CHAT_ID` yourself in Config/Script Properties).

### Redeploying after code changes

Deploy → **Manage deployments** → ✏ edit the existing deployment →
Version: **New version** → Deploy. The `/exec` URL (and the webhook) stay
the same. Creating a *new* deployment instead changes the URL — then you
must run `setWebhook` again.

## Notes & troubleshooting

- **Bot ignores plain messages but answers commands** → BotFather privacy
  mode is still ON (step 1.4), or the sender's id isn't in `Config.gs`.
- **Nothing arrives at all** → run `getWebhookInfo`; a non-empty
  `last_error_message` usually means the web app isn't deployed with
  access *Anyone*, or the URL is stale.
- **`/undo` semantics** — soft delete only: the row stays in the sheet
  with `deleted_flag = TRUE` and is excluded from every total and export
  summary (the CSV includes it, flagged, for audit).
- **Timezone** — all dates/labels are Asia/Kolkata regardless of anyone's
  phone settings.
- **Strangers** — messages from ids other than the two partners are
  ignored (except `/whoami`), and the webhook drops calls without the
  secret.
- **Self-tests** — run `runSelfTests` in the editor after any edit to the
  parsing/report logic.
