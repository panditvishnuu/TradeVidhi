---
name: TradeVidhi
colors:
  surface: "#fcf9f8"
  surface-dim: "#dcd9d9"
  surface-bright: "#fcf9f8"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#f6f3f2"
  surface-container: "#f0eded"
  surface-container-high: "#eae7e7"
  surface-container-highest: "#e5e2e1"
  on-surface: "#1c1b1b"
  on-surface-variant: "#5a4139"
  inverse-surface: "#313030"
  inverse-on-surface: "#f3f0ef"
  outline: "#8f7068"
  outline-variant: "#e3bfb4"
  surface-tint: "#af3100"
  primary: "#ab2f00"
  on-primary: "#ffffff"
  primary-container: "#d3410b"
  on-primary-container: "#fffbff"
  inverse-primary: "#ffb59f"
  secondary: "#006c49"
  on-secondary: "#ffffff"
  secondary-container: "#6cf8bb"
  on-secondary-container: "#00714d"
  tertiary: "#b61722"
  on-tertiary: "#ffffff"
  tertiary-container: "#da3437"
  on-tertiary-container: "#fffbff"
  error: "#ba1a1a"
  on-error: "#ffffff"
  error-container: "#ffdad6"
  on-error-container: "#93000a"
  primary-fixed: "#ffdbd1"
  primary-fixed-dim: "#ffb59f"
  on-primary-fixed: "#3a0a00"
  on-primary-fixed-variant: "#862300"
  secondary-fixed: "#6ffbbe"
  secondary-fixed-dim: "#4edea3"
  on-secondary-fixed: "#002113"
  on-secondary-fixed-variant: "#005236"
  tertiary-fixed: "#ffdad7"
  tertiary-fixed-dim: "#ffb3ad"
  on-tertiary-fixed: "#410004"
  on-tertiary-fixed-variant: "#930013"
  background: "#fcf9f8"
  on-background: "#1c1b1b"
  surface-variant: "#e5e2e1"
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: "600"
    lineHeight: 40px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: "600"
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: "600"
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: "400"
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: "500"
    lineHeight: 16px
    letterSpacing: 0.01em
  data-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: "600"
    lineHeight: 24px
  data-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: "600"
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  container-padding: 20px
  card-gap: 16px
---

## Brand & Style

The design system is centered on a premium, high-trust advisory experience for the Indian stock market. It merges the clinical precision of global fintech leaders with a warm, sophisticated color palette that avoids the coldness of traditional banking apps.

The aesthetic is heavily influenced by modern minimalism, prioritizing clarity and negative space. It utilizes a "layered surface" approach where content lives on pure white elevations against a warm architectural background. This creates a focused, high-end environment that reduces cognitive load during complex financial decision-making. The emotional response is one of calm authority, transparency, and precision.

## Colors

The palette is anchored by a warm off-white background (`#F6F5F3`) which distinguishes the product from standard utility apps.

- **Primary Orange:** Used sparingly but boldly for key CTAs, active states, and the signature hero gradient.
- **Semantic Green/Red:** Strictly reserved for financial performance and trade signals (BUY/SELL). These are balanced to be vibrant but legible against white surfaces.
- **Surface Strategy:** Background elements use the off-white base, while all interactive or content-bearing containers use pure `#FFFFFF` to signify elevation.
- **Gradients:** The Hero Card should utilize a linear gradient from `#F15623` to a slightly deeper or more vibrant orange hue to create depth without adding complexity.

## Typography

The design system relies exclusively on **Inter** for its neutral, systematic character. To meet the specific needs of financial data, all numeric values must utilize **Tabular Figures** (`tnum`) and **Slashed Zeros** (`zero`) to ensure columns of numbers align perfectly for easy comparison.

- **Hierarchy:** Financial figures should be weighted 1-step heavier than their descriptive labels (e.g., a Medium weight figure paired with a Regular weight label).
- **Number Formatting:** All currency must follow the Indian numbering system (Lakhs/Crores) formatted as ₹1,23,456.00.
- **Legibility:** Maintain a tight letter-spacing for headlines to create a premium "editorial" feel, while keeping body text at default or slightly increased tracking for clarity.

## Layout & Spacing

The design system follows a strict 8pt grid system (with 4px increments for micro-adjustments).

- **Grid:** Use a 4-column grid for mobile and a 12-column fluid grid for desktop with wide gutters (24px) to maintain the minimalist feel.
- **Safe Areas:** Mobile views should maintain a 20px horizontal margin to prevent content from feeling cramped against the screen edges.
- **Vertical Rhythm:** Group related items with 8px or 12px spacing, while separating major sections with 32px or more to emphasize the "Airwallex-inspired" airy layout.

## Elevation & Depth

This design system avoids hard borders and instead communicates hierarchy through subtle tonal layering and soft shadows.

- **Soft Shadows:** Elements that sit above the background (like cards) use a very diffused, low-opacity shadow.
  - _Example Shadow:_ `0px 4px 20px rgba(26, 26, 26, 0.04)`.
- **Z-Index Strategy:**
  - **Level 0 (Background):** `#F6F5F3` (Warm off-white).
  - **Level 1 (Cards/Surfaces):** `#FFFFFF` (White) with soft shadow.
  - **Level 2 (Overlays/Modals):** High diffusion shadow with 12% opacity.
- **Interactive States:** On hover or press, shadows should slightly deepen or the element should subtly scale (98%) rather than changing border color.

## Shapes

The shape language is sophisticated and approachable.

- **Cards:** Use a generous 20px corner radius to create a soft, premium container.
- **Buttons & Inputs:** Use a 14px radius for a modern, slightly-less-than-pill look, or a full pill shape for primary actions.
- **Pills/Chips:** Always utilize full rounding (height/2) for status indicators and category tags.
- **Icons:** Use a 24px bounding box with a 2px stroke width. Icons should have slightly rounded terminals to match the UI's geometry.

## Components

### Buttons

- **Primary:** Pill-shaped, Primary Orange background, White text.
- **Secondary:** Pill-shaped, White background, subtle 1px border in `#E5E5E5` or no border with a light grey fill.
- **Loading:** Replace text with a spinning monochromatic circle; maintain button width.

### Cards

- **Hero Card:** Features a linear orange gradient. Large white financial figures (`display-lg`) are positioned top-left. Labels are secondary white at 80% opacity.
- **Standard Card:** Pure white, 20px radius, soft elevation. No borders.

### Lists & Tables

- **List Rows:** Use circular leading icons (32x32px) for stock logos or category icons. Left-aligned title (`body-md` bold) and subtitle (`label-sm` muted). Financial data is right-aligned with `data-md` styling.

### Input Fields

- **Text Inputs:** 14px radius, `#FFFFFF` background, subtle light-grey border or soft inner shadow. Floating labels are preferred to maintain the minimalist footprint.

### Toggles & Segments

- **Segmented Control:** A pill-shaped "track" with a sliding white "thumb" for the active state. This is the primary method for switching between "Buy" and "Sell" or "1D", "1W", "1M" chart views.

### Selection Controls

- **Checkboxes/Radios:** Use circular forms for both to maintain the soft visual language. Active state is filled with Primary Orange.
