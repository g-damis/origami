# Origami Design System

A reusable Web Components library built with [Lit](https://lit.dev/), following Atomic Design principles. Framework-agnostic — works anywhere native custom elements are supported.

## The name

**Origami** (折り紙) is the Japanese art of folding paper into precise, elegant shapes — starting from a single flat sheet and building complexity through deliberate composition. This mirrors exactly how the library is structured: simple, flat atoms folded together to form more complex molecules.

Just as each fold in origami is intentional and load-bearing, each component in this library has a clear, single responsibility — and they compose cleanly without friction.

## The `oru-` prefix

All components are prefixed with `oru-`, taken directly from **折る** (*oru*) — the Japanese verb meaning *to fold*. It is the root word of *origami* itself (折る + 紙 = fold + paper).

The prefix is short, unique, and carries the identity of the library in every tag you write:

```html
<oru-button>  <oru-accordion>  <oru-collapse>
```

---

## Features

- **6 ready-to-use components** organized as atoms and molecules
- **Design token system** with CSS custom properties for colors, spacing, typography, shadows, and more
- **Theming support** including dark mode via `prefers-color-scheme`
- **Shadow DOM encapsulation** — no global CSS conflicts
- **Full ARIA support** for accessibility
- **Dual module output** — ES module and UMD builds
- **Storybook** for interactive component documentation and visual testing
- **TypeScript** with strict mode and full type safety

---

## Quick Start

### Install

```bash
npm install origami-ds
```

### Import

```js
// Import all components
import 'origami-ds';

// Or import individually
import 'origami-ds/src/atom-components/oru-button.ts';
```

### Use

```html
<oru-button variant="primary">Click me</oru-button>

<oru-accordion title="Section Title">
  Collapsible content goes here.
</oru-accordion>
```

---

## Architecture — Atomic Design

The library follows [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) methodology to organize components by complexity.

### Atoms

Atoms are the smallest, self-contained UI building blocks. They have **no internal dependencies on other library components** and represent a single, focused piece of interface. They can be used standalone or composed into molecules.

| Component | Tag | Description |
|-----------|-----|-------------|
| Button | `<oru-button>` | Interactive button with primary/secondary variants |
| Collapse | `<oru-collapse>` | Collapsible content container, imperatively controllable |
| Header | `<oru-header>` | App header with brand name and login/logout action |
| Footer | `<oru-footer>` | App footer with customizable text |

### Molecules

Molecules **combine two or more atoms** into a higher-level unit that provides richer functionality. They encapsulate the interaction logic between their constituent parts and expose a unified, higher-level API.

| Component | Tag | Composed of | Description |
|-----------|-----|-------------|-------------|
| Accordion | `<oru-accordion>` | `<oru-collapse>` | Expandable sections — single or grouped, with multi-open support |
| Form Row | `<oru-form-row>` | `<oru-button>` | Labeled text input paired with a submit button |

> **Key difference:** an Atom stands alone; a Molecule orchestrates multiple Atoms to deliver a composite interaction.

---

## Component API

### `<oru-button>`

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary'` | `'primary'` | Visual style variant |
| `disabled` | `boolean` | `false` | Disables the button |

| Event | Detail | Description |
|-------|--------|-------------|
| `oru-click` | `Event` | Fired on click (only when not disabled) |

**Slots:** default — button label content.

---

### `<oru-collapse>`

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `open` | `boolean` | `false` | Whether the content is visible |

| Method | Description |
|--------|-------------|
| `show()` | Expand the content |
| `hide()` | Collapse the content |
| `toggle()` | Toggle visibility |

| Event | Detail | Description |
|-------|--------|-------------|
| `oru-toggle` | `{ open: boolean }` | Fired when open state changes |

**Slots:** default — collapsible content.
**CSS Parts:** `content` — the content wrapper.

---

### `<oru-header>`

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `loggedIn` | `boolean` | `false` | Toggles between Login/Logout button |

| Event | Detail | Description |
|-------|--------|-------------|
| `login` | — | Fired when Login is clicked |
| `logout` | — | Fired when Logout is clicked |

---

### `<oru-footer>`

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `text` | `string` | `'Default footer text'` | Footer text content |

---

### `<oru-accordion>`

Supports two modes: **simple mode** (single section via attributes/slots) and **items mode** (multiple sections via the `items` property).

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `items` | `OruAccordionItem[]` | `[]` | Array of accordion items (enables items mode) |
| `multiple` | `boolean` | `false` | Allow multiple items open at once |
| `expanded` | `boolean` | `false` | Expansion state (simple mode) |
| `disabled` | `boolean` | `false` | Disable the entire accordion |
| `title` | `string` | — | Section title (simple mode) |
| `expandIcon` | `unknown` | `null` | Custom expand/collapse icon |
| `icon` | `unknown` | `null` | Alternative icon property |
| `typographyProps` | `{ variant?: OruAccordionVariant }` | `{ variant: 'h2' }` | Title typography variant |
| `onChange` | `(event, isExpanded) => void` | `null` | Callback for state changes |
| `otherProps` | `Record<string, any>` | `{}` | Pass-through attributes to root element |

**OruAccordionVariant:** `'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2'`

| Method | Description |
|--------|-------------|
| `show(index?)` | Expand section at index (default `0`) |
| `hide(index?)` | Collapse section at index (default `0`) |
| `toggle(index?)` | Toggle section at index (default `0`) |

| Event | Detail | Description |
|-------|--------|-------------|
| `oru-change` | `{ expanded, index, openIndexes }` | Fired when any section opens/closes |

**Slots (simple mode):** default — panel content; `title` — title content; `icon` — custom icon.
**Slots (items mode):** `icon-{index}` — per-item icon override.

---

### `<oru-form-row>`

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | `'Label'` | Input label text |
| `buttonText` | `string` | `'Submit'` | Submit button text |

| Event | Detail | Description |
|-------|--------|-------------|
| `oru-submit` | `string` | Fired with the current input value |

---

## Design Tokens

All visual properties are driven by CSS custom properties defined in `src/styles/token.css`. Override them on `:root` or any ancestor to customize the look.

### Colors

| Token | Default | Purpose |
|-------|---------|---------|
| `--oru-color-primary` | `#9a8f97` | Primary actions and highlights |
| `--oru-color-secondary` | `#881616` | Secondary actions |
| `--oru-color-surface` | `#e9e3e6` | Background surfaces |
| `--oru-color-text` | `#b2b2b2` | Text color |
| `--oru-color-accent` | `#c3baba` | Accent elements |

### Spacing (4px scale)

`--oru-spacing-0` (0) through `--oru-spacing-10` (40px).

### Typography

| Token | Default |
|-------|---------|
| `--oru-font-family-sans` | SF Pro Text, Helvetica Neue, Arial, sans-serif |
| `--oru-font-size-xs` | 0.75rem |
| `--oru-font-size-sm` | 0.875rem |
| `--oru-font-size-base` | 1rem |
| `--oru-font-size-lg` | 1.125rem |
| `--oru-font-size-xl` | 1.25rem |

### Other tokens

- **Border radius:** `--oru-radius-none` / `sm` / `md` / `lg` / `full`
- **Shadows:** `--oru-shadow-sm` / `md` / `lg`
- **Z-index:** `--oru-z-index-dropdown` (1000) / `modal` (1100) / `toast` (1200)
- **Transitions:** `--oru-transition-fast` (150ms) / `base` (250ms) / `slow` (400ms)

---

## Theming

Override tokens in your CSS to apply a custom theme:

```css
:root {
  --oru-color-primary: #e91e63;
  --oru-color-secondary: #3f51b5;
  --oru-font-family-sans: "Helvetica Neue", sans-serif;
}
```

Dark mode is supported via `src/styles/theme.css`, which includes a `@media (prefers-color-scheme: dark)` block.

---

## Development

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | TypeScript compile + Vite library build |
| `npm run preview` | Preview the production build |
| `npm run storybook` | Launch Storybook on port 6006 |
| `npm run build-storybook` | Build static Storybook site |

---

## Project Structure

```
src/
  atom-components/      Atoms — self-contained building blocks
    oru-button.ts
    oru-collapse.ts
    oru-header.ts
    oru-footer.ts
  molecule-components/  Molecules — composite components built from atoms
    oru-accordion.ts
    oru-form-row.ts
  styles/
    token.css           Design tokens (CSS custom properties)
    theme.css           Theme overrides and dark mode
    components/         Scoped styles per component (Lit css``)
  stories/              Storybook stories
  types/                TypeScript global declarations
  index.ts              Library entry point
```

---

## Tech Stack

- [Lit](https://lit.dev/) 3 — Web Components framework
- [TypeScript](https://www.typescriptlang.org/) 5.9 — Type safety
- [Vite](https://vite.dev/) (Rolldown) — Build tooling
- [Storybook](https://storybook.js.org/) 10 — Component documentation
- [Vitest](https://vitest.dev/) + [Playwright](https://playwright.dev/) — Testing
- [Chromatic](https://www.chromatic.com/) — Visual regression testing

---

## License

ISC
