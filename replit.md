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
- June 23, 2025: Increased logo size from h-12 to h-16 in navbar
- June 23, 2025: Reordered services to put Information Technology before Engineering in both navbar dropdown and services section
- June 23, 2025: Updated "What We Provide" section - changed "UK Airport Welcome Service" to "Airport Welcome" and updated description
- June 23, 2025: Changed "Professional support" to "Assistance" in Accommodation Assistance section
- June 23, 2025: Updated "Our Commitment as an Employment Agency" to "Our Commitment as an Employment Company"
- June 23, 2025: Removed "500+ Successful Placements" and "50+ Partner Companies" from stats, keeping only "4 Specialized Sectors" and "98% Client Satisfaction"
- June 23, 2025: Replaced Sarah Johnson testimonial with two Filipino registered nurse testimonials (Maria Santos and Rosa Dela Cruz)
- June 23, 2025: Changed CTA button text from "Hire Through Us" to "Partner With Us"
- June 23, 2025: Verified testimonials navigation works correctly from all pages to home page testimonials section
- June 24, 2025: Created unique "Work Together Grow Together" section with animated background effects and moved it directly under hero section
- June 24, 2025: Enhanced testimonials with carousel functionality and added diverse testimonials from Indian and Nigerian professionals
- June 24, 2025: Redesigned stats section with larger fonts, icons, and improved visual appeal
- June 24, 2025: Fixed Priya Sharma testimonial photo and removed tagline explanation from Work Together section
- June 24, 2025: Added tagline explanation to About page Work Together section only
- June 24, 2025: Updated hospitality page hero image to elegant hotel reception desk with service bell
- June 27, 2025: Updated stats section text to use "all sectors" and British spelling "Specialised"
- June 27, 2025: Changed Mario Santos (formerly Maria Santos) testimonial location from "Philippines" to "Gulf country"
- June 27, 2025: Removed all profile pictures from testimonials section
- June 27, 2025: Updated Raj Patel to Chef from Mumbai and Michael Chen to Data Analyst
- June 27, 2025: Changed Rosa Dela Cruz nationality from "Filipino" to "Filipina" in testimonial
- June 27, 2025: Removed all second names from testimonials (e.g., Nidhi Ghodele → Nidhi)
- June 27, 2025: Changed Fatima from Nigerian to Bangladeshi nationality
- June 27, 2025: Updated Fatima's testimonial text from "Bangladeshi healthcare professional" to "health carer"
- June 27, 2025: Changed Michael's nationality from Malaysian to Indian
- June 27, 2025: Added new testimonial for Zoya, a Pakistani midwife
- June 27, 2025: Changed Priya's role from Software Developer to Nurse
- June 27, 2025: Changed Fatima to Jennifer and nationality from Bangladeshi to Pakistani
- June 27, 2025: Updated Priya from "Nurse" to "Registered Nurse"
- June 27, 2025: Changed Jennifer to Saba
- June 27, 2025: Removed "Registered" from all nurse roles, keeping just "Nurse"
- June 27, 2025: Reshuffled testimonials order to create better variety across roles and nationalities
- June 27, 2025: Changed CTA button from "Partner With Us" to "Work With Us" (keeping handshake icon)
- June 27, 2025: Added Google Maps directions link to contact address
- June 27, 2025: Added second mobile number +44(0) 7459346514 to contact section
- June 27, 2025: Fixed hospitality page image display issues by replacing broken asset paths with working Unsplash URLs
- June 27, 2025: Removed "Care Workers" card from Current Healthcare Opportunities section on health page
- June 27, 2025: Reverted hospitality page images back to original uploaded assets per user preference
- June 27, 2025: Added NMC and GMC hyperlinks to Language Proficiency Requirements section on health page

## Changelog

- June 23, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.