# ZadSports - Sports Ground Booking Platform

## Overview

ZadSports is a comprehensive sports ground booking platform that connects sports enthusiasts with quality grounds while empowering ground owners to showcase their venues. The application features a modern React frontend with a Node.js Express backend, utilizing PostgreSQL for data persistence and Drizzle ORM for database operations.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based session storage
- **Development**: Hot module reloading with Vite integration

### Database Schema
- **Users Table**: Basic user authentication with username/password
- **Schema Location**: `shared/schema.ts` for type sharing between frontend and backend
- **Validation**: Zod schemas for runtime type validation
- **Migrations**: Drizzle Kit for database migrations

## Key Components

### Shared Components
- **Schema Definitions**: Centralized in `shared/` directory for type safety
- **Type Safety**: Full TypeScript coverage with strict configuration
- **Validation**: Zod schemas for data validation and type inference

### Frontend Components
- **Navigation**: Responsive navigation with mobile menu support
- **Pages**: Multi-page application with About, Blog, Achievements, Contact, Feedback, and New Releases
- **UI Components**: Comprehensive component library using shadcn/ui
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### Backend Components
- **Route Registration**: Modular route system in `server/routes.ts`
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Development Setup**: Hot reloading with Vite middleware integration
- **Error Handling**: Centralized error handling middleware

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Layer**: Express routes handle requests and interact with storage layer
3. **Storage Layer**: Abstract interface allows for flexible data persistence
4. **Database Operations**: Drizzle ORM handles PostgreSQL interactions
5. **Response Handling**: Structured JSON responses with error handling
6. **State Management**: TanStack Query manages caching and synchronization

## External Dependencies

### Database
- **Primary Database**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle ORM for type-safe database operations
- **Session Store**: PostgreSQL-based session management

### UI Libraries
- **Component Library**: Radix UI primitives for accessibility
- **Icons**: Font Awesome for iconography
- **Fonts**: Inter font family from Google Fonts
- **Styling**: Tailwind CSS for utility-first styling

### Development Tools
- **Build Tool**: Vite with React plugin
- **Type Checking**: TypeScript with strict configuration
- **Code Quality**: ESLint and Prettier (implicit)
- **Development Server**: Express with Vite middleware

## Deployment Strategy

### Development Environment
- **Port Configuration**: Development server runs on port 5000
- **Hot Reloading**: Vite integration for instant updates
- **Database**: Environment variable-based database connection
- **Asset Serving**: Vite handles static asset serving

### Production Build
- **Frontend Build**: Vite builds React application to `dist/public`
- **Backend Build**: esbuild compiles TypeScript server to `dist/index.js`
- **Deployment Target**: Replit autoscale deployment
- **Environment**: Production mode with optimized builds

### Configuration
- **Environment Variables**: Database URL configuration required
- **Build Commands**: Separate build and start scripts
- **Port Mapping**: External port 80 maps to internal port 5000

## Changelog

```
Changelog:
- June 27, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```