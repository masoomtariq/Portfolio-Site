# M. Masoom Tariq | Portfolio Website

A modern, beautifully crafted portfolio website showcasing software development expertise, AI projects, and technical accomplishments. Built with **React**, **Vite**, **Tailwind CSS**, and **Anime.js** for smooth, performant animations.

## 🎯 Features

- **✨ Smooth Animations**: Scroll-triggered animations with Anime.js for engaging interactions
- **🌓 Dark/Light Theme**: Seamless theme toggle with persistent state
- **📱 Fully Responsive**: Optimized for mobile, tablet, and desktop screens
- **♿ Accessible**: Semantic HTML5, keyboard navigation, and ARIA labels
- **⚡ Performance**: Fast load times with Vite, optimized animations
- **🎨 Modern Design**: Clean, minimalist aesthetic with intentional design choices
- **🧲 Interactive Elements**: Magnetic buttons, tilt effects, and custom cursor

## 📖 Sections

- **Hero**: Eye-catching introduction with CTA buttons and animated profile image
- **About**: Personal narrative with highlight cards
- **Skills**: Technical expertise displayed with animated grid layout
- **Projects**: Featured AI and backend projects with detailed descriptions
- **Focus**: Core philosophies and areas of expertise
- **Achievements**: Professional certifications and milestones
- **Contact**: Email form for inquiries (powered by Formspree)
- **Footer**: Social links and navigation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn installed

### Installation

```bash
# Clone the repository
git clone https://github.com/masoomtariq/Portfolio-Site.git
cd Portfolio-Site

# Install dependencies
npm install

# Set up environment variables
echo "VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_ID" > .env
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
npm run preview
```

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | React 19 |
| **Build Tool** | Vite 7 |
| **Styling** | Tailwind CSS 3 + Custom CSS |
| **Animations** | Anime.js |
| **Icons** | Lucide React, React Icons |
| **UI Components** | Custom + Radix UI (Slot) |
| **Form Handling** | Formspree |
| **Hosting** | Vercel |

## 📁 Project Structure

```
src/
├── components/
│   ├── About/          # About section with highlights
│   ├── Achievements/   # Certifications and milestones
│   ├── Contact/        # Email contact form
│   ├── Focus/          # Core focus areas
│   ├── Footer/         # Footer with social links
│   ├── Hero/           # Hero section with CTA
│   ├── Navbar/         # Navigation bar with theme toggle
│   ├── Projects/       # Project showcase cards
│   ├── Skills/         # Technical skills grid
│   ├── ThemeToggle/    # Dark/light mode toggle
│   └── ui/             # Reusable UI components
├── hooks/
│   └── useAnime.js     # Custom Anime.js hook
├── assets/             # Images and media
├── lib/
│   └── utils.js        # Utility functions (cn)
├── App.jsx             # Main app component
├── main.jsx            # React entry point
└── index.css           # Global styles
```

## 🎨 Design System

### Colors
- **Primary**: Dynamic (system-based - light: #000, dark: #fff)
- **Secondary**: Subtle backgrounds
- **Accent**: Purple to Pink gradients
- **Muted**: Text hierarchy support

### Typography
- **Display Font**: Syne (headings, hero)
- **Body Font**: Manrope (content)

### Animations
- **Page Load**: Staggered reveals with easing
- **Scroll Triggers**: Intersection observer-based animations
- **Hover Effects**: Tilt, magnetic, scale transformations
- **Micro-interactions**: Smooth transitions (300ms-600ms)

## ✉️ Environment Variables

Create a `.env` file in the root directory:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORMSPREE_ID
```

To set up Formspree:
1. Visit [formspree.io](https://formspree.io)
2. Create a new form and copy the endpoint
3. Add it to your `.env` file

## 🚢 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Configuration is handled by `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

### Other Platforms
- Build: `npm run build`
- Output Directory: `dist/`
- Public URL: Configure for SPA routing

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices)
- **Core Web Vitals**: Optimized
- **Bundle Size**: ~150KB (minified + gzipped)
- **Animation FPS**: Smooth 60 FPS with hardware acceleration

## 🔧 Development

### Available Scripts

```bash
npm run dev      # Start dev server with HMR
npm run build    # Production build
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

### Code Quality
- ESLint configuration included
- Follows React best practices
- Semantic HTML5
- Accessibility-first approach

## 🎯 Customization

### Add a New Section
1. Create a component in `src/components/`
2. Import in `src/App.jsx`
3. Add to navigation in `src/components/Navbar/Navbar.jsx`

### Modify Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --primary: 0 0% 9%;
  --secondary: 0 0% 96.1%;
  /* ... */
}
```

### Update Skills/Projects
Edit data arrays in respective component files:
- `src/components/Skills/Skills.jsx`
- `src/components/Projects/Projects.jsx`

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Anime.js Guide](https://animejs.com)
- [Vite Docs](https://vite.dev)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to fork and submit PRs.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**M. Masoom Tariq**
- GitHub: [@masoomtariq](https://github.com/masoomtariq)
- LinkedIn: [@masoomtariq](https://www.linkedin.com/in/masoomtariq/)
- Twitter: [@mmasoomtariq](https://x.com/mmasoomtariq)
- Email: mmasoomtariq@gmail.com

## 🙏 Acknowledgments

- Anime.js for smooth animations
- Tailwind CSS for utility-first styling
- Lucide React for beautiful icons
- Radix UI for accessible primitives
- Formspree for form handling

---

**Last Updated**: February 2026 | **Status**: Active ✨
