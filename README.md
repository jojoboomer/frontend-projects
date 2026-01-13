# 🚀 Frontend Projects Hub

A dynamic Astro-powered repository showcasing solutions to various frontend development challenges using JavaScript and multiple frameworks. Each project is a standalone implementation of real-world UI/UX challenges with clean code and responsive design.

## ✨ Features

- **Multi-Framework Showcase**: Projects built with Astro, React, Vue, and vanilla JavaScript
- **Progressive Difficulty**: Projects categorized by experience level (Newbie → Advanced)
- **Production Ready**: Fully responsive designs with interactive elements
- **Modern Tooling**: Utilizes PandaCSS, Tailwind, GSAP, and various APIs
- **Live Demos**: Every project is deployed and accessible online

## 🛠️ Prerequisites

Before you begin, ensure you have installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Git**

## 🚀 Local Development Setup

1. **Clone the repository**
```bash
git clone https://github.com/jojoboomer/frontend-projects.git
cd frontend-projects
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Environment Configuration**  
Create a ```.env``` file in the root directory with:
```bash
PUBLIC_IP_TRACKER_API_KEY=your_ipify_api_key_here
```

>[!NOTE]
>For the IP Address Tracker project, you need a free API key from IPify. The project uses this to fetch geolocation data.

4. **Start the development server**  
```bash
npm run dev
# or
yarn dev
```
4. **Open your browser**  
Navigate to ```http://localhost:4321``` to view the projects locally.

## 🚀 Project Structure

```
frontend-projects/
├── src/
│   ├── components/     # Shared components
│   ├── data/           # Project data
│   ├── features/       
│   │   ├── project1/   # Project implementations
│   │   └── .../       
│   ├── layout/         # Shared layouts
│   ├── lib/            # Useful libs
│   └── pages/          # Astro pages
│   └── store/          # State management
│   └── styles/         # Shared style sheet
├── public/
│   ├── images/         # Project previews
│   └── fonts/
└── astro.config.mjs    # Astro configuration
```

## 📊 Projects Catalog
| Project | Level | Technologies | Demo | Code | Description |
|---------|-------|--------------|------|------|-------------|
| **NFT Preview Card** | Newbie | Astro, PandaCSS | [Live Demo](https://frontend-projects-self.vercel.app/nft-card) | [Code](https://github.com/jojoboomer/frontend-projects) | Simple card component demonstrating clean UI implementation |
| **Product List with Cart** | Junior | Astro, PandaCSS, React | [Live Demo](https://frontend-projects-self.vercel.app/shoping-cart) | [Code](https://github.com/jojoboomer/frontend-projects) | E-commerce cart functionality with vanilla JS state management |
| **Sign-up Form Component** | Junior | Astro, PandaCSS | [Live Demo](https://frontend-projects-self.vercel.app/singup-component) | [Code](https://github.com/jojoboomer/frontend-projects) | Form validation and responsive form design |
| **Todo Application** | Intermediate | Astro, PandaCSS, React | [Live Demo](https://frontend-projects-self.vercel.app/todo) | [Code](https://github.com/jojoboomer/frontend-projects) | Full-featured todo app with drag & drop, theme toggle |
| **IP Address Tracker** | Intermediate | Astro, PandaCSS, React | [Live Demo](https://frontend-projects-self.vercel.app/ip-tracker) | [Code](https://github.com/jojoboomer/frontend-projects) | Geolocation tracking with IPify API & LeafletJS maps |
| **Restaurant Landing Page** | Intermediate | Astro, Tailwind, GSAP | [Live Demo](https://restaurant-demo-icodethis.netlify.app/) | [Code](https://github.com/jojoboomer/challenge-restaurant-website) | Animated single-page website with infinite scroll |
| **Multi-Step Form** | Advanced | Vue, Tailwind | [Live Demo](https://vue-challange-stepper.netlify.app/) | [Code](https://github.com/jojoboomer/vue-challange-multi-step-form) | Complex form wizard with validation and state management |
| **Weather Application** | Intermediate | Vue, Tailwind | [Live Demo](https://weather-vue-frontedmentor.netlify.app/) | [Code](https://github.com/jojoboomer/vue-weather-app) | Real-time weather data with unit conversion system |
## 🧠 Learning Outcomes
This repository demonstrates practical implementation of:
- API Integration: Working with third-party services (IPify, Open-Meteo)
- State Management: Handling complex application state across frameworks
- Responsive Design: Mobile-first approaches across all projects
- Framework Interoperability: Using multiple frameworks within Astro
- Animation Techniques: Implementing smooth animations with GSAP and CSS
- Map Integration: Working with LeafletJS for interactive geolocation
- Form Handling: Form validation and multi-step workflows
## 🚀 Deployment
The main site is automatically deployed on Vercel. Individual projects may be deployed on Netlify or other platforms.
## 🤝 Contributing
While this is primarily a personal learning repository, suggestions and feedback are welcome! Feel free to open issues for bugs or improvements.
