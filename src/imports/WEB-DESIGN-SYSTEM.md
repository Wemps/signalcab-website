# Signal Cab Website Design System Reference

> **For AI agents and future developers working on the signalcab-website project.**
> This documents the established design language, tokens, patterns, and conventions
> used across the Signal Cab marketing site (React + Tailwind CSS v4 + Motion).

---

## 1. Brand Identity

- **Product:** Signal Cab -- a DCC locomotive controller iOS app
- **Design Theme:** Tech Industrial -- dark, moody backgrounds with neon accent colors
- **Mode:** Dark mode only (no light mode)
- **Company:** Cascade Made, LLC
- **Social:** GitHub only ([github.com/wemps](https://github.com/wemps))
- **Beta Link:** [TestFlight](https://testflight.apple.com/join/reCD7Tg7)

---

## 2. Color Palette

All colors are applied directly via hex values (not Tailwind CSS theme tokens) to maintain the custom aesthetic.

### Backgrounds

| Token / Usage             | Hex         | Notes                           |
|---------------------------|-------------|---------------------------------|
| Page background           | `#0a0f1a`   | Deepest dark blue-black         |
| Section alt background    | `#0d1117`   | Slightly lighter for contrast   |
| Card / surface            | `#111827`   | Primary card fill               |
| Subtle gradient via       | `#0d1a2a`   | Used in hero gradient midpoint  |
| Subtle gradient to        | `#0a1520`   | Used in hero gradient endpoint  |

### Accent Colors (Neon)

| Name         | Hex         | Usage                                      |
|--------------|-------------|---------------------------------------------|
| Mint         | `#00ffaa`   | Primary brand accent, CTAs, active states   |
| Cyan         | `#00d9ff`   | Secondary accent, info, protocols           |
| Purple       | `#a78bfa`   | Tertiary accent, settings, engineering      |
| Amber        | `#f59e0b`   | Stars, ratings, warnings                    |
| Red / Error  | `#ef4444`   | Danger, E-Stop, destructive actions         |

### Text Colors

| Usage            | Hex         | Tailwind                    |
|------------------|-------------|-----------------------------|
| Heading white    | `#f9fafb`   | `text-[#f9fafb]`           |
| Body white       | `#f3f4f6`   | `text-[#f3f4f6]`           |
| Body gray        | `#9ca3af`   | `text-[#9ca3af]`           |
| Muted gray       | `#6b7280`   | `text-[#6b7280]`           |
| Dimmed gray      | `#4b5563`   | `text-[#4b5563]`           |

### Borders

| Usage             | Hex         |
|-------------------|-------------|
| Default border    | `#1f2937`   |
| Hover border      | `#374151`   |
| Active/mint       | `#00ffaa`   |

### Glow / Shadow Patterns

- Mint CTA glow: `shadow-[0_4px_24px_rgba(0,255,170,0.25)]`
- Mint CTA hover: `shadow-[0_4px_40px_rgba(0,255,170,0.4)]`
- App icon glow: `shadow-[0_0_30px_rgba(0,255,170,0.15)]`
- Background orbs: Large blurred circles with accent colors at 5-8% opacity

---

## 3. Typography

### Font Stack

Fonts are imported in `/src/styles/fonts.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&family=Lora:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap');
```

| Font           | Weights        | Usage                                  |
|----------------|----------------|----------------------------------------|
| Space Grotesk  | 700            | Logo, brand text, badges, tech labels  |
| Lora           | 400, 600, 700  | Section headings (serif, editorial)    |
| Inter          | 400, 500, 600, 700 | Body, UI, buttons, nav, captions  |

### How typography is applied

Typography is **not** applied via Tailwind text-size classes. Instead, all typography is set via inline `style` props:

```tsx
// Heading (Lora)
style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700 }}

// Body (Inter)
style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.7 }}

// Brand / badge (Space Grotesk)
style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: 'uppercase' }}
```

### Size Reference

| Element          | Font        | Size                            | Weight |
|------------------|-------------|--------------------------------|--------|
| Hero h1          | Lora        | `clamp(40px, 6vw, 64px)`      | 700    |
| Section h2       | Lora        | `clamp(28px, 4vw, 40px)`      | 700    |
| Card title       | Inter       | 16-18px                        | 600    |
| Body             | Inter       | 16-18px                        | 400    |
| Body small       | Inter       | 14px                           | 400    |
| Caption          | Inter       | 12-13px                        | 400-600|
| Overline / badge | Space Grotesk | 11-13px                      | 700    |
| Button           | Inter       | 16px                           | 600    |
| Nav link         | Inter       | (default)                      | 400    |

---

## 4. Layout & Spacing

### Max Width

- Content: `max-w-7xl` (1280px)
- Narrow (CTA): `max-w-3xl`
- Padding: `px-4 sm:px-6 lg:px-8`

### Section Spacing

- Standard section: `py-16 sm:py-24`
- Hero top padding: `pt-28 sm:pt-32` (accounts for fixed navbar)

### Card Grid

- Features: `grid sm:grid-cols-2 lg:grid-cols-3 gap-6`
- Steps: `grid sm:grid-cols-3 gap-8`
- Specs: `grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5`

### Corner Radius

- Buttons: `rounded-xl` (12px) or `rounded-2xl` (16px)
- Cards: `rounded-2xl` (16px)
- Badges/pills: `rounded-full`
- App icon: `rounded-2xl`

---

## 5. Component Patterns

### Buttons

**Primary CTA:**
```tsx
<button className="flex items-center justify-center gap-3 bg-[#00ffaa] text-[#0a0f1a] px-8 py-4 rounded-2xl shadow-[0_4px_24px_rgba(0,255,170,0.25)] hover:shadow-[0_4px_40px_rgba(0,255,170,0.4)] transition-all active:translate-y-0.5"
  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 16 }}>
```

**Secondary / Ghost:**
```tsx
<button className="flex items-center justify-center gap-2 text-[#9ca3af] hover:text-[#f3f4f6] px-6 py-4 transition-colors"
  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 16 }}>
```

**Outline:**
```tsx
<button className="flex items-center justify-center gap-2 bg-[#1f2937] text-[#f3f4f6] border border-[#374151] px-8 py-4 rounded-xl hover:bg-[#1f2937]/80 transition-all"
  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 16 }}>
```

### Cards

```tsx
<div className="p-6 bg-[#111827] rounded-2xl border border-[#1f2937] hover:border-[#374151] transition-all hover:shadow-lg">
```

### Status Badges / Pills

```tsx
<span className="px-2.5 py-1 rounded-full text-[11px]"
  style={{
    fontFamily: 'Space Grotesk, sans-serif',
    fontWeight: 600,
    color: statusColor,
    backgroundColor: `${statusColor}15`,
    border: `1px solid ${statusColor}30`,
  }}>
  {status}
</span>
```

### Icon + Color Pattern

Feature icons use a tinted background box:
```tsx
<div className="w-12 h-12 rounded-xl flex items-center justify-center"
  style={{ backgroundColor: `${color}15` }}>
  <Icon size={24} style={{ color }} />
</div>
```

### Floating Pills (Hero)

Animated pills use Motion's `animate` with `repeat: 999` (not `Infinity` -- avoids Web Animations API error):
```tsx
<motion.div
  animate={{ y: [0, -10, 0] }}
  transition={{ duration: 4, repeat: 999, ease: "easeInOut" }}
>
```

### Gradient Text

```tsx
<span className="bg-gradient-to-r from-[#00ffaa] to-[#00d9ff] bg-clip-text text-transparent">
  Reimagined
</span>
```

---

## 6. Animations (Motion)

- Import: `import { motion } from "motion/react"` (from the `motion` package)
- Call it "Motion" not "Framer Motion"
- **Critical:** Use `repeat: 999` instead of `repeat: Infinity` everywhere to avoid the Web Animations API error

### Common Patterns

**Fade-in on scroll:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
```

**Staggered children:**
```tsx
transition={{ duration: 0.4, delay: i * 0.1 }}
```

**Pulsing badge dot:**
```tsx
<motion.div
  className="w-2 h-2 rounded-full bg-[#00ffaa]"
  animate={{ opacity: [1, 0.3, 1] }}
  transition={{ duration: 1.5, repeat: 999, ease: "easeInOut" }}
/>
```

**Breathing glow:**
```tsx
animate={{
  boxShadow: [
    "0 0 16px #00ffaa10",
    "0 0 28px #00ffaa20",
    "0 0 16px #00ffaa10",
  ],
}}
transition={{ duration: 2.5, repeat: 999, ease: "easeInOut" }}
```

---

## 7. Architecture & Routing

### Tech Stack

- **Framework:** React (with TypeScript)
- **Routing:** React Router (Data mode with `createBrowserRouter`)
  - Use `react-router` (NOT `react-router-dom`)
- **Styling:** Tailwind CSS v4 (inline classes + inline `style` for typography)
- **Animation:** Motion (`motion/react`)
- **Icons:** lucide-react

### File Structure

```
/src/app/
  App.tsx              -- RouterProvider entry
  routes.ts            -- createBrowserRouter config
  components/
    Layout.tsx         -- Navbar + Outlet wrapper
    Navbar.tsx         -- Fixed top nav
    Footer.tsx         -- Shared footer
    LandingV1.tsx      -- Production home page (/)
    LandingV2.tsx      -- Alternate home page (/v2)
    LandingBeta.tsx    -- Beta/TestFlight home page (/home-beta)
    Pricing.tsx        -- Pricing page (/pricing)
    PricingCards.tsx    -- Shared pricing tier cards
    PricingWithClubTiers.tsx -- Archived club pricing (/pricing-wclub)
    FoundingClubs.tsx  -- Club recruitment page (/clubs)
    InteractivePhoneMockup.tsx -- Phone mockup component
    figma/             -- Figma Make system components (protected)
    ui/                -- UI primitives
/src/imports/          -- Figma assets, SVGs, reference docs
/src/styles/
  fonts.css            -- Google Fonts import (ONLY place to add fonts)
  theme.css            -- Tailwind v4 theme tokens
```

### Routes

| Path              | Component              | Status        |
|-------------------|------------------------|---------------|
| `/`               | LandingV1              | Production    |
| `/v2`             | LandingV2              | Alternate     |
| `/home-beta`      | LandingBeta            | Beta/TestFlight |
| `/pricing`        | Pricing                | Production    |
| `/pricing-wclub`  | PricingWithClubTiers   | Archived (future use) |
| `/clubs`          | FoundingClubs          | Production    |

### Layout Pattern

All pages share a `Layout` wrapper (Navbar + Outlet). Each page component includes its own `<Footer />` at the bottom (not in Layout, since pages control their own background flow).

---

## 8. Image & Asset Conventions

### Figma Make Assets

In the Figma Make environment, raster images use a virtual `figma:asset` scheme:
```tsx
import heroPhone from "figma:asset/2dc49ee224cdb04c4610e5a1e3a7138e071439c6.png";
```

**These must be replaced with real image paths when deploying outside Figma Make.**

### Key Assets

| Asset                | Import path (Figma Make)                  | Description               |
|----------------------|-------------------------------------------|---------------------------|
| App icon             | `figma:asset/fcaaa15f...`                 | Signal Cab app icon       |
| Logo (navbar/footer) | `figma:asset/b5f733e9...`                 | Horizontal logo lockup    |
| Locomotive BG        | `figma:asset/75387c73...`                 | Background hero image     |
| Hero phone           | `figma:asset/2dc49ee2...`                 | iPhone screenshot mockup  |

### New Images

For new images not from Figma, use the `ImageWithFallback` component:
```tsx
import { ImageWithFallback } from './components/figma/ImageWithFallback';
```

---

## 9. Navbar Conventions

- Fixed position: `fixed top-0 left-0 right-0 z-50`
- Background: `backdrop-blur-xl bg-[#0a0f1a]/80 border-b border-[#1f2937]/60`
- Height: `h-16 sm:h-20`
- Navigation links: anchor hash links (`/#features`, `/#how-it-works`, `/#specs`)
- Internal pages: `navigate("/pricing")` via React Router
- Mobile: Hamburger menu with slide-down panel
- CTA button: Mint green, right-aligned

---

## 10. Footer Conventions

- **Product:** Features, How It Works, Specs, Pricing
- **Support:** Contact, Help Center
- **Legal:** Privacy, Terms (only)
- **Copyright:** Cascade Made, LLC
- **Social:** GitHub (github.com/wemps) only -- no Twitter, no Discord
- Border-top separator, grid layout (1/2/4 columns responsive)

---

## 11. Section Pattern (Content Pages)

Most content sections follow this structure:

```tsx
<section className="py-16 sm:py-24 bg-[#0d1117]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div className="text-center mb-12 sm:mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}>
      {/* Optional overline */}
      <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: 'uppercase' }}>
        SECTION LABEL
      </p>
      {/* Heading with accent span */}
      <h2 style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700 }}>
        Main Heading <span className="text-[#00ffaa]">Accent</span>
      </h2>
      {/* Optional subheading */}
      <p className="text-[#6b7280] max-w-2xl mx-auto"
        style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.7 }}>
        Supporting copy here.
      </p>
    </motion.div>

    {/* Content grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Cards */}
    </div>
  </div>
</section>
```

Alternate sections between `bg-[#0a0f1a]` and `bg-[#0d1117]` for visual rhythm.

---

## 12. Known Issues & Gotchas

1. **`repeat: Infinity`** -- Do NOT use in Motion transitions. Use `repeat: 999` instead to avoid the Web Animations API error.
2. **`react-router-dom`** -- Do NOT import from this. Use `react-router` only.
3. **`figma:asset/...`** -- These are Figma Make virtual imports. They will break outside this environment and need real paths.
4. **Font sizing** -- Do NOT use Tailwind `text-*` classes for font size, `font-*` for weight, or `leading-*` for line-height. Use inline `style` props instead.
5. **`/src/styles/fonts.css`** -- The ONLY place to add font imports. Do not put `@import url(...)` in other CSS files.
6. **Protected files** -- Never modify `/src/app/components/figma/ImageWithFallback.tsx` or `/pnpm-lock.yaml`.

---

## 13. LandingBeta vs LandingV1 Differences

`LandingBeta.tsx` is a copy of `LandingV1.tsx` with these changes:

| Area              | LandingV1 (Production)       | LandingBeta (TestFlight)         |
|-------------------|------------------------------|----------------------------------|
| Hero badge        | (none)                       | Pulsing "Now in Beta" pill       |
| Primary CTA       | "Get Signal Cab" (Apple icon)| "Join the Beta" (TestTube icon)  |
| CTA link          | (none / button)              | TestFlight URL                   |
| Hero copy          | Standard marketing          | Adds "looking for beta testers"  |
| Social proof       | "Loved by 2,000+ operators" | "Trusted by early beta testers"  |
| How It Works       | Connect / Add / Drive       | Join the Beta / Add / Drive & Report |
| Bottom CTA         | Download for iOS + Android  | Single "Join the Beta via TestFlight" |
| Bottom subtext     | (none)                      | "Requires iOS 15+ and TestFlight" |

---

*Last updated: March 5, 2026*
