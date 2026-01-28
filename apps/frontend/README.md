# @transaction/frontend

React application for managing transactions, built with Vite.

## Tech Stack

- React 18
- Vite 5
- CSS

## Project Structure

```
frontend/
├── index.html       # HTML entry point
├── vite.config.js   # Vite configuration
├── package.json
└── src/
    ├── main.jsx     # React entry point
    ├── App.jsx      # Main application component
    └── App.css      # Application styles
```

## Development

From the monorepo root:

```bash
# Run this app only
pnpm turbo dev --filter=@transaction/frontend

# Or run all apps
pnpm dev
```

The app will be available at `http://localhost:5173`.

## Build

```bash
# Build this app only
pnpm turbo build --filter=@transaction/frontend

# Or build all apps
pnpm build
```

Build output is generated in the `dist/` directory.

## Preview Production Build

```bash
pnpm turbo preview --filter=@transaction/frontend
```

## Backend Connection

This frontend connects to the backend API at `http://localhost:3001`. Ensure the backend server is running before using the application:

```bash
pnpm turbo dev --filter=@transaction/backend
```
