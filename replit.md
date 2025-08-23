# Overview

This is a full-stack villa and glamping rental booking platform called "BOS VILLA TAWANGMANGU" that showcases accommodation options in the Tawangmangu area near Mount Lawu in Indonesia. The application serves as a property listing and information website where users can browse villas and glamping sites, view detailed information including facilities, rates, and images, and contact the business directly through WhatsApp or phone for bookings.

The platform features a modern, responsive design with a focus on showcasing properties through rich visual content and detailed information. It includes property search functionality, filtering by accommodation type (villa vs glamping), and a comprehensive property detail modal system.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built using **React 18** with **TypeScript** in a modern SPA architecture. Key architectural decisions include:

- **Vite** as the build tool for fast development and optimized production builds
- **Wouter** for lightweight client-side routing instead of React Router
- **TanStack Query** for server state management and data fetching
- **Tailwind CSS** with **shadcn/ui** component library for consistent, accessible UI components
- **Radix UI** primitives underlying the shadcn/ui components for accessibility and behavior

The component architecture follows a modular approach with clearly separated concerns:
- Page components handle routing and high-level state
- Feature components manage specific functionality (property listings, modals, etc.)
- UI components provide reusable interface elements
- Custom hooks encapsulate complex state logic and side effects

## Backend Architecture
The backend uses a **Node.js/Express** server with a minimal API structure:

- **Express.js** server with middleware for request logging and error handling
- **Memory-based storage** implementation with an interface for future database integration
- **Development-focused setup** with Vite integration for seamless full-stack development
- **Modular routing system** with placeholder API endpoints

The storage layer uses an abstraction pattern that currently implements in-memory storage but can be easily swapped for database persistence.

## Data Management
Property data is managed through a typed schema system:

- **Zod schemas** for runtime type validation and TypeScript integration
- **Static data files** containing villa and glamping information
- **Shared schema types** between frontend and backend for type safety
- **Rate structures** supporting different pricing for weekdays, weekends, and special periods

## Styling and UI System
The application uses a design system approach:

- **Tailwind CSS** for utility-first styling with custom CSS variables for theming
- **shadcn/ui** component library providing consistent, accessible components
- **Google Fonts** integration (Inter, Architects Daughter, DM Sans, Fira Code, Geist Mono)
- **Responsive design** with mobile-first approach
- **CSS custom properties** for dynamic theming and color management

## Development Tooling
The project includes comprehensive development tooling:

- **TypeScript** with strict configuration for type safety
- **ESBuild** for fast server-side bundling
- **Path mapping** for clean imports using @ aliases
- **Hot module replacement** in development via Vite
- **Error overlay** for development debugging

# External Dependencies

## Database and ORM
- **Drizzle ORM** configured for PostgreSQL with schema-first approach
- **Neon Database** serverless PostgreSQL integration
- **Migration system** using drizzle-kit for schema management

The database configuration is set up but not actively used, with the current implementation using in-memory storage for simplicity.

## UI and Component Libraries
- **Radix UI** comprehensive set of unstyled, accessible UI primitives
- **shadcn/ui** pre-built component library built on Radix UI
- **Tailwind CSS** utility-first CSS framework
- **Lucide React** for consistent iconography
- **class-variance-authority** for component variant management

## Development and Build Tools
- **Vite** for fast development server and optimized builds
- **Replit plugins** for development environment integration
- **ESBuild** for server-side bundling and transformation
- **PostCSS** with Autoprefixer for CSS processing

## External Services Integration
- **WhatsApp API** integration for direct customer communication
- **Phone calling** integration for direct contact
- **Image hosting** via GitHub raw URLs for property images
- **External CDN** integration for placeholder images (Unsplash)

The application is designed to integrate with external booking and payment systems in the future, with the current implementation focusing on lead generation through direct contact methods.