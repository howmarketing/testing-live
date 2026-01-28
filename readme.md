# Transaction Submission Application

A simple web application that allows users to submit a monetary transaction. The application consists of a front-end built with React and a back-end using Node.js and Express.

> The application allows users to input the transaction amount and a description, and upon submission, it should display the transaction details on the front-end.

## Monorepo Structure

This project uses [Turborepo](https://turborepo.dev) for monorepo management.

```
├── apps/
│   ├── backend/     # Express.js API (@transaction/backend)
│   └── frontend/    # React + Vite app (@transaction/frontend)
├── packages/        # Shared packages (future use)
├── turbo.json       # Turborepo configuration
└── pnpm-workspace.yaml
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
# Frontend only
pnpm turbo dev --filter=@transaction/frontend

# Backend only
pnpm turbo dev --filter=@transaction/backend
```

### Build

Build all apps:

```bash
pnpm build
```

## Apps

### Backend (`apps/backend`)

Express.js API running on port 3001 with endpoints:
- `POST /api/transactions` - Create a transaction
- `GET /api/transactions` - List all transactions

### Frontend (`apps/frontend`)

React application built with Vite running on port 5173.

## Requirements

### 1. Front-End (React)

- [x] Create a form that accepts:
  - [x] Transaction Amount (number)
  - [x] Transaction Description (text)
- [x] On form submission, display the transaction details below the form.

### 2. Back-End (Node.js + Express)

- [x] Set up a simple Express server that handles POST requests to save transaction data.
- [x] Implement a GET endpoint to retrieve the transaction data.
- [x] Use an in-memory array to store transactions (no database required for this challenge).
