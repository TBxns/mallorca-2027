# Spreekuur Design System

> **Spreekuur.nl — eenvoudig digitaal je zorg regelen.**
> A calm, trustworthy Dutch patient platform that lets people arrange their
> healthcare digitally: ask a question, retrieve their medical dossier, order
> repeat medication and book appointments with their own care provider.

This repository is the design system that powers Spreekuur's patient app. It
captures the brand's foundations (color, type, spacing), its reusable UI
primitives, and high-fidelity recreations of real product flows, so designers
and agents can produce on-brand work — production or throwaway — quickly.

---

## What Spreekuur is

Spreekuur is a **mobile-first patient platform** (built on Ionic/Angular).
The patient opens the app and sees a warm, personal greeting and a short list
of things they can arrange. Everything is framed as *helping the patient get
something done* — never as a clinical system. The tone is human, the layout is
generous, and multi-step tasks are broken into calm, numbered wizards.

Core jobs the patient app supports:
- **Vraag stellen** — ask the practice a question (chat / e-consult)
- **Dossier ophalen** — retrieve your medical dossier from a care provider
- **Medicijnen bestellen** — order repeat medication
- **Afspraak maken** — book an appointment

The provider side and the marketing website exist but were **not** part of the
sources provided for this system (see *Sources* below); this system therefore
focuses on the **patient app**.

---

## Sources

This system was reconstructed from first-party material, not screenshots:

| Source | What it provided |
| --- | --- |
| **`spreekuur-core` theme** (Ionic/Angular `ds-native` component library) | The authoritative color, typography and component tokens. Path in the attached codebase: `src/lib/themes/spreekuur-core/`. |
| **`ds-native` components** (`src/lib/...`) | Real implementations of Button, Input, Checkbox, Radio, ListItem, InlineNotification, Wizard, etc. |
| **`afspraken` feature library** (`afspraken/src/...`) | Appointment flows, real Dutch copy (`assets/i18n/nl.json`) and status model. |
| **Figma — "Dossier ophalen.fig"** | The full *Dossier ophalen* wizard, the home dashboard, empty/error states, and the brand illustration set (materialized into `assets/illustrations/`). |
| **`uploads/logo=1.png`, `uploads/logo=2.svg`** | The app icon and the turquoise wordmark. |

Anyone with access can reopen these to verify or extend the system.

---

## Visual identity in one breath

A bright **turquoise speech-bubble** mark over **petrol-teal** UI, warm
**Merriweather** headlines paired with clean **Inter** text, soft cyan zones on
a near-white canvas, rounded low-elevation cards, and friendly line
illustrations on pale "blob" backdrops. Nothing shouts; everything reassures.

---

## CONTENT FUNDAMENTALS

How Spreekuur writes. Copy is in **Dutch** and is the product's main source of
warmth — get this right and the rest follows.

**Voice — warm, plain, reassuring.** Short sentences. Everyday words, never
medical jargon to the patient. The app sounds like a calm receptionist who is
on your side: *"Waarmee kunnen we je helpen?"*, *"Haal je medisch dossier op"*.

**Address the patient as "je" / "jou" (informal).** Always second-person
informal, never the formal "u". The product speaks *to* the patient about
*their* things: *"je dossier"*, *"jouw organisatie"*, *"je afspraken konden niet
worden opgehaald"*. The system refers to itself as "we": *"Waarmee kunnen we je
helpen?"*

**Sentence case everywhere.** Titles, buttons and labels use sentence case, not
Title Case: *"Zoek jouw organisatie"*, *"Afspraak maken"*, *"Probeer opnieuw"*.
Only proper nouns (Spreekuur.nl, DigiD, practice names) are capitalized.

**Verbs for actions, nouns for places.** Buttons and action rows are
imperative verbs: *"Vraag stellen"*, *"Medicijnen bestellen"*, *"Volgende"*,
*"Versturen"*, *"Probeer opnieuw"*. Tabs and sections are short nouns:
*"Overzicht"*, *"Chats"*, *"Afspraken"*, *"Historie"*.

**Errors are calm and actionable — never blame the user.** They state what
happened plainly and offer the next step: *"Er ging iets mis"* →
*"Je kunt nu niet verder. Probeer het opnieuw of neem contact op met de praktijk."*
Empty results coach gently: *"Geen resultaten gevonden — Probeer het opnieuw met
andere zoektermen."* A friendly heading like *"Helaas"* softens dead ends.

**Confirmations are reassuring and specific.** *"Jouw afspraak is succesvol
verstuurd."* *"Je krijgt een melding als jouw afspraak is beoordeeld."*

**Micro-copy patterns to reuse**
- Buttons: `Volgende`, `Vorige`, `Versturen`, `Bevestigen`, `Annuleren`, `Sluiten`, `Probeer opnieuw`, `Doorgaan`, `Stoppen`
- Wizard step counter: `1 van 4` (number — *van* — number)
- Greeting: `Goedemorgen, {voornaam}` then a helping question
- Section headers are 1–2 words: `Acties`, `Direct regelen`

**No emoji.** The product never uses emoji in UI copy. Warmth comes from the
words, the serif headings and the illustrations — not from emoji or exclamation
spam. At most one gentle exclamation in a success message.

---

## VISUAL FOUNDATIONS

**Color.** A two-tone teal brand. The **brand turquoise `#21ACC0`** lives in the
logo and illustration accents; the **UI primary is the deeper petrol-teal
`#166E7B`** — every solid button, link, active tab, selected radio and progress
fill. Surfaces are layered light-on-light: a near-white app canvas `#F9F9F9`,
white cards `#FFFFFF`, and soft cyan zones (`#EEF8FA` secondary, `#D8FAFF`
tertiary) to highlight or group. Text is dark slate `#475055` with medium grey
`#70797D` for secondary lines. Status colors come in base + a very light tint
for backgrounds: success `#02C539`/`#E1FFEA`, warning `#EF8100`/`#FFF1E0`, danger
`#E10036`/`#FFE7EC`. Two special-purpose colors: accent purple `#4C0087` and the
mandated DigiD orange `#E27000` for the login flow. See `tokens/colors.css`.

**Type.** A deliberate serif-display + sans-body pairing is core to the brand.
**Merriweather** (always weight **900 / Black** for h1–h3) gives headings a
warm, personal, almost editorial feel — *"Zoek jouw organisatie"*. **Inter**
carries everything else: body at 16/24 regular, labels and buttons at 16/24
semibold, secondary text at 14/20. The dominant on-screen heading is the
24/32 Merriweather Black screen title. See `tokens/typography.css`.

**Spacing & layout.** A 4px rhythm (`tokens/spacing.css`). Screen gutter is
16px; 24px separates major blocks inside a screen. Mobile-first — the canonical
screen is **360–390px** wide; desktop content caps at **1140px**. A fixed
**56px bottom tab bar** and **56px header** bracket the scrollable content.
Touch targets never drop below 44px; buttons and inputs stand ~48–50px tall.

**Corners & elevation.** Rounded but restrained: inputs, list rows and list
groups at **8px**, cards at **12px**, buttons at **14px**, large sheets at
**16px**, pills/badges fully round. Spreekuur is a **flat, shadowless
product** — surfaces are separated by hairline borders/dividers (`#C8C7CC`)
and background contrast (white cards on the `#F9F9F9` canvas), never by drop
shadows. The design system contains no `box-shadow`.

**Backgrounds & imagery.** No photography in the core flows; no gradients, no
textures, no full-bleed hero images. The signature graphic is the **friendly
line illustration on a soft organic "blob"** background — used for empty states,
errors and feature spots (dossier, chat, kalender, medicatie, metingen…). Line
weight is consistent, accents are turquoise. See `assets/illustrations/`.

**Inputs.** Ionic *md* outline style: a 1px bordered field whose floating label
**notches into the top border**. Focus thickens the border to 2px petrol-teal;
errors turn it danger and reveal a message line; a character counter sits
bottom-right.

**Buttons.** Three weights mirror the real `nds-button-*` directives: **primary**
(solid petrol-teal, white text — the main CTA), **secondary** (outline, dark
border/text — the "Vorige" companion), **tertiary** (text-only teal). Delete
actions use the same shapes in danger red. Wizards always pair a full-width
secondary *Vorige* with a primary *Volgende*.

**Motion.** Subtle and functional, never playful-bouncy. Standard easing
`cubic-bezier(.4,0,.2,1)` at 120–320ms: progress bars glide, sheets slide up,
hovers cross-fade. No infinite decorative animation.

**Interaction states.** Hover darkens solids to their `-shade` (or tints
ghost/secondary with a soft cyan/grey wash); the primary press color is
`--ion-color-primary-shade`. Disabled controls drop to ~45% opacity. Selected
list rows take a soft secondary-cyan fill. Focus is petrol-teal.

---

## ICONOGRAPHY

**System — FontAwesome.** The real product uses **FontAwesome Pro** (the
`@fortawesome/pro-solid`, `pro-light` and `pro-regular` families via Angular's
`fa-icon`). Common glyphs in the codebase: `chevron-right` (every list row),
`xmark` (close), `plus` (add), `arrow-left` / `arrow-right` (wizard nav),
`circle`, `badge`, `triangle-exclamation`, `circle-check`, `circle-info`.

> **⚠️ Substitution flagged:** This system does not ship the licensed Pro
> webfont. The specimens and kits load **FontAwesome Free 6** from CDN, which
> covers the same glyph shapes and stroke family. A handful of Pro-only
> *light/regular* weights fall back to the Free *solid* equivalent. If you have
> the Pro kit, swap the stylesheet link for your Pro kit URL and the icons
> upgrade with no code change. Icons are passed to components as FontAwesome
> class strings (e.g. `"fa-solid fa-chevron-right"`).

**Illustrations, not icon-art.** Larger empty/feature moments use the brand's
**line illustrations**, not enlarged icons — see `assets/illustrations/`
(`SUIllustratie1` covers dossier, chat, kalender, medicatie, metingen, zoeken
and more; `SUEmptyState` composes illustration + title + copy + action).

**No emoji, no unicode glyphs as icons.** Iconography is always FontAwesome or a
brand illustration — never an emoji or a unicode symbol standing in for an icon.

---

## INDEX — what's in this repo

**Foundations**
- `styles.css` — global entry point (imports only); consumers link this.
- `tokens/colors.css` · `typography.css` · `spacing.css` · `fonts.css` · `base.css`
- `guidelines/*.card.html` — Design-System-tab specimen cards (colors, type, spacing, brand).

**Components** (`components/`) — React primitives, each with `.jsx` + `.d.ts` + `.prompt.md` and group cards:
- `forms/` — **Button** (incl. icon-only), **Input**, **Textarea**, **Select** (dropdown + modal), **Checkbox**, **Radio** (simple + list-row forms)
- `navigation/` — **Header**, **ListItem** + **List**, **ListSection**, **ChatListItem**, **SegmentBar**, **Accordion**, **ProgressBar**, **TabBar**
- `feedback/` — **Badge**, **InlineNotification**, **Toast**, **ReadOnly**, **SkeletonListItem**, **EmptyState** (error / no-results / CTA+arrow)
- `layout/` — **Modal** (full-bleed sheet, 0/1/2 footer buttons; also backs Select)
- `complex/` — **Wizard** (multi-step modal shell)

List-item / checkbox / radio / read-only all share the same content layout
(title · subtitle · subtitle-icon · status badge · note · marker · thumbnail);
title-only rows are 44px, growing as lines are added.

**UI kits** (`ui_kits/`)
- `patient-app/` — interactive recreation: DigiD **login** → bottom-tab app
  (**Overzicht** home with empty-actions + Direct regelen, **Chats** list,
  **Dossier** menu → **Afspraken** with Komend empty-state and Historie status
  list → **Afspraak details**, **Profiel** with settings + log-out), plus the
  4-step **Dossier ophalen** wizard. Open `index.html`.

**Assets** (`assets/`)
- `logos/` — `spreekuur-wordmark.svg`, `spreekuur-app-icon.png`
- `illustrations/` — materialized brand illustration bundle (`Components.bundle.js`) + `CATALOG.md`

**Usage**
- `SKILL.md` — lets this folder double as a downloadable Claude Agent Skill.

> The compiler generates `_ds_bundle.js`, `_ds_manifest.json` and
> `_adherence.oxlintrc.json` automatically — never edit those by hand. In card
> and kit HTML, read components via `const { Button } = window.SpreekuurDesignSystem_5ed928`.
