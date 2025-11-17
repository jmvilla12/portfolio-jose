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

### VS Code Integration:
- Format on save enabled
- ESLint auto-fix on save
- Prettier as default formatter

## 📁 Project Structure

```
portfolio-jose/
├── public/           # Static assets
├── src/             # Source code
│   ├── assets/      # Images, icons, etc.
│   ├── App.tsx      # Main App component
│   ├── App.css      # App styles
│   ├── main.tsx     # Application entry point
│   └── index.css    # Global styles
├── eslint.config.js # ESLint configuration
├── index.html       # HTML template
├── package.json     # Dependencies and scripts
├── tsconfig.json    # TypeScript configuration
└── vite.config.ts   # Vite configuration
```

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
