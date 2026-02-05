# Product Requirements Document (PRD)
Portfolio Website Personalization for M. Masoom Tariq

## 0. Overview

- Repository: Ali-Raza-2111/PortFolio-Website (ID: 1127500813)
- Description: "This is my PortFolio Website"
- Language composition: JavaScript (91.9%), CSS (4.5%), HTML (3.6%)
- Goal: Update the portfolio template with M. Masoom Tariq’s personal information, keeping specified content unchanged, and integrate provided assets, social links, and contact flow.

## 1. Scope

Implement all content and configuration changes listed below across:
- SEO/meta in `index.html`
- Sections: Navbar, Hero, About, Skills, Projects, Focus, Achievements, Contact, Footer
- Assets in `public/` and `src/assets/`
- Minor repository documentation metadata (optional)

## 2. Provided User Information (to apply)

- Name: "M. Masoom Tariq"
- Role (Home/Hero): "Software Developer & AI Enthusiast"
- Global description (meta/og/twitter): "Software Developer focused on building scalable backend systems and AI-powered applications using Generative AI and Agentic AI technologies."
- Social links:
  - GitHub: https://github.com/masoomtariq
  - LinkedIn: https://www.linkedin.com/in/masoom-tariq-b0aa89291/
  - Twitter/X: https://x.com/mmasoomtariq (label should remain "Twitter")
  - Email: mmasoomtariq@gmail.com
- SEO URLs:
  - og:url: https://github.com/masoomtariq
  - twitter:url: https://x.com/mmasoomtariq
- Keywords (meta): Software Developer, AI, Backend Development, FastAPI, LangChain, LangGraph, RAG, Python
- Resume file name: M_Masoom_Tariq_Resume.pdf
- Profile image: Provided (overwrite `src/assets/Personal_Image.jpeg`)
- Profile image alt text: "M. Masoom Tariq"
- Contact form endpoint: Formspree https://formspree.io/f/xlgwrnzr
- Skills changes:
  - Keep: Python, FastAPI, MongoDB, Git
  - Replace: JavaScript, React, PostgreSQL, OpenAI with: RAG, Agent SDKs, LangChain, LangGraph
  - Skill icon URLs:
    - LangChain: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHeB07C_3v1NyVf7GQc2Sp6Rt4zEPUKaLWqw&s
    - LangGraph: https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/langgraph-color.png
    - RAG: https://cdn.iconscout.com/icon/premium/png-256-thumb/rag-icon-svg-download-png-9339151.png?f=webp
    - Agent SDKs: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSILpPs5YA6XBw5ZmEX4IPP4Ez9lawt4iojlw&s
- Projects (replace all three):
  1) Documentation Book With Chatbot
     - GitHub: https://github.com/masoomtariq/Hakathon_project
     - Live: https://robotics-liart.vercel.app
     - Description: "Developed an interactive textbook platform for robotics using Docusaurus and FastAPI. Integrated a RAG-based AI chatbot using Google Gemini and Qdrant to provide real-time, context-aware learning assistance and semantic search. Built a seamless React interface for conversational tutoring and automated content explanations."
     - Preferred icons: Book/Bot
     - Tags: Use the previously provided Features as Tags (see §5.2)
  2) AI-Powered Document Assistant
     - GitHub: https://github.com/masoomtariq/Document_Q-A
     - Live: none provided (use "#" or omit)
     - Description: "Developed a RAG-based application for interactive querying of PDFs and text files using LangChain and Google Generative AI embeddings. Built a multi-agent workflow with LangGraph to intelligently route queries based on context relevance and document summaries. Integrated MultiQueryRetriever and hybrid model execution (Gemini & LLaMA) to deliver high-accuracy, context-aware responses while tracking performance via LangSmith."
     - Preferred icons: Bot/FileText
     - Tags: Use the previously provided Features as Tags (see §5.2)
  3) Urdu Voice Chatbot
     - GitHub: https://github.com/masoomtariq/Urdu_Bot
     - Live: none provided (use "#" or omit)
     - Description: "Built a bilingual voice chatbot application enabling Urdu users to interact via voice input and audio responses. Integrated Google Gemini for context-aware responses, real-time speech recognition for Urdu language input, and gTTS for natural voice synthesis. Implemented conversation history tracking with comprehensive error handling for enhanced user experience."
     - Preferred icons: Voice/UrduBot (use Mic/Bot combo)
     - Tags: Use the previously provided Features as Tags (see §5.2)
- Achievements:
  - Remove Hackathons
  - Certifications (no dates):
    - "PYTHON FOR DATA SCIENCE, AI & DEVELOPMENT — COURSERA"  
      link: https://www.coursera.org/account/accomplishments/verify/K53DH18T40JM
    - "DEVOPS AND SOFTWARE ENGINEERING WORKFLOWS — COURSERA"  
      link: https://www.coursera.org/account/accomplishments/specialization/GTPCU96ZS6BF
    - "IBM AI ENGINEERING PROFESSIONAL CERTIFICATE — COURSERA"  
      link: https://www.coursera.org/account/accomplishments/professional-cert/SENFDD9C1PZU

## 3. Items to remain unchanged

- Hero section one-liner:
  - "Crafting scalable backend systems and AI-powered applications with a focus on performance, elegance, and minimal design."
- About section:
  - Heading and description text remain as-is
  - Highlights/tags remain: 
    - "Backend Focus — Scalable systems"
    - "AI Integration — Generative AI"
- Focus section:
  - All content remains unchanged
- Footer social label:
  - Keep label "Twitter" though linking to X

## 4. Detailed Requirements by File/Section

### 4.1 SEO and Metadata — `PortFolio Website/index.html`
- Replace:
  - `<title>` → "M. Masoom Tariq | Software Developer & AI Enthusiast"
  - `meta name="title"` → "M. Masoom Tariq | Software Developer & AI Enthusiast"
  - `meta name="description"` → "Software Developer focused on building scalable backend systems and AI-powered applications using Generative AI and Agentic AI technologies."
  - `meta name="keywords"` → "Software Developer, AI, Backend Development, FastAPI, LangChain, LangGraph, RAG, Python"
  - `meta name="author"` → "M. Masoom Tariq"
  - `meta property="og:url"` → "https://github.com/masoomtariq"
  - `meta property="og:title"` → "M. Masoom Tariq | Software Developer & AI Enthusiast"
  - `meta property="og:description"` → (same description as meta)
  - `meta property="og:image"` → "/og-image.png"
  - `meta property="twitter:url"` → "https://x.com/mmasoomtariq"
  - `meta property="twitter:title"` → "M. Masoom Tariq | Software Developer & AI Enthusiast"
  - `meta property="twitter:description"` → (same description as meta)
  - `meta property="twitter:image"` → "/og-image.png"
- Assets:
  - Add/replace `public/og-image.png` with your preview image (required for correct social cards)

### 4.2 Navbar — `src/components/Navbar/Navbar.jsx`
- Replace brand text "Ali Raza" → "M. Masoom Tariq" (desktop and mobile)
- Keep navLinks as-is unless you choose to rename section labels

### 4.3 Hero (Home) — `src/components/Hero/Hero.jsx`
- Replace name heading "Ali Raza" → "M. Masoom Tariq"
- Replace role subtitle to "Software Developer & AI Enthusiast"
- Keep one-liner description unchanged
- Social links:
  - GitHub → https://github.com/masoomtariq
  - LinkedIn → https://www.linkedin.com/in/masoom-tariq-b0aa89291/
  - Email → mailto:mmasoomtariq@gmail.com
- Resume button:
  - href → "/M_Masoom_Tariq_Resume.pdf"
  - download → "M_Masoom_Tariq_Resume.pdf"
- Profile image alt → "M. Masoom Tariq"
- Asset:
  - Overwrite `src/assets/Personal_Image.jpeg`

### 4.4 About — `src/components/About/About.jsx`
- Keep heading, description, and highlights as-is (no content changes)
- Global name replacement not required here (string not present)

### 4.5 Skills — `src/components/Skills/Skills.jsx`
- Keep: Python, FastAPI, MongoDB, Git
- Replace: JavaScript, React, PostgreSQL, OpenAI → RAG, Agent SDKs, LangChain, LangGraph
- Icons:
  - Download icons from provided URLs and store at `src/assets/icons/`
  - Update Skills.jsx to import these files and render via `<img src={skill.icon} alt={skill.name} />` (instead of component `<skill.icon />`)
  - Remove unused react-icons imports
  - Add alt attributes and uniform sizing (e.g., className="w-10 h-10")
- Colors:
  - Assign reasonable colors; or reuse existing color palette

### 4.6 Projects — `src/components/Projects/Projects.jsx`
- Replace the `projects` array with the three new projects (title, description, tags, links)
- Tags requirement:
  - Use the provided Features for each project as Tags (i.e., the tech stack you listed becomes Tags)
- Features requirement (task to perform in PR):
  - Generate exactly four Features for each project derived from its description, similar to existing style ("AI Conversation", "Data Collection", "Auto Emails", "Database Storage")
  - Implement in the `features` array for each project
- Icons:
  - Project 1: Book/Bot (e.g., lucide-react `Book` + `Bot`)
  - Project 2: Bot/FileText
  - Project 3: Mic/Bot (for Voice/UrduBot)
  - Import chosen lucide-react icons and render accordingly
- Bottom link:
  - Update "View all projects on GitHub" → href "https://github.com/masoomtariq"

### 4.7 Achievements — `src/components/Achievements/Achievements.jsx`
- Remove Hackathons (array and UI block)
- Replace Certifications with the three Coursera items (titles + links; omit dates)
- Issuer: "Coursera"

### 4.8 Contact — `src/components/Contact/Contact.jsx`
- Replace simulated submit with Formspree integration:
  - Option A (simplest): `<form action="https://formspree.io/f/xlgwrnzr" method="POST">` with standard name/email/message fields
  - Option B: Use fetch POST to Formspree endpoint and keep custom animations
- Keep section copy intact unless you want wording changed
- Confirm success/failure UX (toast or button state) still works

### 4.9 Footer — `src/components/Footer/Footer.jsx`
- Replace brand "Ali Raza" → "M. Masoom Tariq"
- Social links:
  - GitHub → https://github.com/masoomtariq
  - LinkedIn → https://www.linkedin.com/in/masoom-tariq-b0aa89291/
  - Twitter → https://x.com/mmasoomtariq (keep label "Twitter")

### 4.10 Assets
- `public/M_Masoom_Tariq_Resume.pdf` (ensure link matches Hero)
- `src/assets/Personal_Image.jpeg` (your photo)
- `public/og-image.png` (for social previews)
- `public/favicon.svg` (optional personal favicon)
- `src/assets/icons/` (downloaded skill icons)

### 4.11 Optional Repo Updates
- `README.md`:
  - Update any "Ali Raza" references
  - Add short note about Formspree contact flow
- `package.json`:
  - Update "author" if present

## 5. Tasks and Work Plan

### 5.1 Global replacements
- Replace every occurrence of "Ali Raza" with "M. Masoom Tariq" in Navbar, Hero, Footer, index.html, README (if any)
- Verify no residual strings remain (run a repo-wide search)

### 5.2 Projects Tags and Features
- Implement Tags using the provided tech-stacks ("Features-as-Tags" per user instruction)
- Generate four Features per project from descriptions; examples:
  - Project 1 (Documentation Book With Chatbot):
    - Suggested features: "Context-Aware Tutoring", "RAG Semantic Search", "Docusaurus Integration", "FastAPI Backend"
  - Project 2 (AI-Powered Document Assistant):
    - Suggested features: "Multi-Agent Routing", "PDF/Text Ingestion", "Hybrid Gemini & LLaMA", "LangSmith Monitoring"
  - Project 3 (Urdu Voice Chatbot):
    - Suggested features: "Urdu Speech Recognition", "gTTS Voice Output", "Contextual Responses", "Conversation History"
- Include these as `features` array in Projects.jsx

### 5.3 Skills icons integration
- Download provided icon URLs
- Save to `src/assets/icons/`
- Update Skills.jsx to import and render images with alt text
- Remove unused imports

### 5.4 Contact form
- Replace submit logic to POST to Formspree
- Ensure UX feedback (loading/sent states) still works

### 5.5 SEO & social preview
- Update meta/og/twitter tags with provided values
- Add `public/og-image.png`
- Validate using social preview tools

## 6. Non-Functional Requirements

- Accessibility:
  - Provide descriptive `alt` text for images (skills icons, profile image)
  - Ensure focus states and labels are present
- Performance:
  - Optimize images (WebP/SVG) where possible
  - Keep bundle free of unused imports
- Reliability:
  - Avoid external icon hot-links; prefer local assets to prevent CORS/breakage

## 7. Dependencies & Risks

- External assets (icon URLs) may break; mitigate by downloading locally
- Formspree integration depends on external service availability; consider fallback messaging
- OG image missing will reduce social preview quality; ensure it’s added

## 8. Acceptance Criteria

- All visible “Ali Raza” strings replaced with “M. Masoom Tariq”
- Hero shows correct name, role, social links, resume link (downloads file), and profile alt text
- index.html meta/og/twitter reflect provided description, URLs, keywords, and author
- Skills section shows eight skills (Python, FastAPI, MongoDB, Git, RAG, Agent SDKs, LangChain, LangGraph) with icons and consistent styling
- Projects section lists three updated projects with correct descriptions, Tags (from provided features), four generated Features, and correct GitHub/live links
- Achievements show only the three Coursera certifications with links; no Hackathons
- Contact form submits to Formspree endpoint successfully
- Footer brand/social links updated; label remains "Twitter"
- `public/og-image.png` present; social previews render
- No broken imports, missing assets, or console errors

## 9. Deliverables

- Code changes across specified files
- Added assets (resume, profile image, OG image, skill icons)
- A validation report (or checklist completion) confirming Acceptance Criteria
- Optional README updates documenting contact flow

---

# Instructions for Copilot Agent

## A. Branch & PR

- Create a feature branch: `feat/personalization-masoom-tariq`
- Implement all changes per PRD
- Title PR: "Personalize Portfolio for M. Masoom Tariq"
- PR Description:
  - Summarize changes by section
  - List tasks completed
  - Include a checklist of Acceptance Criteria
  - Note pending assets (if any) and how to add them

## B. Implementation Steps

1. index.html
   - Update all meta/og/twitter tags (title, author, description, URLs, keywords, images)
   - Ensure `public/og-image.png` is referenced

2. Navbar.jsx, Hero.jsx, Footer.jsx
   - Replace names, roles, labels, links
   - Update resume link and download filename
   - Update profile image alt

3. Skills.jsx
   - Replace skills per PRD
   - Download and add icons to `src/assets/icons/`
   - Import icons and render with `<img>` and alt
   - Remove unused icon imports

4. Projects.jsx
   - Replace three projects with new content
   - Apply Tags using provided Features
   - Generate four Features per project (see §5.2)
   - Choose lucide-react icons: Book/Bot, Bot/FileText, Mic/Bot
   - Update "View all projects on GitHub" link

5. Achievements.jsx
   - Remove Hackathons block
   - Replace certifications with provided titles and links

6. Contact.jsx
   - Wire `<form action="https://formspree.io/f/xlgwrnzr" method="POST">`
   - Keep/adjust animated states and success feedback

7. Assets
   - Add `public/M_Masoom_Tariq_Resume.pdf`
   - Overwrite `src/assets/Personal_Image.jpeg`
   - Add `public/og-image.png`
   - Add `src/assets/icons/{rag.svg, agent-sdks.svg, langchain.svg, langgraph.png}` (downloaded from URLs)

8. Optional
   - Update README.md author and notes
   - Update package.json author if present

## C. Validation

- Run dev build and check:
  - No console errors
  - All links valid
  - Formspree POST returns success
- Verify images render and have alt text
- Confirm Acceptance Criteria (see §8)

## D. Notes

- If any asset is missing at PR time, leave a TODO in PR Description and stub the path
- Prefer local assets over remote URLs for reliability
- Keep the Focus section unchanged
