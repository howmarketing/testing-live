# @transaction/frontend

React application for managing transactions, built with Vite.

## Tech Stack

- React 18
- Vite 5
- CSS

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
pnpm turbo build --filter=@transaction/frontend
```

## Project Structure

```
src/
  App.jsx      # Main application component
  App.css      # Application styles
  main.jsx     # Entry point
```

## Backend Connection

This frontend connects to the backend API running on `http://localhost:3001`. Make sure the backend server is running before using the application.
