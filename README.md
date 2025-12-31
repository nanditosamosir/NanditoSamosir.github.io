# The Portfolio Times

A vintage newspaper-styled portfolio website showcasing professional experience, technical projects, and skills. Built with modern web technologies while maintaining a classic newspaper aesthetic.

## 🎨 Features

- **Newspaper-Styled Design** - Elegant vintage newspaper layout with classic typography
- **Responsive Layout** - Fully responsive design that works on desktop, tablet, and mobile devices
- **Professional Content Sections**:
  - Hero article with professional profile
  - Experience record and career history
  - Engineering projects showcase
  - Educational background
  - Skills & classifieds
  - Contact information and call-to-action
- **Interactive Elements** - Hover effects, smooth transitions, and engaging UI
- **PDF CV Download** - Quick access to complete curriculum vitae
- **Social Links** - Direct links to LinkedIn, GitHub, and email

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, Tailwind CSS
- **JavaScript Framework**: React 19.2.3 (for interactive components)
- **Styling**: Custom CSS + Tailwind CSS utilities
- **Typography**:
  - Chomsky (masthead/headlines)
  - Domine (secondary headlines)
  - Lora (body text)
  - Libre Franklin (sans-serif accents)
- **Build Tool**: Vite 6.4.1
- **Type Safety**: TypeScript
- **AI Integration**: Google Generative AI (for interactive editor widget)

## 📋 Project Structure

```
PortWebsite/
├── index.html          # Main HTML structure
├── index.tsx           # React entry point
├── style.css           # Custom styling
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
├── package.json        # Project dependencies
├── assets/             # Images and static assets
│   └── hero_image.png
│   └── CV_Nandito Yuda Samosir.pdf
├── components/         # React components (if modularized)
├── services/           # API and external service integrations
└── types.ts            # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/nanditosamosir/PortWebsite.git
cd PortWebsite
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file for API keys (if using AI features):

```
VITE_API_KEY=your_google_generative_ai_key
```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:3000/`

### Building

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📱 Key Sections

### Header

- Magazine masthead with "The Portfolio Times" title
- Publication info (Volume, Edition, Location)
- Current date and employment status
- Tagline: "Engineering Intelligence, Analyzing the Future"

### Main Content (Left Column)

- **Hero Article**: Introduction and professional summary
- **Experience Record**: Detailed work history and accomplishments
- **Engineering Projects**: Showcase of technical projects with descriptions and links

### Sidebar (Right Column)

- **Education Bulletins**: University and certification information
- **Special Supplement**: CV download link
- **Classifieds**: Skills and proficiencies listing
- **Official Directory**: Contact information and social links
- **Situation Wanted**: Call-to-action section for recruitment

## 🎯 Customization

### Modifying Content

Edit `index.html` to update:

- Personal information and biography
- Experience entries
- Project details and links
- Education and certifications
- Contact information

### Styling

- Global styles: `style.css`
- Tailwind utilities: Used throughout HTML classes
- Color scheme can be modified in Tailwind config in `index.html`:
  - `news-paper`: #fdfcfb (background)
  - `news-ink`: #121212 (text)
  - `news-accent`: #8b0000 (accent color)

### Fonts

Change fonts in the `tailwind.config` in `index.html`:

```javascript
fontFamily: {
  masthead: ['"Chomsky"', "serif"],
  headline: ['"Domine"', "serif"],
  body: ['"Lora"', "serif"],
  sans: ['"Libre Franklin"', "sans-serif"],
}
```

## ✨ Features in Detail

### Scroll Behavior

- Pages automatically scroll to the top on load/refresh
- Smooth, responsive navigation

### Responsive Design

- Mobile-optimized layout
- Adaptive grid system
- Touch-friendly interface

### Typography

- Drop cap styling on main article
- Justified text alignment
- Proper line heights and spacing

### Interactive Elements

- Hover effects on links and images
- Transition animations
- Image filters and effects

## 📞 Contact & Information

**Name**: Nandito Yuda Samosir  
**Email**: nanditoxamosir@gmail.com  
**Phone**: +62 895-6266-45723  
**Location**: Jakarta, Indonesia

**Social Links**:

- [LinkedIn](https://www.linkedin.com/in/nanditosamosir/)
- [GitHub](https://github.com/nanditosamosir)

## 🎓 Education

**University of Brawijaya** (2021-2025)

- Bachelor of Engineering in Computer Engineering
- GPA: 3.83/4.00

**Bangkit Academy** (2024)

- Machine Learning Cohort

## 💼 Current Role

**Junior Data Engineer** at PT Indosat Tbk. (Jan 2026 - Present)

Focusing on data engineering pipelines and infrastructure within telecommunications sector.

## 🔧 Technical Skills

- **Hard Skills**: Python, Data Analytics, Machine Learning, Microsoft Office
- **Soft Skills**: Project Management, Product Development, Analysis
- **Languages**: Indonesian (Native), English (Advanced - TOEFL 550)
- **Tech Stack**: EfficientNetV2, Arduino, C++, Git/GitHub

## 📜 License

This project is the personal portfolio of Nandito Yuda Samosir. Feel free to use it as inspiration for your own portfolio.

## 🤝 Contributing

This is a personal portfolio website. Suggestions and feedback are welcome via email.

## 📝 Version History

- **v1.0** (Dec 2025): Initial release with newspaper-styled design

---

**Last Updated**: December 31, 2025

Built with passion and attention to detail. Designed to stand out in the tech industry.
