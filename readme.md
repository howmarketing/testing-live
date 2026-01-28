# Transaction Submission Application

A simple web application that allows users to submit a monetary transaction. The application consists of a front-end built with React and a back-end using Node.js and Express.

> The application allows users to input the transaction amount and a description, and upon submission, it should display the transaction details on the front-end.

## Monorepo Structure

This project uses [Turborepo](https://turborepo.dev) for monorepo management with pnpm workspaces.

```
testing-live/
├── apps/
│   ├── backend/          # Express.js API (@transaction/backend)
│   │   ├── package.json
│   │   ├── server.js
│   │   └── README.md
│   └── frontend/         # React + Vite app (@transaction/frontend)
│       ├── package.json
│       ├── index.html
│       ├── vite.config.js
│       ├── src/
│       └── README.md
├── packages/             # Shared packages (future use)
├── package.json          # Root workspace configuration
├── pnpm-workspace.yaml   # pnpm workspace definition
├── pnpm-lock.yaml        # Single lockfile for all packages
└── turbo.json            # Turborepo task configuration
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (v9 or higher)

### Installation

```bash
pnpm install
```

### Development

Run all apps in development mode:

```bash
pnpm dev
```

Run a specific app:

```bash
# Frontend only (http://localhost:5173)
pnpm turbo dev --filter=@transaction/frontend

# Backend only (http://localhost:3001)
pnpm turbo dev --filter=@transaction/backend
```

### Build

Build all apps:

```bash
pnpm build
```

Build a specific app:

```bash
pnpm turbo build --filter=@transaction/frontend
```

### 

```bash
- pnpm dev - Start both apps in development mode
- pnpm build - Build the frontend (backend doesn't have a build step)
- pnpm turbo dev --filter=@transaction/frontend - Run only frontend
- pnpm turbo dev --filter=@transaction/backend - Run only backend
```

## Apps

| App | Package Name | Port | Description |
|-----|--------------|------|-------------|
| Backend | `@transaction/backend` | 3001 | Express.js REST API |
| Frontend | `@transaction/frontend` | 5173 | React + Vite SPA |

### Backend (`apps/backend`)

Express.js API with endpoints:
- `POST /api/transactions` - Create a transaction
- `GET /api/transactions` - List all transactions

### Frontend (`apps/frontend`)

React application built with Vite for transaction management.

## Turborepo Features

- **Task Caching**: Builds are cached locally in `.turbo/` directory
- **Parallel Execution**: Independent tasks run simultaneously
- **Dependency Awareness**: Tasks respect package dependencies via `dependsOn`

## Requirements Checklist

### Front-End (React)

- [x] Create a form that accepts:
  - [x] Transaction Amount (number)
  - [x] Transaction Description (text)
- [x] On form submission, display the transaction details below the form.

### Back-End (Node.js + Express)

- [x] Set up a simple Express server that handles POST requests to save transaction data.
- [x] Implement a GET endpoint to retrieve the transaction data.
- [x] Use an in-memory array to store transactions (no database required).
