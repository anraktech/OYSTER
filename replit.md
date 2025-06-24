# Oyster Employment - Recruitment Platform

## Overview

This is a modern full-stack web application for Oyster Employment, a recruitment agency specializing in Health, Engineering, IT, and Hospitality sectors. The application serves as a marketing website with a contact form for potential candidates and employers to connect with the recruitment services.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **State Management**: TanStack Query (React Query) for server state management
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API**: RESTful API endpoints for contact form submission
- **Development**: Hot module replacement with Vite integration
- **Production**: Compiled with esbuild for optimal performance

### Data Storage Solutions
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon Database)
- **Schema**: Shared schema definitions between client and server
- **Validation**: Zod schemas for runtime type validation
- **Development Storage**: In-memory storage implementation for development
- **Migration**: Drizzle Kit for database migrations

## Key Components

### 1. Landing Page Sections
- **Hero Section**: Main call-to-action with gradient background
- **Services**: Four specialized recruitment sectors (Health, Engineering, IT, Hospitality)
- **About**: Company information and value propositions
- **Statistics**: Key performance metrics display
- **Testimonials**: Client success stories
- **Call-to-Action**: Secondary conversion section
- **Contact Form**: Lead generation with sector-specific options

### 2. Contact Management System
- **Form Validation**: Client and server-side validation using Zod
- **Data Collection**: Captures candidate/employer information including:
  - Personal details (name, email, phone)
  - Sector preference
  - Custom message
  - Terms agreement
- **Storage**: Persistent contact storage with timestamps

### 3. UI Component System
- **Design System**: Consistent styling with CSS custom properties
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Accessibility**: ARIA-compliant components from Radix UI
- **Interactive Elements**: Hover states, animations, and transitions

## Data Flow

1. **User Interaction**: Users navigate the single-page application
2. **Form Submission**: Contact form data is validated client-side
3. **API Request**: Valid data is sent to `/api/contact` endpoint
4. **Server Validation**: Server re-validates using shared Zod schemas
5. **Data Storage**: Contact information is stored in the database
6. **Response Handling**: Success/error feedback displayed to user
7. **Admin Access**: `/api/contacts` endpoint for retrieving submissions

## External Dependencies

### Core Libraries
- **React Ecosystem**: React, React DOM, React Query
- **Database**: Neon Database PostgreSQL, Drizzle ORM
- **UI/UX**: Radix UI primitives, Tailwind CSS, Lucide icons
- **Forms**: React Hook Form, Hookform Resolvers
- **Validation**: Zod for schema validation
- **Utilities**: clsx, date-fns, class-variance-authority

### Development Tools
- **Build**: Vite, esbuild, TypeScript
- **Linting**: TSC for type checking
- **Replit Integration**: Cartographer plugin, runtime error overlay

## Deployment Strategy

### Development Environment
- **Server**: Node.js development server with hot reload
- **Port**: 5000 (mapped to external port 80)
- **Database**: PostgreSQL 16 module in Replit
- **Auto-reload**: File watching with Vite HMR

### Production Build
- **Client Build**: Vite builds optimized static assets to `dist/public`
- **Server Build**: esbuild compiles TypeScript to `dist/index.js`
- **Deployment Target**: Autoscale deployment on Replit
- **Environment**: Production mode with compiled assets

### Database Configuration
- **Connection**: Environment variable `DATABASE_URL` required
- **Migrations**: Manual migration push using `npm run db:push`
- **Schema**: Located in `shared/schema.ts` for type sharing

## Recent Changes

- June 23, 2025: Enhanced hero section with animated background effects including floating shapes, gradient orbs, and smooth animations
- June 23, 2025: Updated engineering page "Recognizing Engineering Value" section with improved modern workspace image
- June 23, 2025: Verified contact form navigation works correctly across all pages using /#contact redirect

## Changelog

- June 23, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.