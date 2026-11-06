# Ajay Mate — Futuristic Editorial Developer Portfolio

A bold, high-contrast, editorial personal portfolio for **Ajay Mate**, Computer Science & Engineering undergraduate and aspiring software engineer. Inspired by cinematic, futuristic design systems featuring near-black backgrounds, vivid red accents, oversized outlined display typography, sharp rectangular panels, and technical registration details.

---

## 🛠 Technology Stack
- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with CSS-first `@theme` configuration
- **Typography**: Google Fonts — Anton, Barlow Condensed, Inter, JetBrains Mono
- **Icons**: Lucide React + Custom SVG brand components (`GithubIcon`, `LinkedinIcon`)

---

## 🎨 Visual Direction & Palette
- **Main Background**: `#080808`
- **Editorial Panels**: `#111113` (elevated `#18181B`)
- **Primary Accent**: `#FF453A` (vivid red)
- **Primary Text**: `#F2F0EB`
- **Secondary Text**: `#AAA6A3`
- **Dividers & Borders**: `#292629`
- **Decorative Cyan Marker**: `#00F0FF`

---

## 📐 Layout & Composition Highlights

### 1. Three-Column Editorial Hero
- **Background**: Massive outlined `PORTFOLIO` lettering (`-webkit-text-stroke: 1.5px rgba(255, 69, 58, 0.45)`, overflow clipped, non-overflowing).
- **Left Column**: "Hello, I’m" tag, "AJAY MATE." set in large condensed white lettering on a solid red rectangular block, role label, concise personal bio, and rectangular buttons ("View Projects", "Contact Me").
- **Center Column**: Prominent red portrait card featuring high-contrast "AM" typography fallback, technical corner brackets, and framing captions.
- **Right Column**: Numbered quick index (`01 / ABOUT`, `02 / SELECTED WORK`, `03 / CURRENTLY LEARNING`) separated by thin rules.
- **Sub-Hero Strip**: Monospace navigation strip with section numbers and red indicator.

### 2. Lower Sections
- **01 / About**: Two-column layout with engineering mindset biography, academic snapshot, and active study tracks.
- **02 / Selected Work**: Rectangular cards with problem statement, individual contributions, tech stack tags, and case study detail modals.
- **03 / Technical Skills**: Structured grid without fake percentage bars, cleanly separating confirmed skills from topics actively being explored.
- **04 / Contact**: "LET'S BUILD SOMETHING." headline, direct email copy action, verified links, and "Back to Top" control.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev -- --force
```
Open **`http://localhost:5173/`** to view the live website.

### 3. Build for Production
```bash
npm run build
```
Generates production assets in `dist/`.

---

## 📝 Content Customization
All factual personal information, skills, and projects can be edited in:
```
src/data/portfolio.ts
```
No layout or JSX files need to be edited to update content.
