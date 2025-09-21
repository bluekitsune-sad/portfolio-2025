# Portfolio Project

A modern, interactive portfolio website showcasing skills, experience, and projects with smooth animations and responsive design.

## Features

- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Interactive animations using Framer Motion
- **Modern UI**: Clean, professional design with custom color palette
- **Tech Stack Showcase**: Visual representation of technical skills
- **Contact Integration**: Easy contact options including WhatsApp integration
- **Experience Timeline**: Comprehensive work and education history
- **Project Portfolio**: Showcase of completed projects

## Technology Stack

### Frontend Framework & Core

- **[Next.js 15.1.8](https://nextjs.org)** - React framework for production
- **[React 19.1.1](https://reactjs.org)** - JavaScript library for building user interfaces
- **[React DOM 19.1.1](https://reactjs.org/docs/react-dom.html)** - React package for working with the DOM

### Styling & Design

- **[Tailwind CSS 3.4.1](https://tailwindcss.com)** - Utility-first CSS framework
- **[PostCSS 8.4.49](https://postcss.org)** - CSS processor
- **[Autoprefixer 10.4.20](https://autoprefixer.github.io)** - CSS vendor prefixing
- **[Tailwind Merge 3.3.1](https://github.com/dcastil/tailwind-merge)** - Utility for merging Tailwind CSS classes
- **[clsx 2.1.1](https://github.com/lukeed/clsx)** - Utility for constructing className strings conditionally
- **[Class Variance Authority 0.7.1](https://cva.style)** - Creating variants with class names
<!-- - **[Shadcn](https://cva.style)** - Creating variants with class names -->

### Animations & Interactions

- **[Framer Motion 12.23.12](https://www.framer.com/motion/)** - Production-ready motion library for React

### Icons & Assets

- **[Lucide React 0.515.0](https://lucide.dev)** - Beautiful & consistent icon toolkit
- **[React Icons 5.5.0](https://react-icons.github.io/react-icons/)** - Popular icons for React projects
  - Font Awesome icons (FaReact, FaNodeJs, FaPython, FaDocker, FaAws)
  - Tabler Icons (TbBrandNextjs, TbBrandMongodb, TbBrandReactNative)
  - VS Code Icons (VscAzure)
  - Ionicons (IoIosFootball)

### Development Tools

- **[ESLint 8.57.1](https://eslint.org)** - JavaScript linting utility
- **[ESLint Config Next 15.1.8](https://nextjs.org/docs/app/building-your-application/configuring/eslint)** - Next.js ESLint configuration
- **[@types/node 22.10.2](https://www.npmjs.com/package/@types/node)** - TypeScript definitions for Node.js
- **[@types/react 19.1.5](https://www.npmjs.com/package/@types/react)** - TypeScript definitions for React
- **[@types/react-dom 19.1.3](https://www.npmjs.com/package/@types/react-dom)** - TypeScript definitions for React DOM

### Custom Features

- **Custom Color Palette**: Carefully crafted color scheme with primary and accent colors
- **Grid System**: Custom 16-column grid layout for complex responsive designs
- **Component Architecture**: Modular component structure with animated UI components
- **Data Management**: Centralized data management with JavaScript configuration

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.js          # Root layout component
│   └── page.js            # Home page component
├── components/            # Reusable components
│   ├── animated-ui/       # Animated UI components
│   ├── common/           # Common components
│   └── ui/               # Base UI components
├── assets/               # Static assets and data
│   └── data.jsx         # Application data and content
├── lib/                  # Utility functions and types
├── public/              # Public static assets
└── styles/             # Global styles
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone https://github.com/bluekitsune-sad/portfolio-2025.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run start` - Runs the built app in production mode
- `npm run lint` - Runs ESLint for code quality checks

## Customization

### Updating Content

Modify the content in `assets/data.jsx` to update:

- Personal information
- Skills and tech stack
- Work experience
- Education
- Projects
- Contact information

### Styling

The project uses Tailwind CSS with a custom configuration:

- Custom color palette in `tailwind.config.js`
- Custom grid system (16 columns)
- Responsive design utilities

### Adding New Components

Follow the existing component structure:

- Place reusable components in `components/`
- Use Framer Motion for animations
- Follow the established naming conventions

## Key Features Explained

### Animated Components

- **Framer Motion Integration**: Smooth hover effects, scale transformations, and page transitions
- **Interactive Elements**: Hover animations on skill items, buttons, and cards
- **Responsive Animations**: Animations that work across all device sizes

### Responsive Grid System

- **16-Column Grid**: Advanced layout capabilities
- **Flexible Components**: Components that adapt to different screen sizes
- **Mobile-First Design**: Optimized for mobile devices with desktop enhancements

### Icon Integration

- **Multiple Icon Libraries**: Lucide React for UI icons, React Icons for brand icons
- **Consistent Styling**: Unified icon sizing and coloring system
- **Performance Optimized**: Tree-shaking for minimal bundle size

## License

This project is private and for portfolio purposes.

## Contributing

This is a personal portfolio project. However, suggestions and feedback are welcome!

## Contact

For any questions or collaboration opportunities, feel free to reach out through the contact information provided in the portfolio.
