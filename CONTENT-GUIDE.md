# Content Guide — How to Update Ajay Mate's Portfolio

All portfolio information is stored in a clean, centralized data file: **`src/data/portfolio.ts`**.  
You never need to edit complex layout code or HTML tags to change your information.

---

## 1. How to Change Your Personal Info or About Text
Open `src/data/portfolio.ts` and locate the `personalInfo` and `aboutData` objects:

```ts
export const personalInfo = {
  name: 'Ajay Mate',
  initials: 'AM',
  role: 'CSE Student · Aspiring Software Engineer',
  tagline: 'Learning by building. Exploring systems from first principles.',
  description: 'Your short bio here...',
  email: 'your_real_email@example.com',
  location: 'City, Country',
  university: 'Your College or University Name',
  degree: 'B.Tech in Computer Science & Engineering',
  yearOfStudy: '3rd Year Undergraduate',
};
```

Simply update the string values and save the file. Vite will automatically reload your changes in the browser.

---

## 2. How to Add a Real Project
In `src/data/portfolio.ts`, find the `projects` array and add a new object:

```ts
{
  id: 'my-new-project',
  title: 'Network Packet Sniffer',
  category: 'Networking & Systems',
  status: 'In Progress', // 'In Progress' | 'Academic' | 'Prototype'
  problem: 'Analyzing network protocol headers in real time can be complex without dedicated packet capture tooling.',
  contribution: 'Built a lightweight packet parser in Python using raw sockets to inspect TCP/UDP headers.',
  learned: 'Deepened practical knowledge of OSI layers and low-level socket programming.',
  techStack: ['Python', 'Sockets', 'Linux', 'Networking'],
  githubUrl: 'https://github.com/ajaymate/packet-sniffer', // optional
  liveUrl: 'https://...', // optional
}
```

---

## 3. How to Update or Add Skills
In `src/data/portfolio.ts`, locate `skillCategories`:
- Add or remove items from the `skills` array of any category.
- Each skill has a `name` and a `tag`:
  ```ts
  { name: 'Go', tag: 'Concurrency & CLI' }
  ```

---

## 4. How to Preview and Build Your Changes
1. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser to preview changes live.

2. **Run Production Build**:
   ```bash
   npm run build
   ```
   This compiles optimized production files into the `dist/` directory.

3. **Deploy**:
   You can deploy the contents of `dist/` directly to Vercel, Netlify, or GitHub Pages.

