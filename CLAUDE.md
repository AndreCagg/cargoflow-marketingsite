# CargoFlow — Marketing Site

Single-page marketing site in React + TypeScript con Tailwind CSS v4. Solo frontend, nessuna chiamata API, responsive mobile-first.

---

## Brand & visual identity

**Logo colors** (inventati):
- Primary: `#0F3D5C` (deep ocean blue)
- Accent: `#F97316` (freight orange)
- Surface: `#0A2840`, `#112E4A`
- Text muted: `#94A3B8`

**Aesthetic**: industrial-precision. Sfondi navy scuri, accenti arancioni taglienti, font monospace per headings e dati. Dot-grid SVG nel hero, stripe diagonale come texture accento.

**Fonts** (Google Fonts): `DM Mono` per heading/display + `DM Sans` per body.

---

## File structure

```
src/
├── app/globals.css
├── components/
│   ├── sections/   Header · Hero · HowItWorks · Benefits · FAQ · Contact · Footer
│   └── ui/         Button · Container · Accordion · AppStoreButton
├── lib/constants.ts
└── App.tsx
```

---

## `src/lib/constants.ts`

Tutto il copy in `as const`. Esportare:

- `NAVIGATION` — `brand`, `sections: [{label, id}]`, `cta`. Le `id` devono combaciare con gli attributi `id` dei `<section>` nel DOM.
- `HERO` — eyebrow, headline (array di 3 righe), subheadline, cta_primary, cta_secondary, stats (array `{value, label}`).
- `HOW_IT_WORKS` — id, eyebrow, headline, steps (array `{number "01"…, title, description, icon}`).
- `BENEFITS` — id, eyebrow, headline, items (array `{title, description, icon}`).
- `FAQ` — id, eyebrow, headline, items (array `{question, answer}`).
- `CONTACT` — id, eyebrow, headline, subheadline, form `{name, company, email, phone, message, submit}` (ogni campo ha `label` e `placeholder`), note.
- `FOOTER` — brand, tagline, links (array `{label, href}`), copyright.

Contenuto: trarre ispirazione dal progetto CargoFlow (tracking ordini, SLA 99.9%, multi-sede, ADR, autisti, magazzinieri, borderò, conservazione 5 anni, OAuth2, OCR su LDV).

---

## `src/app/globals.css`

- `@import "tailwindcss"` in cima.
- Definire i token di design in `@theme {}`: colori brand, font families, border-radius.
- Custom utilities come plain CSS (non `@layer components`):
  - `.bg-dot-grid` — `radial-gradient` ripetuto per il pattern puntinato nel hero.
  - `.bg-stripe` — `repeating-linear-gradient` a -45° con l'accent color a bassa opacità.
  - `.reveal` / `.reveal.visible` — opacity + translateY, transition 0.6s. Partono nascosti, diventano visibili via JS.
  - `.nav-link::after` — underline arancione animato su hover (`width: 0 → 100%`).
  - `.accordion-content` — `grid-template-rows: 0fr → 1fr` per apertura/chiusura smooth senza JS height.

---

## `src/components/ui/`

**Container** — `div` (o tag custom via prop `as`) con `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`.

**Button** — prop `variant` (`primary | outline | ghost`) e `size` (`sm | md | lg`). Primary: bg accent con glow arancione su hover. Usare le CSS variable per i colori, mai hardcode.

**Accordion** — stato locale `openIndex`. Toggle apre/chiude con la tecnica `grid-template-rows`. Icona `+` ruota 45° quando aperto.

**AppStoreButton** — link con icona (emoji o SVG inline), store name e sottotitolo. Varianti `ios | android`.

---

## `src/components/sections/`

### Header
- Fixed top, `z-50`. Trasparente → sfondo navy + `backdrop-blur` dopo scroll (listener `scroll` con `passive: true`).
- Desktop: logo + nav links + CTA button. Mobile: hamburger con 3 barre che si animano in X.
- Ogni link chiama `document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })` con l'id da `NAVIGATION.sections`.

### Hero
- `min-h-screen`, centrato verticalmente, `pt-16` per l'header fisso.
- Background: `.bg-dot-grid` a bassa opacità + blob arancione sfocato (`blur-3xl`) in alto a destra.
- Struttura: eyebrow mono → headline 3 righe (ultima in accent color) → subheadline → 2 CTA → stats bar con bordo top.
- Reveal staggerato al mount con `setTimeout` su elementi `.reveal`.

### HowItWorks
- Grid `md:grid-cols-2`, 4 card.
- Ogni card: numero grande in watermark (posizione assoluta, cambia colore su hover), icona, titolo, descrizione.
- Reveal tramite `IntersectionObserver` con `threshold: 0.15`.

### Benefits
- Grid `sm:grid-cols-2 lg:grid-cols-3`, 6 card.
- Ogni card: icona in box quadrato con bg accent/10, titolo, descrizione. Hover cambia bg della card.
- Accent line orizzontale in cima alla sezione (`gradient` da trasparente → accent → trasparente).
- Reveal tramite `IntersectionObserver`.

### FAQ
- Sezione centrata `max-w-3xl mx-auto`. Usa il componente `Accordion`.
- Reveal tramite `IntersectionObserver`.

### Contact
- Layout `lg:grid-cols-2`: copy a sinistra, form a destra in una card bordata.
- Form: campi nome, azienda, email, telefono, note (textarea). Submit chiama `e.preventDefault()` e imposta `useState(submitted)` a `true` — nessuna fetch.
- Stato submitted: mostra un messaggio di conferma al posto del form.

### Footer
- Logo + tagline a sinistra, nav links a destra. Sotto: copyright + link legali.
- Nav links usano `scrollIntoView` come l'header.

---

## Scroll navigation

Ogni elemento cliccabile della navigazione usa `document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })`. Gli `id` vengono tutti da `NAVIGATION.sections[n].id` in `constants.ts` e devono essere identici agli attributi `id` sui `<section>` nel JSX.

## Scroll reveal

Pattern uniforme in ogni sezione: `IntersectionObserver` su `ref` della sezione, `threshold: 0.1`. Al trigger, iterare `.reveal` con `setTimeout` staggerato (`i * 80ms`). Osservatore disconnesso dopo il primo trigger (`unobserve`). Il Hero usa mount effect con `setTimeout` diretto (non observer).

## Responsiveness

Mobile-first. Breakpoint principali: `md` (768px) per header/layout a due colonne, `lg` (1024px) per griglie a 3 colonne. Header hamburger sotto `md`. Nessun elemento con larghezza fissa che rompa il layout mobile.

## Tailwind v4

Usare `bg-[var(--color-...)]` per referenziare le CSS variable nelle utility class. I token custom vanno in `@theme {}`, non in `:root`. Niente `@layer components` per le utility animate — definirle come plain CSS dopo l'import.