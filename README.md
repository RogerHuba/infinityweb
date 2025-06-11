# SWG Infinity Website

A comprehensive website for Star Wars Galaxies Infinity, featuring a character builder, game guides, server information, and community resources. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Live Demo

The website is deployed and accessible at the production URL. Features include real-time server status, interactive character builder, and comprehensive game guides.

## 📖 Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Website Structure](#website-structure)
- [Key Features](#key-features)
- [Character Builder](#character-builder)
- [Installation & Setup](#installation--setup)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)

## 🎯 Overview

SWG Infinity Website serves as the primary web presence for the Star Wars Galaxies Infinity private server. It provides players with essential tools, information, and community resources needed to play and excel in the game.

### Primary Objectives
- **Player Onboarding**: Help new players get started with guides and tutorials
- **Character Planning**: Advanced character builder for skill and profession planning
- **Server Information**: Real-time server status, guild listings, and game data
- **Community Hub**: News, updates, and community resources

## 🏗️ Architecture

### Tech Stack
- **Frontend**: Next.js 15+ with TypeScript
- **Styling**: Tailwind CSS with custom theme
- **UI Components**: Radix UI primitives with shadcn/ui
- **Icons**: Lucide React
- **Package Manager**: Bun
- **Linting**: Biome + ESLint
- **Deployment**: Netlify (static build)

### Project Structure
```
infinityweb/
├── swg-infinity-django/
│   ├── frontend/                    # Next.js frontend application
│   │   ├── src/
│   │   │   ├── app/                # Next.js app directory (routing)
│   │   │   ├── components/         # React components
│   │   │   │   ├── character-builder/  # Character builder components
│   │   │   │   ├── about-infinity/     # About section components
│   │   │   │   ├── guides/             # Guide components
│   │   │   │   └── ui/                 # Reusable UI components
│   │   │   ├── lib/                # Utility libraries
│   │   │   └── utils/              # Helper functions
│   │   ├── public/                 # Static assets
│   │   └── Configuration files
│   ├── backend/                    # Django backend (future use)
│   └── api/                        # API endpoints (future use)
└── Documentation and configs
```

## 🌐 Website Structure

### Main Navigation Sections

#### 1. **About Infinity**
- **Latest Patch Notes** (`/blog`): Game updates and patch information
- **Infinity Specific Rules** (`/about-infinity/infinity-specific-rules`): Server-specific gameplay rules
- **Roadmap** (`/about-infinity/roadmap`): Development timeline and future features
- **Vision and Mantras** (`/about-infinity/vision-and-mantras`): Project philosophy and goals
- **Meet the Team** (`/about-infinity/meet-the-team`): Staff and developer profiles
- **Join the Team** (`/join-the-team`): Recruitment information

#### 2. **Guides**
- **Jedi Unlock** (`/guides/jedi-unlock`): Complete guide to becoming Force-sensitive
- **The Knight Trials** (`/guides/the-knight-trials`): Jedi progression guide
- **The Warren** (`/guides/the-warren`): Instance dungeon guide
- **Treasure Hunting** (`/guides/treasure-hunting`): Loot and exploration guide
- **Character Builder** (`/character-builder`): Interactive profession planner

#### 3. **Server Information**
- **Cities** (`/server-information/cities`): Player city listings and information
- **Guilds** (`/server-information/guilds`): Guild directory and recruitment
- **Heritage** (`/server-information/heritage`): Server history and legacy content
- **Game Pictures** (`/server-information/game-pictures`): Screenshot gallery
- **Resources** (`/server-information/resources`): Game resource information
- **Schematics** (`/server-information/schematics`): Crafting schematics database
- **Galactic Civil War** (`/server-information/galactic-civil-war`): PvP and faction information

#### 4. **Support**
- **FAQ for New Players** (`/faq`): Frequently asked questions
- **New Infinity Launcher** (`/new-launcher`): Game client download and setup
- **Multiple Account Request** (`/multiple-account-request`): Account management

#### 5. **Community**
- **Donate** (`/donate`): Server support and donation information
- **Discord Integration**: Direct links to community Discord server
- **Play Now** (`/play-now`): Quick start guide for new players

## ⭐ Key Features

### Responsive Design
- **Mobile-First**: Optimized for all device sizes
- **Progressive Enhancement**: Enhanced experience on larger screens
- **Touch-Friendly**: Mobile navigation with hamburger menu

### Server Integration
- **Real-Time Server Status**: Live server online/offline indicators
- **Player Count**: Current active player statistics
- **Server Information**: Connection details and server specifications

### SEO & Performance
- **Next.js App Router**: Modern routing with server-side rendering
- **Static Generation**: Pre-built pages for optimal performance
- **Image Optimization**: Automatic image optimization and lazy loading
- **Meta Tags**: Comprehensive SEO meta information

### Accessibility
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: ARIA labels and semantic HTML
- **Color Contrast**: WCAG compliant color schemes
- **Focus Management**: Clear focus indicators

## 🎮 Character Builder

The Character Builder is the flagship feature of the website, providing comprehensive character planning tools for SWG players.

### Features

#### **Profession System**
- **45 Total Professions**: 7 Basic + 26 Elite + 9 Force/Jedi + 3 Pilot
- **Prerequisite Validation**: Automatic prerequisite checking and enforcement
- **Multi-Profession Support**: Mix and match professions within 250 skill point limit

#### **Skill Trees**
- **Interactive Skill Trees**: Visual representation of profession progression
- **Auto-Prerequisites**: Automatic selection of required prerequisite skills
- **Smart Deselection**: Cascading removal of dependent skills
- **Progress Tracking**: Visual indicators for available, selected, and locked skills

#### **Character Management**
- **Species Selection**: All 10 SWG species with racial modifiers
- **Build Templates**: Pre-made profession templates for common builds
- **Save/Load System**: Local storage for character builds
- **Build Sharing**: Export/import builds via encoded strings

#### **Statistics & Analysis**
- **Modifier Calculation**: Real-time skill modifier calculations
- **Categorized Display**: Combat, Skills, Attributes, Force modifiers
- **Source Breakdown**: Species vs. skill-based modifier sources
- **Build Recommendations**: Suggestions based on remaining skill points

#### **Data Accuracy**
- **Official Data Compliance**: Skill data matches SWG Infinity server
- **Comprehensive Skill Mapping**: All skills, commands, and modifiers included
- **Regular Updates**: Data synchronization with game updates

### Technical Implementation

#### **Component Architecture**
```typescript
CharacterBuilder/           # Main container component
├── SkillTree/             # Visual skill tree renderer
├── ProfessionList/        # Profession selection sidebar
├── CharacterStatsSummary/ # Statistics and modifier display
├── SkillModifiers/        # Detailed modifier breakdown
├── Commands/              # Commands and certifications list
├── TemplateSelector/      # Pre-made build templates
└── BuildExportImport/     # Save/load/share functionality
```

#### **Data Models**
- **Profession Interface**: Complete profession definitions with skill trees
- **Skill Box Interface**: Individual skill definitions with prerequisites
- **Species Interface**: Racial modifiers and characteristics
- **Template Interface**: Saved character build structure

#### **State Management**
- **React Hooks**: useState and useEffect for component state
- **Local Storage**: Persistent build saving
- **Real-time Calculation**: Live updates as users modify builds

## 🛠️ Installation & Setup

### Prerequisites
- **Node.js**: 18+ required
- **Bun**: Latest version (package manager)
- **Git**: For cloning the repository

### Local Development Setup

1. **Clone the Repository**
   ```bash
   git clone [repository-url]
   cd infinityweb/swg-infinity-django/frontend
   ```

2. **Install Dependencies**
   ```bash
   bun install
   ```

3. **Start Development Server**
   ```bash
   bun run dev
   ```

4. **Access Application**
   - Local: `http://localhost:3000`
   - Network: `http://0.0.0.0:3000` (accessible on LAN)

### Environment Configuration
- **Next.js Config**: Configured for static export and network access
- **Tailwind**: Custom theme with SWG-inspired color palette
- **TypeScript**: Strict mode enabled for type safety

## 🚀 Development

### Available Scripts
- `bun run dev`: Start development server with hot reload
- `bun run build`: Build production-ready static site
- `bun run start`: Start production server
- `bun run lint`: Run Biome linter and TypeScript checks
- `bun run format`: Format code with Biome

### Code Quality
- **Biome**: Fast linting and formatting
- **TypeScript**: Type checking and IntelliSense
- **ESLint**: Additional code quality rules
- **Prettier**: Code formatting consistency

### Development Workflow
1. **Feature Branches**: Create feature branches for new development
2. **Component Testing**: Test components in isolation
3. **Responsive Testing**: Verify mobile and desktop layouts
4. **Performance Testing**: Check build size and load times
5. **Accessibility Testing**: Verify keyboard navigation and screen readers

## 📦 Deployment

### Static Site Generation
The website is built as a static site for optimal performance and hosting flexibility.

### Netlify Deployment
- **Automatic Builds**: Triggered by Git commits
- **Preview Deployments**: Branch previews for testing
- **Static Hosting**: Global CDN distribution
- **Custom Domain**: Production domain configuration

### Build Process
1. **Static Generation**: Pre-render all pages at build time
2. **Asset Optimization**: Image and CSS optimization
3. **Bundle Analysis**: Code splitting and tree shaking
4. **Performance Optimization**: Lighthouse score optimization

### Performance Metrics
- **Core Web Vitals**: Optimized for Google's performance standards
- **Bundle Size**: Minimized JavaScript and CSS bundles
- **Load Times**: Sub-second page loads
- **SEO Score**: High search engine optimization scores

## 🤝 Contributing

### Development Guidelines
- **Component Structure**: Follow established patterns for new components
- **TypeScript**: Use strict typing for all new code
- **Responsive Design**: Ensure mobile-first responsive design
- **Accessibility**: Follow WCAG guidelines for accessibility

### Character Builder Data
- **Skill Data**: Located in `src/components/character-builder/data/`
- **Profession Definitions**: `professions.ts` contains all profession data
- **Skill Mapping**: `skillMapping.ts` handles skill point and modifier mapping
- **Constants**: `CONSTANTS.js` contains authoritative game data

### Testing Checklist
- [ ] Mobile responsiveness (320px - 1920px)
- [ ] Keyboard navigation functionality
- [ ] Screen reader compatibility
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Performance metrics (Lighthouse scores)
- [ ] Character builder accuracy (skill calculations)

### Code Style
- **Functional Components**: Use React functional components with hooks
- **TypeScript Interfaces**: Define clear interfaces for data structures
- **Tailwind Classes**: Use Tailwind for styling with consistent patterns
- **Component Composition**: Build complex UIs from simple, reusable components

## 📄 License

This project is built for the Star Wars Galaxies Infinity community. Star Wars Galaxies is a trademark of Sony Online Entertainment/Daybreak Game Company.

## 🎯 Future Enhancements

### Planned Features
- **User Accounts**: Player profiles and saved builds
- **Guild Integration**: Guild management tools
- **Resource Tracker**: Real-time resource spawn tracking
- **Market Data**: Auction and vendor price tracking
- **Event Calendar**: Server events and scheduling

### Technical Improvements
- **PWA Support**: Progressive Web App capabilities
- **Offline Mode**: Cached data for offline character building
- **API Integration**: Real-time server data integration
- **Performance**: Further optimization and caching improvements
