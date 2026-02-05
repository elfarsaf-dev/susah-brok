# BOS Villa Tawangmangu

## Overview

A villa and glamping booking platform for Tawangmangu, Indonesia. This is a full-stack web application that showcases vacation properties (villas and glamping units) near Mount Lawu, with features for browsing properties, viewing details, and contacting administrators via WhatsApp for bookings. The platform also includes jeep tour trip packages.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style)
- **Build Tool**: Vite with path aliases (@/, @shared/, @assets/)
- **Animation**: Framer Motion for UI transitions

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ESM modules
- **Build**: esbuild for server bundling
- **Development**: tsx for TypeScript execution

### Data Layer
- **Primary Data Source**: Static TypeScript data file (`shared/data.ts`) containing property and trip information
- **Schema Validation**: Zod for runtime type validation
- **Database Ready**: Drizzle ORM configured for PostgreSQL (via `@neondatabase/serverless`)
- **Storage Interface**: Abstract storage pattern in `server/storage.ts` with in-memory implementation

### Key Design Decisions

1. **Static Data over Database**: Property data is stored in TypeScript files rather than a database, making deployment simpler and content easily version-controlled. The database infrastructure exists for future user/booking features.

2. **Shared Types**: The `shared/` directory contains schemas and data accessible to both client and server, ensuring type consistency.

3. **Component-Based UI**: Modular React components for properties, trips, modals, and sections. Each feature area has dedicated components.

4. **PWA Support**: Service worker and manifest configured for progressive web app functionality with offline caching.

5. **SEO Optimization**: Static HTML pages in `public/news-tips/` for content marketing, structured data (JSON-LD), and comprehensive meta tags.

## External Dependencies

### Third-Party Services
- **WhatsApp Business**: Primary booking channel via deep links to admin phone numbers
- **CDN Assets**: Images hosted on `cdn.ferdev.my.id` and `cdn.jsdelivr.net` (GitHub-backed)
- **Google Search Console**: Site verification configured

### Database
- **Neon Database**: PostgreSQL serverless database (connection via `DATABASE_URL` environment variable)
- **Drizzle ORM**: Database toolkit with migration support (`drizzle-kit`)

### Deployment Targets
- **Netlify**: Configured with `netlify/functions/api.js` for serverless deployment
- **Replit**: Development environment with Vite plugins for hot reload

### Key NPM Packages
- UI: Radix UI primitives, shadcn/ui components, Lucide icons
- Forms: React Hook Form with Zod resolver
- Carousel: Embla Carousel
- Dates: date-fns