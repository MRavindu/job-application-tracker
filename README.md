# Phoenix Job Application Tracker

A modern job application tracking platform built with Next.js, TypeScript, and MongoDB.  
Phoenix helps users capture, organize, and manage job applications in one place with a Kanban-style workflow, authentication, and persistent user-specific boards.

## Live Demo

- **Production site:** https://phoenixtracker.vercel.app

## Overview

Phoenix Job Application Tracker is a full-stack application designed to help users track job applications from first submission to final outcome. It provides:

- user authentication
- private dashboards
- board-based workflow management
- drag-and-drop job application tracking
- MongoDB persistence
- server actions for create/update/delete operations
- a polished landing page for onboarding new users

The app is built as a Next.js application using the App Router and a modular architecture for UI, business logic, and data models.

---

## Tech Stack

### Frontend
- **Next.js 16**
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **Lucide React**
- **@dnd-kit** for drag-and-drop interactions
- **tsparticles / react-particles** for background effects

### Backend / Data
- **MongoDB**
- **Mongoose**
- **Better Auth**

### Tooling
- **ESLint**
- **PostCSS**
- **tsx**
- **Node.js**

---

## Features

- Landing page with strong onboarding and call-to-action
- Authentication with sign-in and sign-up flows
- User session handling
- Protected dashboard routes
- Personal board initialization for new users
- Kanban-style job application organization
- Drag-and-drop movement between columns
- Create, update, and delete job applications
- Job metadata support:
  - company
  - position
  - location
  - notes
  - salary
  - job URL
  - tags
  - description
- Board / column / application ownership checks
- Server-side data mutations with cache revalidation
- Responsive UI built with reusable components

---

## Architecture

Phoenix follows a modern Next.js App Router architecture.

### 1. Application Shell
- `app/layout.tsx` defines the root layout, metadata, fonts, and shared navbar.
- `app/page.tsx` defines the landing page.

### 2. Authentication Layer
Authentication is handled with **Better Auth** and connected to MongoDB using the Better Auth MongoDB adapter.

Key behavior:
- email/password auth
- session retrieval through server helpers
- sign-out handling
- auth routes exposed through `app/api/auth/[...all]/route.ts`

### 3. Data Layer
The data model is built with Mongoose and centered around three main collections:
- **Board**
- **Column**
- **JobApplication**

This structure supports a board → column → application relationship.

### 4. Server Actions
Core data operations are handled through server actions in `lib/actions/`.
These actions:
- validate session access
- verify ownership
- create/update/delete job applications
- revalidate dashboard routes after mutations

### 5. UI Layer
The UI uses reusable client components such as:
- navbar
- job application cards
- dialogs
- dropdown menus
- buttons
- card layouts

### 6. Drag-and-Drop Workflow
The app uses `@dnd-kit` to support interactive movement of job cards across columns.

---

## Project Structure

```text
job-application-tracker/
├── app/
│   ├── api/auth/[...all]/route.ts
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── job-application-card.tsx
│   ├── navbar.tsx
│   ├── sign-out-btn.tsx
│   └── ui/
├── lib/
│   ├── actions/
│   ├── auth/
│   ├── db/
│   ├── init-user-board.ts
│   └── models/
├── public/
├── scripts/
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## Main Application Flow

### Landing Page
The homepage introduces the product with:
- logo
- headline
- product pitch
- sign-up call-to-action
- visual particle background

### Authentication
Users can:
- sign in
- sign up
- access session-based content
- sign out via the navbar menu

### Board Initialization
When a new user is created, the auth hook triggers board initialization automatically.  
This ensures users begin with a personalized board structure.

### Job Tracking
A job application is stored with:
- company name
- position
- column assignment
- board ownership
- user ownership
- ordering within a column

### Board Management
The system supports board and column ownership checks so users can only modify their own data.

---

## Data Model

### Board
Represents a user's workspace.

Fields include:
- `name`
- `userId`
- `columns`

### Column
Represents a workflow stage on a board.

Fields include:
- `name`
- `boardId`
- `order`
- `jobApplications`

### JobApplication
Represents a tracked application.

Fields include:
- `company`
- `position`
- `location`
- `status`
- `columnId`
- `boardId`
- `userId`
- `order`
- `notes`
- `salary`
- `jobUrl`
- `appliedDate`
- `tags`
- `description`

---

## Authentication and Access Control

The app uses:
- Better Auth for authentication
- session checks on server actions
- protected client routes in the dashboard
- ownership validation before mutating records

This makes the application user-specific and prevents unauthorized access to another user’s board data.

---

## Styling Approach

The UI is styled with:
- Tailwind CSS
- shadcn/ui components
- custom globals in `app/globals.css`
- theme variables for dark-mode styling
- particle-based visual enhancements on the landing page

The design is clean, modern, and focused on readability and productivity.

---

## Important Files

### App layer
- `app/page.tsx` — landing page
- `app/layout.tsx` — root layout and metadata
- `app/api/auth/[...all]/route.ts` — auth route handler

### Core logic
- `lib/auth/auth.ts` — auth config and session helpers
- `lib/actions/job-application.ts` — server actions for job application operations
- `lib/init-user-board.ts` — board initialization logic

### Models
- `lib/models/board.ts`
- `lib/models/column.ts`
- `lib/models/job-application.ts`

### UI
- `components/navbar.tsx`
- `components/job-application-card.tsx`

---

## Scripts

From `package.json`:

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run seed:jobs
```

### Notes
- `npm run seed:jobs` expects `.env.local`
- the app uses the Next.js App Router
- production deployment is currently hosted on Vercel

---

## Installation

### Prerequisites
- Node.js 18+
- MongoDB
- npm

### Setup

```bash
git clone https://github.com/MRavindu/job-application-tracker.git
cd job-application-tracker
npm install
```

### Environment Variables
You will need to configure the environment variables required by:
- MongoDB connection
- Better Auth
- any external integrations used in auth or seeding

### Run locally

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

### Production build

```bash
npm run build
npm run start
```

---

## Deployment

The live site is deployed on Vercel:

- https://phoenixtracker.vercel.app

If deploying elsewhere, make sure:
- MongoDB is available
- auth callbacks are configured correctly
- environment variables are set
- the app has the proper production domain settings

---

## Target Audience

This project is useful for:
- job seekers
- students applying for internships or full-time roles
- professionals tracking interviews and applications
- recruiters reviewing a candidate’s workflow project
- developers looking for a Next.js + MongoDB + Better Auth example

---

## License

No license has been specified for this repository.
