# Portfolio Testing & Verification Checklist — Ajay Mate

## 1. Automated Build & Compilation
- [x] TypeScript compiler check (`tsc -b`): Passed with 0 errors.
- [x] Vite production build (`vite build`): Completed in ~777ms with clean asset hashing (0 errors).
- [x] Dependency cache re-optimized (`vite --force`): Running cleanly with force refresh.
- [x] No missing Lucide exports or unsupported brand icon exceptions.
- [x] Custom SVG icons (`GithubIcon`, `LinkedinIcon`) render cleanly.

---

## 2. Responsive & Visual Layout Checks (Black & Red Editorial Theme)
- [x] **Mobile (360px – 480px)**:
  - Header collapses to compact navigation with accessible hamburger drawer and Escape key support.
  - Hero stacks vertically: introduction on red highlight block, portrait panel ("AM" typography composition), then numbered links.
  - Outlined "PORTFOLIO" background lettering scales smoothly with clamp font sizing without horizontal page scrolling.
  - Zero horizontal overflow (`overflow-x: hidden`).
- [x] **Tablet (768px – 1024px)**:
  - Introduction and portrait panel side-by-side; numbered index links below.
  - Clean two-column grid layouts in Skills and About.
- [x] **Desktop (1150px – 1440px)**:
  - Centered `max-w-[1280px]` container.
  - Three-column layout in Hero: Left (Ajay Mate bio & CTAs), Center (vivid red portrait panel with AM typography and corner brackets), Right (numbered index rows `01`, `02`, `03`).
  - Below-hero horizontal strip with quick jump links and section indicators.
  - 3-column project cards with aligned buttons and tags.

---

## 3. Interaction & Accessibility Checks
- [x] **Keyboard Navigation**:
  - Focus outlines are visible with `#FF453A` 2px ring.
  - Case study modal traps clicks inside card and closes with Close button or clicking backdrop.
  - Mobile drawer closes with `Escape` key and resets body scroll.
- [x] **Motion & Reduced Motion**:
  - `prefers-reduced-motion: reduce` resets animation durations and transitions to 0.01ms.
  - No flickering or rapid glitch animations.
  - Background effects (`BackgroundEffects.tsx`) uses `pointer-events-none` so it never intercepts clicks.
- [x] **Copy Email**:
  - Clicking "Copy Email" triggers clipboard copy and displays "Copied" feedback state.
  - Direct `mailto:` fallback link remains clickable.
- [x] **Back to Top**:
  - Working smooth scroll back to top of document.

---

## 4. Manual Review Checklist (For Ajay)
- [ ] View at `http://localhost:5173/` in desktop and mobile viewports.
- [ ] Confirm the black-and-red editorial aesthetic matches the reference styling.
- [ ] Replace placeholder GitHub / LinkedIn URLs in `src/data/portfolio.ts` with your actual handles when available.
- [ ] Provide your personal portrait photo when ready (to replace the typographic "AM" fallback in `Hero.tsx`).


---

## 5. Iteration 4 Animation & Performance Checks
- [x] **Continuous Hacker Background**:
  - Canvas renders faint scrolling hex strings, bytecode streams, and subtle red scanlines.
  - Dark gradient overlay keeps foreground text high-contrast and legible.
  - Pauses on tab blur/hidden via `visibilitychange`.
  - Pixel density capped at 1.5; throttled frame rate (~32 FPS) avoids CPU drain.
- [x] **Word-by-Word Scroll Reveals**:
  - Triggers once per element on scroll into view.
  - Completes within ~0.85 seconds.
  - Zero layout jumping/shifts (inline-block words with natural spacing).
  - Screen reader friendly: full sentence announced cleanly via `sr-only`.
  - Disables instantly and displays full text when `FX: OFF` or `prefers-reduced-motion` is active.
- [x] **Ghost Cursors**:
  - 4 subtle decorative cursors moving along paths with natural pauses.
  - Hidden on mobile (`hidden md:block`); completely hidden from screen readers (`aria-hidden="true"`).
  - Uses `pointer-events: none` so it never intercepts user clicks or buttons.
- [x] **Floating 3D Title**:
  - Layered dimensional depth with perspective and slow 10s floating motion loop.
  - Light shimmer sweep adds a metallic reflection.
  - Subtle pointer-responsive tilt enabled only on devices with fine pointers.
  - Clipped inside hero container without horizontal scrollbar overflow.
- [x] **Effects Toggle & Focus**:
  - Accessible `[FX: ON] / [FX: OFF]` button in Navbar with `aria-pressed`.
  - Project cards lift on hover (`-translate-y-1`) with red border glow.
  - Button arrows translate smoothly on hover.
