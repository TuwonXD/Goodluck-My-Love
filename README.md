# 🩺 VeeRN — A PNLE Reviewer (Goodluck, Lovie!)

> *"To Pass and Top the Boards — First Take, Last Take, No Retakes!"* 🎓✨

A modern, distraction-free **Philippine Nurse Licensure Examination (PNLE) Reviewer** built to empower nursing students and future Registered Nurses with interactive practice quizzes, detailed rationales, customizable question sets, and real-time performance review.

Originally built with love as a dedicated passion project to **help my girlfriend review for and conquer the PNLE**, this application is designed to make reviewing calm, engaging, and deeply effective.

---

## ✨ Key Features

- 📚 **Organized Subject Areas & Test Banks**: Comprehensive coverage across core nursing competency areas.
- 🎨 **Custom Theme Customization**: 5 customizable aesthetic themes (**Pink** [default], **Red**, **Blue**, **Green**, and **White**) powered by centralized OKLCH design tokens.
- 🌓 **Light & Dark Modes**: Seamless display mode switching with zero-flash SSR initialization.
- 🎬 **Celebration Video Popup**: Optional celebration video that triggers on correct answers (can be toggled On/Off or previewed in Settings).
- ⚙️ **Dedicated Settings Dashboard**: Real-time theme picker, display mode switcher, interactive live preview, and one-click default reset.
- 🗂 **Question Navigator Matrix**: Collapsible table matrix to inspect answered, wrong, and current questions with instant navigation.
- 🔀 **Custom Session Setup & Shuffle**: Choose question counts (5, 10, 15, 20... or All available) with randomized Fisher-Yates shuffle.
- 💡 **Instant Answers & Comprehensive Rationales**: Immediate feedback explaining the core clinical concept behind every option.
- 📊 **Filterable Results Table**: Post-quiz review table allowing students to filter questions (All, Mistakes, Correct) and expand detailed rationales.
- 📱 **Responsive 3-Column Grid Layouts**: Clean, modern cards that adapt seamlessly across mobile, tablet, and desktop.

---

## 📂 Subject Areas

```
VeeRN Review Subjects
├── 🏥 Medical-Surgical Nursing (MSN)
├── 👶 Maternal & Child Nursing (MATERN)
├── 🧠 Psychiatric Nursing (PSYCH)
├── 🏘️ Community Health Nursing (CHN)
├── 🩺 Fundamentals of Nursing (FON)
├── 💊 Pharmacology (PHARMA)
├── 📖 Supplementary Practice (SUPPLA)
├── 📝 Comprehensive Pre-Boards / Recall 1 (RCONE)
└── 🎯 Comprehensive Pre-Boards / Recall 5 (RCFIVE)
```

---

## 🚀 Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) (Fullstack React SSR)
- **UI & Components**: [React 19](https://react.dev/), [Radix UI](https://www.radix-ui.com/), [Lucide Icons](https://lucide.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with OKLCH CSS design tokens
- **Routing**: [TanStack Router](https://tanstack.com/router)
- **Deployment & Server**: [Nitro](https://nitro.unjs.io/) (`cloudflare-module` preset) / [Vite](https://vitejs.dev/)

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation & Development

```bash
# 1. Clone the repository
git clone https://github.com/TuwonXD/study-buddy-pnle.git

# 2. Navigate to project directory
cd study-buddy-pnle

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```

The application will run locally at `http://localhost:3000`.

### Production Build

```bash
# Typecheck & build for production
npm run build

# Preview production build locally
npx vite preview
```

---

## 📖 Review Workflow

```
       [ Home ]
          ↓
  Select Subject Area
 (MSN, MATERN, PSYCH...)
          ↓
   Choose Test Bank
          ↓
  Customize Question Count
    (Presets / All Qs)
          ↓
     Take Quiz
  (Instant Rationales,
 Video Celebrations, Matrix)
          ↓
   Results Dashboard
(Mistakes Review Table & Rationales)
```

---

## ⚙️ Settings & Customization

The **Settings Page** (`/settings`) allows full personalization:
1. **Theme Color**: Switch between Pink, Red, Blue, Green, or White.
2. **Display Mode**: Toggle between Light and Dark mode.
3. **Gameplay / Video Popup**: Enable or disable the correct answer celebration video, and preview the video directly with the in-settings player.
4. **Live Preview**: See how cards, buttons, badges, and rationales look live in your selected theme before continuing.

---

## ❤️ Dedication & Acknowledgements

Created with love for **my girlfriend**, and dedicated to every future Filipino Registered Nurse working hard to achieve their nursing license.

> *"Success isn't about answering every question correctly the first time — it's about learning from every mistake until you no longer make it."*

**Made with ❤️ by Tuwon**
