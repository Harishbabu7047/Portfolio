# Harishbabu M - Developer Portfolio

A modern, responsive developer portfolio website built for **Harishbabu M**, Aspiring GenAI Engineer and Software Developer. Built using **React 18**, **Vite**, and **Tailwind CSS** with dark-first design, accessible contrast, smooth navigation, and interactive architecture visualizers.

---

## 🌟 Key Features

- **Dual-Tone Theme System**: Instant toggle between Dark and Light themes with persistent storage in `localStorage` and tailored typography, cards, and glassmorphism in both modes.
- **Direct GitHub & LinkedIn Links**: Configured with Harishbabu's live profile URLs: [GitHub](https://github.com/Harishbabu7047) and [LinkedIn](https://www.linkedin.com/in/harishbabu-m-8b8378256/).
- **AI Automation Pipeline (n8n + Gemini)**: Featured project showcasing an end-to-end multi-platform content pipeline controlled via Telegram Bot webhooks with Google Sheets status tracking and two-way reply approvals.
- **RAG Architecture Flow Visualizer**: Interactive step-by-step pipeline view for the featured *Construction Knowledge System Using RAG* (Documents → Chunking → Sentence Transformers → Embeddings → FAISS → Semantic Retrieval → FastAPI → LLM → Context-Aware Answer).
- **Comprehensive Education History**: Chronological academic timeline covering B.Tech (IT, CGPA 8.0/10), 12th Grade Bio-Maths (91%), and 10th Grade (90%).
- **Interactive Project Case Studies**: Modal dialogs displaying Problem Statement, Engineered Solution, Technology Stack, Architecture Pipeline, and Implementation Overview.
- **Categorized Technical Skills**: Filterable skills section encompassing GenAI & LLMs, Backend & APIs, Vector Databases, Automation, Programming Languages, and Core Subjects.
- **Academic Timeline & Certifications**: Detailed B.Tech education profile (CGPA 8.0/10) and certifications from Anthropic Skilljar, NPTEL, Infosys, and CISCO.
- **Direct Contact & Copy Helper**: One-click email copying with visual feedback, pre-populated direct email message dispatch, and social profiles.
- **Centralized Configuration**: All links (GitHub, LinkedIn, Resume path, Email) are managed in a single configuration file (`src/config.js`).

---

## 🛠️ Technology Stack

- **Frontend**: [React 18](https://react.dev/), [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/), PostCSS, Autoprefixer
- **Typography**: Plus Jakarta Sans & JetBrains Mono (Google Fonts)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Visuals**: Lightweight pure SVG and CSS interactive AI architecture graphic

---

## 📁 Project Structure

```text
Harishbabu_M_Portfolio/
├── public/
│   └── resume/
│       ├── Harishbabu_M_GenAI.pdf   # Place your PDF resume here
│       └── README.txt
├── src/
│   ├── components/
│   │   ├── Navbar.jsx               # Sticky navbar with mobile hamburger menu
│   │   ├── Hero.jsx                 # Hero section with role, CTAs, and config links
│   │   ├── HeroGraphic.jsx          # Interactive AI/RAG SVG node network
│   │   ├── About.jsx                # Verified background & focus areas
│   │   ├── Skills.jsx               # Categorized skills grid with filter tabs
│   │   ├── Projects.jsx             # Featured projects section
│   │   ├── ProjectCard.jsx          # Interactive project card with highlight badges
│   │   ├── ProjectModal.jsx         # Case study & RAG pipeline flowchart modal
│   │   ├── Education.jsx            # Academic timeline card (B.Tech IT, CGPA 8.0)
│   │   ├── Certifications.jsx       # Anthropic, NPTEL, Infosys, CISCO credentials
│   │   ├── Contact.jsx              # Contact details, copy email, mailto form
│   │   └── Footer.jsx               # Quick links, copyright, scroll-to-top
│   ├── data/
│   │   ├── projects.js              # Projects data & architecture steps
│   │   ├── skills.js                # Categorized skill sets
│   │   └── certifications.js        # Certification credentials & metadata
│   ├── config.js                    # Central configuration for URLs & email
│   ├── App.jsx                      # Main application layout
│   ├── index.css                    # Global styles, glassmorphism, scrollbars
│   └── main.jsx                     # Application root entry point
├── index.html                       # HTML5 template with SEO meta tags & fonts
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## ⚙️ Configuration Guide

### 1. Update Profile Links & Email
Open `src/config.js` to set your actual URLs:
```javascript
export const personalConfig = {
  name: "HARISHBABU M",
  roleTitle: "Aspiring GenAI Engineer | Software Developer",
  location: "Villupuram, India",
  email: "harishbabum8@gmail.com",
  phone: "+91 8098637497",
  whatsappUrl: "https://wa.me/918098637497",
  
  // Set your actual links:
  githubUrl: "https://github.com/Harishbabu7047",
  linkedinUrl: "https://www.linkedin.com/in/harishbabu-m-8b8378256/",
  resumePath: "/resume/Harishbabu_M_GenAI.pdf",
};
```

### 2. Update Project Repository Links
Open `src/data/projects.js` and set `githubRepoUrl` for each project:
```javascript
{
  id: "rag-construction",
  title: "Construction Knowledge System Using RAG",
  githubRepoUrl: "https://github.com/your-username/construction-rag-system",
  ...
}
```

### 3. Add Your Real Resume PDF
Copy your resume PDF to:
```text
public/resume/Harishbabu_M_GenAI.pdf
```
The "Download Resume" buttons across the site will automatically download or open this file.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation
Clone or navigate to the directory and install dependencies:
```bash
npm install
```

### Running Locally (Development)
Start the Vite development server:
```bash
npm run dev
```
Open your browser at `http://localhost:5173/`.

### Production Build
Create an optimized production bundle:
```bash
npm run build
```
The output will be generated in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment Instructions

### Deploy to Vercel
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your repository.
4. Framework preset: **Vite**.
5. Build command: `npm run build`.
6. Output directory: `dist`.
7. Click **Deploy**.

### Deploy to Netlify
1. Sign in to [Netlify](https://netlify.com/) and click **Add new site** → **Import an existing project**.
2. Select your repository.
3. Build command: `npm run build`.
4. Publish directory: `dist`.
5. Click **Deploy site**.

### Deploy to GitHub Pages
1. Install `gh-pages`: `npm install -D gh-pages`.
2. Add `"base": "./"` in `vite.config.js`.
3. Add deploy script to `package.json`: `"deploy": "gh-pages -d dist"`.
4. Run `npm run build && npm run deploy`.
