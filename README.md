# Portfolio Jose - React + TypeScript + Vite

Personal portfolio project built with modern web technologies including React 19, TypeScript, and Vite for optimal development experience.

## 📋 Project Setup

This project was created using Vite with React + TypeScript template and includes ESLint configuration for code quality.

### Tech Stack

- **React 19** - Latest version of React for building user interfaces
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **ESLint** - Code linting with TypeScript and React rules
- **PNPM** - Fast, disk space efficient package manager

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- PNPM package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/jmvilla12/portfolio-jose.git
cd portfolio-jose
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run lint` - Run ESLint
- `pnpm run lint:fix` - Run ESLint with auto-fix
- `pnpm run format` - Format code with Prettier
- `pnpm run format:check` - Check if code is formatted
- `pnpm run preview` - Preview production build
- `pnpm run prepare` - Initialize Husky hooks

## ✅ Completed Tasks

### PTF-1: Base Project Setup

- ✅ Project created with `pnpm create vite portfolio-jose --template react-ts`
- ✅ App running locally with `pnpm run dev`
- ✅ Initial repository uploaded to GitHub
- ✅ Project structure configured with TypeScript and React 19

### PTF-2: ESLint + Prettier Configuration

- ✅ ESLint configured with recommended rules for React and TypeScript
- ✅ Prettier integrated for consistent code formatting
- ✅ ESLint and Prettier conflict resolution implemented
- ✅ Automatic formatting on save configured
- ✅ Custom lint and format scripts added to package.json

### PTF-5: Husky + Lint-staged Setup

- ✅ Husky installed and configured for Git hooks
- ✅ Pre-commit hook setup with lint-staged
- ✅ Commits blocked if ESLint errors/warnings found
- ✅ Prettier runs automatically on staged files
- ✅ Zero-warning policy enforced

### PTF-6: Professional Project Structure

- ✅ Organized folder structure following best practices
- ✅ Import path aliases configured (TypeScript + Vite)
- ✅ Component architecture with UI and Layout separation
- ✅ Custom hooks for reusable logic
- ✅ Type definitions and utility functions organized
- ✅ Scalable structure ready for portfolio growth

### Current Development

Working on: **Next feature development**

## 🔧 ESLint + Prettier Configuration

The project includes a comprehensive code quality setup:

### ESLint Rules:

- **JavaScript & TypeScript** - Recommended ESLint rules
- **React Hooks** - React Hooks specific linting
- **React Refresh** - Vite HMR compatibility
- **Prettier Integration** - Automatic formatting without conflicts

### Prettier Configuration:

- Single quotes, no semicolons
- 2-space indentation
- Trailing commas (ES5)
- 80 character line width
- Unix line endings (LF)

### Git Hooks (Husky + lint-staged):

- **Pre-commit validation** - Automatically runs on every commit
- **ESLint enforcement** - Blocks commits with warnings or errors
- **Prettier formatting** - Auto-formats staged files before commit
- **Zero-warning policy** - Maintains high code quality standards

## 📁 Project Structure

```
portfolio-jose/
├── .husky/                    # Git hooks configuration
├── .vscode/                   # VS Code workspace settings
├── public/                    # Static assets
├── src/                       # Source code
│   ├── components/            # React components
│   │   ├── ui/               # Reusable UI components
│   │   │   ├── Button.tsx    # Button component
│   │   │   ├── ProjectCard.tsx # Project card component
│   │   │   └── index.ts      # UI exports
│   │   ├── layout/           # Layout components
│   │   │   ├── Header.tsx    # Site header
│   │   │   ├── Footer.tsx    # Site footer
│   │   │   └── index.ts      # Layout exports
│   │   └── index.ts          # All component exports
│   ├── pages/                # Page components
│   │   ├── Home.tsx          # Home page
│   │   └── index.ts          # Page exports
│   ├── hooks/                # Custom React hooks
│   │   └── index.ts          # Theme & media query hooks
│   ├── utils/                # Utility functions
│   │   └── index.ts          # Helper functions
│   ├── types/                # TypeScript type definitions
│   │   └── index.ts          # Project types
│   ├── styles/               # CSS styles
│   │   ├── variables.css     # CSS custom properties
│   │   ├── components.css    # Component styles
│   │   ├── main.css          # Main styles import
│   │   ├── App.css           # App component styles
│   │   └── index.css         # Global styles
│   ├── data/                 # Static data and constants
│   │   └── index.ts          # Projects & experience data
│   ├── constants/            # App constants
│   │   └── index.ts          # Configuration constants
│   ├── assets/               # Images, icons, etc.
│   ├── App.tsx               # Main App component
│   └── main.tsx              # Application entry point
├── .eslintrc.js              # Legacy ESLint configuration
├── eslint.config.js          # Modern ESLint configuration
├── .prettierrc               # Prettier configuration
├── .prettierignore           # Prettier ignore patterns
├── tsconfig.app.json         # TypeScript app configuration
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite configuration with path aliases
├── package.json              # Dependencies and scripts
└── README.md                 # Project documentation
```

### 🗂️ **Folder Architecture Explained:**

#### **Components (`src/components/`)**

- **`ui/`** - Reusable UI components (Button, Card, Modal, etc.)
- **`layout/`** - Layout-specific components (Header, Footer, Sidebar)
- **`index.ts`** - Barrel exports for clean imports

#### **Pages (`src/pages/`)**

- Each page component represents a route/view
- Future: Home, About, Projects, Contact, etc.

#### **Hooks (`src/hooks/`)**

- Custom React hooks for shared logic
- Theme management, API calls, form handling

#### **Utils (`src/utils/`)**

- Pure utility functions
- Date formatting, validation, data manipulation

#### **Types (`src/types/`)**

- TypeScript interfaces and types
- Project models, API responses, props interfaces

#### **Styles (`src/styles/`)**

- CSS architecture with imports
- Variables, components, global styles

#### **Data (`src/data/`)**

- Static data, mock data, configurations
- Projects portfolio, experience, skills

#### **Constants (`src/constants/`)**

- App-wide constants and configuration
- API URLs, app config, route definitions

### 📦 **Import Path Aliases**

The project uses path mapping for cleaner imports:

```typescript
// Instead of relative imports
import { Button } from '../../components/ui/Button'
import { Project } from '../../../types/index'

// Use clean absolute paths
import { Button } from '@components/ui'
import type { Project } from '@src/types'
```

#### **Available Aliases:**

- `@/*` → Project root
- `@src/*` → `./src/*`
- `@components/*` → `./src/components/*`
- `@pages/*` → `./src/pages/*`
- `@hooks/*` → `./src/hooks/*`
- `@utils/*` → `./src/utils/*`
- `@styles/*` → `./src/styles/*`
- `@data/*` → `./src/data/*`
- `@constants/*` → `./src/constants/*`
- `@assets/*` → `./src/assets/*`

> **Configuration:** Set up in `tsconfig.app.json` and `vite.config.ts`
> ├── package.json # Dependencies and scripts
> ├── tsconfig.json # TypeScript configuration
> └── vite.config.ts # Vite configuration

````

## 🛠️ Development

This project uses modern development practices:

- **Hot Module Replacement (HMR)** for instant updates during development
- **TypeScript** for type safety and better developer experience
- **ESLint** for code quality and consistency
- **Modern React patterns** with hooks and functional components

## 🚀 Deployment

To build the project for production:

```bash
pnpm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

---

Built with ❤️ by [Jose Villa](https://github.com/jmvilla12)
````
