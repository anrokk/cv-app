---
name: Prepared Application Desk
description: Calm, clean product UI for honest job-application tailoring.
colors:
  background: "oklch(1 0 0)"
  foreground: "oklch(0.145 0 0)"
  card: "oklch(1 0 0)"
  card-foreground: "oklch(0.145 0 0)"
  primary: "oklch(0.457 0.24 277.023)"
  primary-foreground: "oklch(0.962 0.018 272.314)"
  secondary: "oklch(0.967 0.001 286.375)"
  secondary-foreground: "oklch(0.21 0.006 285.885)"
  muted: "oklch(0.97 0 0)"
  muted-foreground: "oklch(0.556 0 0)"
  accent: "oklch(0.97 0 0)"
  accent-foreground: "oklch(0.205 0 0)"
  destructive: "oklch(0.577 0.245 27.325)"
  border: "oklch(0.922 0 0)"
  input: "oklch(0.922 0 0)"
  ring: "oklch(0.708 0 0)"
  sidebar: "oklch(0.985 0 0)"
  sidebar-foreground: "oklch(0.145 0 0)"
  sidebar-primary: "oklch(0.511 0.262 276.966)"
  sidebar-accent: "oklch(0.97 0 0)"
typography:
  headline:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0"
  title:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0"
  body:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0"
  label:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: "0"
  mono:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: "6px"
  md: "8px"
  lg: "10px"
  xl: "14px"
  "2xl": "18px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    typography: "{typography.label}"
    rounded: "{rounded.2xl}"
    height: "32px"
    padding: "0 12px"
  button-outline:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    typography: "{typography.label}"
    rounded: "{rounded.2xl}"
    height: "32px"
    padding: "0 12px"
  input-default:
    backgroundColor: "{colors.input}"
    textColor: "{colors.foreground}"
    typography: "{typography.body}"
    rounded: "{rounded.2xl}"
    height: "32px"
    padding: "4px 10px"
  sidebar-menu-item:
    backgroundColor: "{colors.sidebar-accent}"
    textColor: "{colors.sidebar-foreground}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    height: "32px"
    padding: "8px 12px"
---

# Design System: Prepared Application Desk

## 1. Overview

**Creative North Star: "Prepared Application Desk"**

The interface should feel like a clear desk before sending one important application: quiet, organized, and focused on the next honest action. The current system is a restrained product UI built from shadcn primitives, Geist typography, OKLCH tokens, rounded controls, and flat tonal layering.

This system serves applicants who need speed without exaggeration. Screens should make it easy to paste a job description, classify confidence levels, review reasoning, and edit generated documents without visual noise. It explicitly rejects clumsy, scattered, or visually noisy interfaces and any generic "AI resume builder" posture.

**Key Characteristics:**
- Restrained white and near-white surfaces with one violet action accent.
- Small, consistent Geist type for dense product workflows.
- Rounded, compact controls that preserve a calm task rhythm.
- Tonal layering and focus rings instead of decorative shadows.
- Copy and UI structure that keep truthful evidence visible.

## 2. Colors

The palette is restrained: monochrome neutrals carry most surfaces, while violet is reserved for primary action, selection, and meaningful state.

### Primary
- **Application Violet** (`primary`): Use for primary actions, active selection, links, and the few moments where the user should make a decision.
- **Soft Violet Ink** (`primary-foreground`): Use only on primary-violet surfaces.

### Neutral
- **Clean Desk White** (`background`, `card`): The dominant workspace surface. Keep it plain and untextured.
- **Document Ink** (`foreground`, `card-foreground`): Primary readable text. Use it for body copy, labels, and document-facing content.
- **Quiet Panel** (`muted`, `accent`): Secondary panels, skeletons, separators with content, hover states, and low-priority surface blocks.
- **Measured Gray** (`muted-foreground`): Secondary descriptions and helper text. Verify contrast before using it over tinted or muted surfaces.
- **Hairline Divider** (`border`, `input`): Borders, field fill, and structural dividers.
- **Focus Gray** (`ring`): Focus-visible rings and outline support.

### Secondary
- **Sidebar Paper** (`sidebar`): Dedicated navigation rail surface, slightly separated from the main white workspace.
- **Sidebar Ink** (`sidebar-foreground`): Navigation labels and icons.
- **Sidebar Violet** (`sidebar-primary`): Sidebar primary state only. Do not use it as decorative color.

### Tertiary
- **Correction Red** (`destructive`): Errors, destructive actions, and overclaim warnings. Keep it semantic and rare.

### Named Rules
**The Violet Earns Attention Rule.** Violet is for primary action, active state, and meaningful selection only. Never use it as decoration.

**The Clean Desk Rule.** White and quiet panels carry the interface. Avoid tinted mood backgrounds, gradient fields, and ornamental color blocks.

## 3. Typography

**Display Font:** Geist with system sans fallback.
**Body Font:** Geist with system sans fallback.
**Label/Mono Font:** Geist Mono for small technical notes and debugging-like cues only.

**Character:** The type system is product-native and calm. It uses weight, spacing, and layout to create hierarchy, not display fonts or oversized headlines.

### Hierarchy
- **Display** (700, use sparingly, 1.5rem to 2rem, 1.15): Reserved for full-page onboarding or empty-state introductions.
- **Headline** (700, 1.25rem, 1.25): Compact page or form titles, such as login and onboarding steps.
- **Title** (500, 1rem, 1.5): Panel titles, section titles, and sidebar group headings when more emphasis is needed.
- **Body** (400, 0.875rem, 1.5): Primary UI copy, descriptions, list text, and document workflow instructions. Cap prose at 65-75ch.
- **Label** (500, 0.875rem, 1.35): Form labels, buttons, and navigation labels. Keep letter spacing at 0 and avoid all-caps labels.
- **Mono** (400, 0.75rem, 1.5): Keyboard hints, technical metadata, version strings, and developer-facing placeholders.

### Named Rules
**The Product Type Rule.** Use Geist for product UI. Do not introduce display fonts, decorative type pairings, or fluid type scales into authenticated workflows.

**The Plain Label Rule.** Labels and button text are sentence case. No tracked uppercase UI chrome.

## 4. Elevation

The system is flat by default. Depth comes from tonal surface changes, separators, focus rings, and small hover or active state shifts. Shadows are acceptable only where a component must separate from the page plane, such as floating sidebars or inset app shells.

### Shadow Vocabulary
- **Inset Shell Lift** (`shadow-sm`): Use only for inset sidebar shells or surfaces that need structural separation from the page.
- **Focus Ring** (`ring-3 ring-ring/30`): The primary interaction elevation. Use for keyboard focus and invalid field emphasis.

### Named Rules
**The Flat Workspace Rule.** Surfaces rest flat. If a shadow is visible before interaction, it must explain structure, not decorate.

## 5. Components

### Buttons
- **Shape:** Fully rounded compact rectangles (`rounded-2xl`, currently about 18px from the token scale).
- **Primary:** Application Violet background with Soft Violet Ink text, medium label type, 32px default height, and 12px horizontal padding.
- **Hover / Focus:** Hover darkens by using `primary/80`; focus uses a 3px ring at `ring/30`; active state translates down by 1px.
- **Secondary / Ghost / Tertiary:** Outline buttons stay on the background with a border and muted hover. Ghost buttons use muted hover only. Destructive buttons use a red tint, never a full red fill unless the action is irreversible and confirmed.

### Chips
- **Style:** Use the button or sidebar menu vocabulary for confidence labels and skill tags: rounded, compact, tonal, and clear.
- **State:** Selected states may use the violet accent or a stronger tonal fill. Inactive chips must stay neutral and low-saturation.

### Cards / Containers
- **Corner Style:** Gently rounded containers (`rounded-xl` to `rounded-2xl`).
- **Background:** Use Clean Desk White for main content and Quiet Panel for placeholders, empty states, and dashboard blocks.
- **Shadow Strategy:** No decorative shadows. Use `shadow-sm` only for structural inset shells.
- **Border:** Use Hairline Divider for boundaries. Avoid side-stripe borders.
- **Internal Padding:** Use 16px for compact panels, 24px for primary forms or larger content groups.

### Inputs / Fields
- **Style:** Compact 32px fields with rounded-2xl corners, transparent border, and `input/50` fill.
- **Focus:** Border shifts to `ring`; focus ring expands to 3px at `ring/30`.
- **Error / Disabled:** Error uses Correction Red text and red ring tint. Disabled fields reduce opacity and remove pointer interaction.

### Navigation
- **Style:** Sidebar navigation uses a dedicated Sidebar Paper surface, compact 32px rows, rounded-xl menu items, and 8px group spacing.
- **States:** Active and hover states use Sidebar Accent with stronger text. Collapsed navigation keeps icon sizing consistent and hides labels rather than resizing the vocabulary.
- **Mobile:** Use the sheet-based sidebar pattern already in the component library. Do not invent a custom mobile drawer.

### Skeletons
- **Style:** Rounded-2xl muted blocks with pulse animation.
- **Purpose:** Loading placeholders should preserve layout shape. Avoid centered spinners where content structure is knowable.

## 6. Do's and Don'ts

### Do:
- **Do** use Application Violet only for primary actions, active states, and meaningful selections.
- **Do** keep authenticated product screens compact, calm, and task-led.
- **Do** show matched skills, gaps, warnings, and wording choices near generated content so the user can trust the output.
- **Do** use visible focus rings, semantic labels, and reduced-motion-safe transitions.
- **Do** keep button labels concrete: "Create account", "Save profile", "Generate tailored CV", "Download PDF".

### Don't:
- **Don't** build a generic "AI resume builder" interface or use vague motivational copy.
- **Don't** create clumsy, scattered, or visually noisy screens.
- **Don't** use exaggerated self-promotion, inflated cover-letter language, or UI that makes juniors sound senior.
- **Don't** make the product feel like a template marketplace, a gamified job board, or a marketing-heavy SaaS dashboard.
- **Don't** bury the user's real evidence under decorative cards, gradients, glass effects, or ornamental illustrations.
- **Don't** use colored side-stripe borders, gradient text, repeating stripe backgrounds, or decorative glassmorphism.
