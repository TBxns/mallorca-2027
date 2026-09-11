# Handoff: Mallorca 2027 — familiereis-app

## Aan de slag met Claude Code

## Demo op je telefoon

Deze map bevat nu een installeerbare PWA-shell rond de bestaande standalone demo.
Start een lokale HTTP-server vanuit deze map:

```bash
python3 -m http.server 4173 --bind 0.0.0.0
```

Open daarna `http://localhost:4173` op je computer. Voor een telefoon op hetzelfde
wifi-netwerk gebruik je het lokale IP-adres van je computer, bijvoorbeeld
`http://192.168.1.20:4173`. Kies in Safari voor **Zet op beginscherm**.

De shell gebruikt `index.html`, `manifest.webmanifest` en `sw.js`. De standalone
prototypepagina blijft de visuele en functionele bron. De huidige demo bewaart
wijzigingen lokaal per toestel; gedeelde stemmen en paklijstvinkjes tussen zes
reizigers vragen nog om een Supabase-project en databaseconfiguratie.

1. Pak dit mapje uit in een lege projectmap en open die map in de terminal met `claude`.
2. Bekijk eerst het design zelf: open `design/Mallorca-2027-app-standalone.html` in een browser. Dat is de app zoals hij bedoeld is.
3. Laat Claude Code eerst **lezen, niet bouwen**:
   *"Lees README.md en design/Mallorca 2027.dc.html volledig. Geef daarna een implementatieplan met techniekkeuze, mapstructuur en een schermenlijst. Bouw nog niets."*
4. Bepaal samen de techniek. Zonder bestaande codebase is Expo (React Native) + Supabase de aanrader — zie *Aanbevolen implementatie* onderaan.
5. Laat het **per scherm** bouwen, niet in één keer: eerst het design system (tokens, Button, ListItem, Header, TabBar), dan Overzicht, dan Dagprogramma, Kaart, Idee&euml;n, Paklijst, en daarna de detailschermen.
6. Zet de gedeelde backend (stemmen, paklijst, wie-ben-jij) vroeg neer; die bepaalt de rest van de architectuur.
7. Houd de seed-data uit `class Component` als eerste vulling van de database — het is echte, complete content voor deze reis.

Vraag Claude Code om na elk scherm te stoppen en het resultaat naast het prototype te leggen; dat houdt de pixels dicht bij het design.

## Overview
Een mobiele app voor één specifieke familievakantie: **Mallorca, 7–14 mei 2027**, zes reizigers, verblijf in Villa Ca na Saurina (Crestatx, gemeente Sa Pobla). De app bundelt alles wat de groep tijdens het plannen én tijdens de reis nodig heeft: dagprogramma, kaart met plekken, ideeën met stemmen, paklijst met vinkjes, restaurants, huisinformatie en boekingsgegevens.

Twee gebruiksmomenten zijn ontworpen (prop `tripMode`):
- **Voor de reis** — plannen, stemmen, paklijst afvinken, aftellen.
- **Tijdens de reis** — vandaag-focus: dag 3 is standaard geopend, live weer, "wat doen we vandaag".

De taal is **Nederlands, informeel ("je")**, sentence case, geen emoji.

## About the Design Files
De bestanden in `design/` zijn **design-referenties, gemaakt in HTML** — werkende prototypes die laten zien hoe de app eruitziet en zich gedraagt. Het is **geen productiecode om over te nemen**.

De opdracht is om deze designs **opnieuw op te bouwen in de doel-codebase** met de patronen en libraries die daar al gelden (React Native, Ionic/Angular, SwiftUI, Flutter, Next.js — wat er ligt). Is er nog geen codebase, kies dan het framework dat past bij de doelen hieronder ("Aanbevolen implementatie") en bouw de designs daar.

Het prototype gebruikt een eigen mini-runtime (`support.js`, `<x-dc>`-templates, `renderVals()`). **Neem die runtime niet over.** Lees hem als specificatie: het template-gedeelte is de markup/layout, de `class Component extends DCLogic` is de state en logica. Alle inhoud (dagen, plekken, restaurants, paklijst, reizigers) staat als constanten bovenin die class — dat is je seed-data.

## Fidelity
**High-fidelity.** Kleuren, typografie, spacing, componenten en copy zijn definitief en komen uit het Spreekuur design system. Bouw de UI pixel-getrouw na met de componenten van de doelcodebase; wijk niet af van de tokens in `design-system/tokens/`.

Uitzondering: de kaart (`design/kaart.html`) is een Leaflet/OpenStreetMap-prototype in een iframe — dat is functioneel-indicatief, niet visueel definitief.

---

## Design system

De app is gebouwd op het **Spreekuur design system** (patiëntenapp van Spreekuur.nl). Alle UI-primitives komen daaruit; er zijn geen eigen componenten uitgevonden.

Meegeleverd in `design-system/`:
- `tokens/colors.css`, `typography.css`, `spacing.css`, `fonts.css`, `base.css`
- `styles.css` (entry point)
- `_ds_bundle.js` (React-implementaties van alle componenten — bruikbaar als referentie-implementatie)
- `readme.md` (volledige systeemgids)

Gebruikte componenten: `Header`, `ListItem`, `List`, `ListSection`, `Button`, `Badge`, `InlineNotification`, `Checkbox`, `SegmentBar`, `ProgressBar`, `TabBar`, `Input`, `EmptyState`, `Accordion`, `Modal`.

### Design tokens (exacte waarden)

**Kleur**
| Token | Hex | Gebruik |
| --- | --- | --- |
| `--ion-color-primary` | `#166E7B` | petrol-teal: knoppen, links, actieve tab, progress |
| brand turquoise | `#21ACC0` | logo/illustratie-accent |
| `--ion-color-secondary` | `#EEF8FA` | zachte cyaan zone |
| `--ion-color-tertiary` | `#D8FAFF` | sterkere cyaan zone |
| `--surface-app` | `#F9F9F9` | app-canvas |
| `--surface-card` | `#FFFFFF` | kaarten, headers, tabbar |
| tekst primair | `#475055` | dark slate |
| tekst secundair | `#70797D` | subtitels, meta |
| divider | `#C8C7CC` (hairlines), lijstscheiding `rgba(71,80,85,0.08)` | |
| success | `#02C539` / bg `#E1FFEA` | |
| warning | `#EF8100` / bg `#FFF1E0` | |
| danger | `#E10036` / bg `#FFE7EC` | |

**Typografie**
- Koppen: **Merriweather, weight 900** — h1–h3. Schermtitel = 24/32.
- Tekst: **Inter** — body 16/24 regular, labels/knoppen 16/24 semibold, secundair 14/20.

**Spacing & maten**
- 4px-ritme; schermgutter 16px; 24px tussen grote blokken.
- Header 56px, bottom tab bar 56px, knoppen/inputs 48–50px hoog, hit targets ≥44px.
- Canoniek schermformaat 360–390px breed (prototype: 390×844, iPhone-frame).

**Radius & elevatie**
- Inputs/lijstrijen/lijstgroepen 8px, kaarten 12px, knoppen 14px, sheets 16px, pills rond.
- **Geen box-shadow.** Scheiding via hairlines en achtergrondcontrast.

**Motion** — `cubic-bezier(.4,0,.2,1)`, 120–320ms. Geen decoratieve loops.

**Iconen** — FontAwesome class-strings (`"fa-solid fa-umbrella-beach"`). Het prototype gebruikt FontAwesome Free 6 via CDN; heeft de codebase de Pro-kit, dan upgraden de glyphs zonder codewijziging.

---

## Informatiearchitectuur

**Bottom tab bar (4 tabs):** Overzicht · Dagprogramma · Kaart · Ideeën · Paklijst
(de tabs-array staat in `renderVals()`; Paklijst is de vijfde rij in de bar)

**Schermen** (state `screen`):
`welkom` · `overzicht` · `dagen` · `kaart` · `ideeen` · `paklijst` · `boekingen` · `meldingen` · `zoek` · `wie` · `uitnodigen` · `plek` · `huis` · `eten` · `resto`

Navigatie is een **stack met eigen history**: `nav(next)` pusht `{screen, tab, plekId, restoId, scrollY}` op `hist`; `terug()` popt en herstelt de scrollpositie. Tab wisselen (`setTab`) reset de stack.

---

## Schermen

### 1. Welkom
**Doel:** binnenkomst, sfeer zetten, aftellen.
**Layout:** volledig wit scherm; fotohero 400px hoog (`assets/photos/cala-aerial.png`, `object-fit: cover`), daaronder titelblok met Merriweather Black, datumregel, aftelteller (dagen tot 7 mei 2027) en primaire knop naar Overzicht.

### 2. Overzicht (home)
**Doel:** landingsscherm; wat speelt er nu.
**Layout:** `padding: 16px 16px 28px`, `flex column`, `gap: 26px`.
Blokken van boven naar beneden:
- Groetregel + naam van de ingelogde reiziger, rechts avatar/initiaal (tikken → *Wie ben jij*), zoek- en belicoon (→ *Zoeken*, *Meldingen* met badge).
- **Aftelkaart / vandaag-kaart** — afhankelijk van `tripMode`: aftellen vs. het programma van vandaag.
- **Weerkaart** — live via Open-Meteo (`lat 39.8037, lon 3.0145`), huidige temperatuur + icoon + 7-daagse min/max. Weercodes gemapt in `WEERCODES`.
- **Acties** — openstaande dingen: nog te stemmen ideeën, paklijst-voortgang.
- **Direct regelen** — `ListItem`-rijen: Het huis · Boekingen · Eten en drinken · Uitnodigen · (telefoonversie: Foto's offline opslaan).

### 3. Dagprogramma
**Doel:** dag-voor-dag zien wat er gepland staat.
**Layout:** sticky `Header` ("Dagprogramma", action-icon `fa-plus`), daaronder een horizontale dagselector (7 chips: vr 7 … vr 14) en per dag een thematitel plus een tijdlijn van items (`tijd`, `titel`, `plek`, `icon`). Data: `DAGEN[]`.
Standaard geopende dag: index 0 (voor de reis) of 2 (tijdens de reis).

### 4. Kaart
**Doel:** alle plekken ruimtelijk zien.
**Layout:** sticky `Header` + full-height iframe met `kaart.html` (Leaflet + OSM-tiles, markers per plek uit `PLEKKEN`).
**Koppeling:** de kaart post `{type:"plek", id}` naar de parent → app navigeert naar het plek-detail. De parent post filter/centreer-berichten terug (`post()` / `mapRef`).
**Filterchips:** alles · strandjes · baaitjes · dorpjes · uitjes · eten · kinderen. Een plek matcht op `cat` **of** op `ook` — zo staat Dei&agrave; zowel onder dorpjes als onder eten. Staat het eten-filter aan, dan tonen die plekken hun `etenNote` in plaats van `note` (in de lijstrij en in de kaart-popup) en krijgt de marker de eten-kleur `#EF8100`. Categoriekleuren: villa `#166E7B`, uitje `#4C0087`, eten `#EF8100`, rest `#21ACC0`.
*In een native app: vervang door de kaart-SDK van het platform (MapKit / Google Maps / Mapbox) met dezelfde marker-naar-detail-flow.*

### 5. Ideeën
**Doel:** iedereen stelt uitjes voor en stemt.
**Layout:** sticky `Header` ("Ideeën", `fa-plus`), categoriechips, dan een lijst met per idee: titel, categorie, korte note, wie het inbracht, stemteller "*n* van 6 stemmen" en een stemknop. Tikken op een idee met `plekId` opent het plek-detail. Data: `IDEEEN[]`, stemmen in `state.votes[ideeId][reizigerId]`.

### 6. Paklijst
**Doel:** samen inpakken zonder dubbel werk.
**Layout:** sticky `Header` ("Paklijst", `fa-plus`), `ProgressBar` met totaal afgevinkt, dan groepen (`documenten`, en verdere sleutels in `PACK`) met `Checkbox`-rijen (titel + note). Onderaan een invoerveld om eigen items toe te voegen (`state.eigenPack`). Afvinken in `state.packed[itemId]`.

### 7. Boekingen
Vluchten, huurauto, villa-boeking: label/waarde-rijen met kopieerknop per referentienummer (`kopieer()` zet kortstondig `gekopieerd`/`kopieFout` voor de bevestiging).

### 8. Het huis
Villa-detail: fotostrook, `VOORZIENINGEN` (icoon + label), `HUISFEITEN` (label/waarde: adres, objectnummer, licentie), `SLAAPKAMERS` (wie slaapt waar), `AFSTANDEN` (supermarkt, restaurant, strand…).

### 9. Eten en drinken → Restaurant
**Eten:** vier groepen uit `ETEN[].groep` — `strand` (Platja de Muro), `stad` (Alc&uacute;dia), `natuur` (S'Albufera) en `verder` ("verder op het eiland": adressen bij plekken die al op de kaart staan). De eerste drie secties tonen een foto-thumb per rij, de vierde een icoon (die restaurants hebben geen sfeerbeeld). Onderaan het blok `GERECHTEN` (lokale gerechten uitgelegd voor de kinderen).
**Restaurant-detail:** header zonder titel met hart-actie, hero-foto met bronvermelding (**alleen gerenderd als er een foto is** — `restoHeeftFoto`), plaats/keuken/sfeer, menu-hoogtepunten (`menu[] {g, n}`), en de bijbehorende plek (`RESTOBIJ`).
**Koppeling plek ↔ restaurant:** `RESTOBIJ` mapt resto-id → plek-id. `restosBij(plekId)` geeft alle restaurants bij een plek; de plek gebruikt dat voor zijn eigen eetlijstje, het restaurant voor zijn navigatie-co&ouml;rdinaten (uit `PRAKTISCH`).

### 10. Plek-detail
Header met hart-actie, hero-foto + credit, categorie-badge, beschrijving, "goed voor", reistijd in minuten (`min`), praktische info uit `PRAKTISCH` (plaats, coördinaten, openingstijden), en een knop om het als idee toe te voegen.

### 11. Zoeken
Eén zoekveld; vanaf 2 tekens gegroepeerde resultaten over: Plekken · Eten en drinken · Ideeën · In het dagprogramma · Paklijst. Elk resultaat navigeert naar zijn bron.

### 12. Meldingen
Afgeleide lijst (`meldingen()`): wat is er veranderd sinds je laatste bezoek — nieuwe stemmen, toegevoegde ideeën, afgevinkte paklijst-items. Gelezen-status per reiziger in `state.gelezen[ik]`.

### 13. Wie ben jij
Reizigerskeuze uit `REIZIGERS[]` (Tijmen, Lis, + vier anderen; id, naam, rol, initiaal). Bepaalt `state.ik` — de identiteit achter stemmen, vinkjes en meldingen.

### 14. Uitnodigen
Deelscherm: uitnodigingslink/-code met kopieerknop en korte uitleg.

---

## Datamodel (seed-data in de logicaklasse)

Alle content zit als constante arrays/objecten in `class Component`. In de echte app worden dit tabellen.

| Constante | Vorm | Inhoud |
| --- | --- | --- |
| `PLEKKEN` | `{id, naam, cat, ook?, icon, note, etenNote?, min, goedVoor, parkeren, tip}` | 60 plekken. `cat` = villa / baai / strand / dorp / eten / uitje / kind. `ook` is een tweede categorie (nu alleen `"eten"`), `etenNote` de eetregel die dan getoond wordt. `min` = rijtijd vanaf de villa. |
| `PRAKTISCH` | `{plaats, coord, open}` per plek-id | Navigatiegegevens en openingstijden; niet elke plek heeft een entry. |
| `FOTO` / `CREDIT` | url / creditregel per plek-id | Wikimedia Commons-foto's met verplichte bronvermelding. |
| `ETEN` | `{id, groep, naam, icon, note, meta, plaats, keuken, sfeer, metOns, reserveren, menu[]}` | 16 restaurants. |
| `RESTOBIJ` / `RESTOFOTO` / `RESTOSFEER` | per resto-id | Gekoppelde plek, sfeerbeeld, creditregel. |
| `IDEEEN` | `{id, titel, cat, note, door, plekId?}` | Voorstellen om op te stemmen. |
| `DAGEN` | `{dag, num, titel, thema, items[]}` | Dagprogramma; items hebben `tijd, titel, plek, icon, badge?, plekId?`. |
| `PACK`, `REIZIGERS`, `BOEKINGEN`, `VOORZIENINGEN`, `HUISFEITEN`, `SLAAPKAMERS`, `AFSTANDEN`, `GERECHTEN` | zie bestand | Paklijst, groep, boekingen, villa-info, gerechten. |

De restaurantadviezen zijn met de hand samengesteld uit publieke bronnen (Tripadvisor, abcMallorca, illesbalears.travel, restaurantguru). **Openingstijden en eigenaren wisselen** — bouw geen aanname in dat deze data actueel blijft; in de echte app horen ze uit een bron met verse gegevens te komen of handmatig beheerd te worden.

## Interacties & gedrag

- **Navigatie:** stack met scrollherstel (zie boven). Terugknop links in de `Header`.
- **Stemmen:** toggle per (idee, reiziger); teller toont "*n* van 6 stemmen".
- **Afvinken:** paklijst-items toggelen; `ProgressBar` en de Acties-kaart op Overzicht updaten mee.
- **Zoeken:** live filteren vanaf 2 tekens, case-insensitive, over alle datasets.
- **Kopiëren:** `navigator.clipboard`, met korte bevestiging en een foutstaat als het niet lukt.
- **Kaart ↔ app:** `postMessage` in beide richtingen.
- **Klok:** `setInterval` van 1s voor de aftelteller.
- **Weer:** fetch bij mount; faalt de call, dan verdwijnt de weerkaart stil (geen foutmelding).
- **Foutstaten:** kalm en actiegericht, nooit de gebruiker de schuld ("Er ging iets mis. Probeer het opnieuw.").

## State

```
ik: string            // huidige reiziger-id ("jij" = Tijmen)
hist: [{screen, tab, plekId, restoId, y}]
screen, tab, day, plekId, restoId
zoek: string
filter: string        // categoriechip op kaart/ideeën
packed: {itemId: bool}
votes:  {ideeId: {reizigerId: bool}}
mee, wens, added, doen, ideeDag: {}   // interesse-/wens-/toegevoegd-vlaggen
eigenPack: [{id, titel}]
packInput: string
gelezen: {reizigerId: {meldingId: bool}}
weerNu, weerDagen
fotoCache: {url: dataURL}   // alleen telefoonversie
```

**Persistentie (telefoonversie):** `ik`, `packed`, `votes`, `mee`, `wens`, `added`, `eigenPack`, `doen`, `uitgenodigd` gaan met 500ms debounce naar `localStorage` onder sleutel `mallorca2027`. Foto's staan als data-URL in IndexedDB (`mallorca-fotos` / store `fotos`).

**Belangrijk voor de echte app:** deze state is nu **lokaal per toestel**. Zes mensen die samen plannen hebben gedeelde state nodig — zie hieronder.

## Aanbevolen implementatie (als er nog geen codebase is)

1. **Gedeelde backend is de kern van de opdracht.** Stemmen en paklijstvinkjes moeten realtime tussen zes toestellen synchroniseren, met per wijziging *wie* en *wanneer*. Supabase (Postgres + realtime + row-level security) of Firebase past hier goed; het datamodel volgt één-op-één de constanten in de logica-class.
2. **Auth licht houden:** geen wachtwoorden — een uitnodigingslink met trip-code plus reizigerskeuze (het scherm *Wie ben jij* is daarvoor al ontworpen).
3. **Offline-first:** de reis is in het buitenland. Lokale cache met achtergrondsync; het prototype toont al de UX voor "foto's offline opslaan".
4. **Platform:** een PWA volstaat functioneel (het prototype draait al als home-screen-app); native (React Native / Expo) alleen als push-meldingen en achtergrondsync doorslaggevend zijn.
5. **Meldingen** zijn nu afgeleid van lokale state; met een backend worden het echte events ("Marjo heeft de reisverzekering afgevinkt").

## Assets

- `design/assets/photos/*.png` — eigen fotomateriaal (hero's, crops, collage). Vrij te gebruiken in het project.
- Plek- en restaurantfoto's worden **live geladen van Wikimedia Commons** (`FOTO`, `RESTOFOTO`); bijbehorende bronvermeldingen staan in `CREDIT` en `RESTOSFEER`. **De credits moeten zichtbaar blijven** — het zijn CC BY-SA-beelden. Voor productie: vervang ze door eigen foto's of neem de licentievermelding correct over.
- Iconen: FontAwesome (zie design system).
- Kaarttiles: OpenStreetMap — attributie verplicht.
- Weerdata: Open-Meteo (gratis, geen key).

## Files

| Bestand | Wat het is |
| --- | --- |
| `design/Mallorca 2027.dc.html` | **Het hoofddesign.** Template = markup/layout, `class Component` = state, logica en alle seed-data. |
| `design/Mallorca 2027 telefoon.dc.html` | Telefoonvariant: zonder device-frame, fullscreen, met localStorage-persistentie en offline foto-opslag. |
| `design/Mallorca-2027-app-standalone.html` | Alles-in-één build; open direct in een browser om de app te bekijken en te gebruiken. **Begin hier.** |
| `design/kaart.html` | Leaflet-kaart die in een iframe draait; communiceert via `postMessage`. |
| `design/ios-frame.jsx` | Alleen presentatie-bezel voor de mockup — niet implementeren. |
| `design/support.js` | Runtime van het prototype — **niet overnemen**, alleen nodig om de .dc.html-bestanden lokaal te openen. |
| `design-system/` | Spreekuur design system: tokens, styles, React-bundel en de volledige gids. |
