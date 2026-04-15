```markdown
# Design System Document: High-End Digital Editorial

## 1. Overview & Creative North Star: "The Luminal Intelligence"

This design system is built to move beyond the "SaaS template" aesthetic, positioning the Jana AI Platform as a category-defining leader. Our Creative North Star is **"The Luminal Intelligence"**—a concept where data isn't just displayed; it is illuminated.

We achieve a premium, investor-facing vibe by rejecting the rigid, "boxy" nature of traditional web design. Instead, we use **intentional asymmetry**, **extreme typographic scale**, and **tonal depth**. The interface should feel like a high-end physical object—a piece of frosted glass suspended in a void, catching the light from a distant cyan sun. This is a "No-Line" system: we define space through light and shadow, never through harsh strokes.

---

## 2. Colors: Tonal Depth & The Gradient Soul

Our palette is rooted in the deep space of the `surface` (#070d1f). We treat color as light energy, not just a fill.

### The Palette
- **Primary (`#5bf4de`):** Our "Teal Spark." Used for critical actions and high-energy focal points.
- **Secondary (`#34b5fa`):** Our "Cyan Flow." Provides a calming, professional counter-balance to the primary teal.
- **Tonal Layers:** Use `surface_container_lowest` (#000000) for deep recesses and `surface_container_highest` (#1c253e) for prominent foreground elements.

### The "No-Line" Rule
**Explicit Instruction:** Prohibit 1px solid borders for sectioning. Boundaries must be defined solely through background color shifts. To separate a section, transition from `surface` to `surface_container_low`. If you feel the urge to draw a line, use a 48px vertical gap instead.

### The "Glass & Gradient" Rule
To achieve "The Luminal Intelligence," use **Glassmorphism** for all floating components (modals, dropdowns, navigation bars).
- **Formula:** Fill: `surface_variant` at 40% opacity + `backdrop-filter: blur(20px)`.
- **Signature Texture:** Main CTAs should never be flat. Use a linear gradient from `primary` (#5bf4de) to `secondary` (#34b5fa) at a 135-degree angle to provide a "liquid silk" finish.

---

## 3. Typography: Editorial Authority

We use a high-contrast pairing: **Space Grotesk** for futuristic precision and **Manrope** for human-centric readability.

| Level | Token | Font | Size | Weight | Intent |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display** | `display-lg` | Space Grotesk | 3.5rem | 700 | Hero statements. Use tight letter-spacing (-0.04em). |
| **Headline** | `headline-lg` | Space Grotesk | 2rem | 600 | Section entries. Use for "The AI Advantage" type content. |
| **Title** | `title-lg` | Manrope | 1.375rem | 600 | Card headings and sub-features. |
| **Body** | `body-lg` | Manrope | 1rem | 400 | The workhorse. Maintain 1.6x line-height for luxury "breathing room." |
| **Label** | `label-md` | Manrope | 0.75rem | 700 | All-caps, tracked out (0.1em) for tiny metadata. |

---

## 4. Elevation & Depth: Tonal Layering

Traditional shadows are too "dirty" for this system. We use **Ambient Light** and **Stacking**.

### The Layering Principle
Create depth by nesting surface tokens. 
*   **Level 0 (Floor):** `surface` (#070d1f)
*   **Level 1 (Section):** `surface_container_low` (#0c1326)
*   **Level 2 (Card):** `surface_container` (#11192e)
*   **Level 3 (Feature):** `surface_container_highest` (#1c253e)

### Ambient Shadows
For floating elements (e.g., Primary CTAs), use an ultra-diffused shadow:
- `box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(91, 244, 222, 0.1);`
The shadow is tinted with the `primary` color to simulate glowing light.

### The "Ghost Border" Fallback
If accessibility requires a container boundary, use a **Ghost Border**: `outline_variant` at 15% opacity. It should be felt, not seen.

---

## 5. Components: The Primitive Set

### Buttons
- **Primary:** Gradient (`primary` to `secondary`), `full` roundedness, white text with a subtle drop shadow. No border.
- **Secondary:** Ghost style. Transparent fill, `Ghost Border` (15% opacity), text in `primary_fixed`.
- **Tertiary:** Text-only in `secondary_fixed`, using `label-md` styling (all-caps).

### Cards
- **Construction:** Use `xl` (1.5rem) corner radius. 
- **Style:** Background `surface_container_low`. 
- **Interaction:** On hover, shift background to `surface_container_high` and add a `primary` glow to the top-left corner (a subtle radial gradient). **Never use divider lines** inside cards; use `body-md` vs `label-sm` typographic hierarchy to separate content.

### Input Fields
- **Base:** `surface_container_lowest` fill, `md` roundedness. 
- **Active State:** Border transitions to a 1px `primary` glow. Helper text must be in `on_surface_variant` (#a5aac2) to remain unobtrusive.

### Data Visualization (The "Jana AI" Special)
For charts, use `primary` and `tertiary` (#64b3ff) exclusively. Use blurred "glow" points at data peaks to reinforce the "Luminal" theme.

---

## 6. Do's and Don'ts

### Do
- **Do** use massive amounts of whitespace. If a section feels "full," double the padding.
- **Do** use `display-lg` text that overlaps slightly with a background image or a `surface_container` to create a sense of three-dimensional depth.
- **Do** use `Glassmorphism` for the main navigation bar, pinned to the top with a heavy blur (30px).

### Don't
- **Don't** use pure white (#FFFFFF) for body text. Use `on_background` (#dfe4fe) to reduce eye strain and feel more integrated.
- **Don't** use standard 1px borders. If you can't define a shape with color or space, the layout needs to be simplified.
- **Don't** use sharp corners. Everything must feel "molded" and ergonomic, using the `xl` (1.5rem) or `full` roundedness tokens.
- **Don't** use generic icons. Use thin-stroke (1pt or 1.5pt) custom SVG icons that match the `outline` token color.

---

## 7. Signature Layout Patterns: The Asymmetric Grid

To break the "template" feel, use a 12-column grid but offset your content:
- **The "Hero Shift":** Place your `display-lg` headline across columns 1–8, but place the supporting `body-lg` text in columns 6–10. This diagonal flow guides the eye more naturally than center-alignment.
- **Layered Imagery:** Never place an image in a simple box. Overlap a `surface_container` card with a glassmorphic element, and let a blurred `primary` glow sit *behind* the image to give it "weight."