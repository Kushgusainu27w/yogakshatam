# Design Brief: Yogakshatam

**Tone:** Serene minimalism, meditative, organic, spa-like calm with professional grace. Every interaction invites pause and reflection.

**Visual Direction:** Light, airy, breathing space inspired by yoga practice. Generous whitespace creates visual rhythm. Earthy palette grounds the experience.

| Element | Token | OKLCH Value | Purpose |
|---------|-------|------------|---------|
| **Primary** | sage-green | 0.56 0.09 162 | Grounding, trust, nature. Used for CTAs and key interactions. |
| **Secondary** | soft-brown | 0.72 0.07 40 | Earth element, warmth, secondary accents. |
| **Accent** | muted-gold | 0.65 0.10 70 | Refined highlight, special moments, premium feel. |
| **Background** | warm-cream | 0.98 0.01 70 | Soft, serene canvas. Slight warmth vs pure white. |
| **Muted** | off-white | 0.88 0.02 70 | Section dividers, soft backgrounds for breathing room. |
| **Foreground** | dark-brown | 0.25 0.02 180 | Primary text, high contrast, readable. |

**Typography:** Lora (display) + Nunito (body). Lora brings editorial warmth and grace to headings. Nunito is clean, modern, highly legible for body text.

**Structural Zones:**
- **Header:** Minimal nav, generous padding. `border-b` with `border-muted` for subtle separation.
- **Hero:** Full-width, generous vertical spacing. Feature hero imagery. Blend `gradient-subtle`.
- **Sections:** Alternate `bg-background` and `bg-muted/30` for breathing rhythm. Use `shadow-calm` for card elevation.
- **CTA Buttons:** `bg-primary` with smooth hover. Use `transition-gentle` for serene feel.
- **Footer:** `bg-muted/40` with `border-t`, centered, light text. Calm footer rhythm.

**Spacing & Rhythm:** 6-step scale: 4px, 8px, 12px, 24px, 48px, 96px. Generous gaps between sections create meditative pacing.

**Component Patterns:**
- Cards use `shadow-calm` and `rounded-lg` for softness.
- Inputs have `border-border` and `focus:ring-primary`.
- Links use underline on hover, no aggressive color change.
- Forms are spacious, labels above inputs, helper text in muted tone.

**Motion:** Gentle entrance animations (`animate-fade-in`), no aggressive motion. Hover states use `transition-gentle` (0.4s). Floating accent animations use `animate-float-gentle` for subtle life.

**Contrast & Accessibility:** Light mode: cream background (L=0.98) with dark-brown text (L=0.25) = high contrast (AA+). Dark mode: dark background (L=0.15) with cream text (L=0.92). All interactive states meet WCAG AA.

**Signature Detail:** Generous whitespace as a design element. Breathing room between sections mirrors the pause and presence of yoga practice. Soft shadows add depth without hardness.

**Anti-pattern:** No bright saturated colors, no harsh shadows, no rapid animations, no cramped layouts. Every pixel serves calm.
