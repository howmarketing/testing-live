# Transaction Backend

A simple Express.js API for managing transactions.

## Tech Stack

- Node.js
- Express.js
- CORS middleware

## API Endpoints

### POST /api/transactions

Create a new transaction.

**Request Body:**
```json
{
  "amount": 100.50,
  "description": "Payment for services"
}
```

**Response:** `201 Created`
```json
{
  "id": 1706472000000,
  "amount": 100.50,
  "description": "Payment for services",
  "createdAt": "2024-01-28T20:00:00.000Z"
}
```

### GET /api/transactions

Retrieve all transactions.

**Response:** `200 OK`
```json
[
  {
    "id": 1706472000000,
    "amount": 100.50,
    "description": "Payment for services",
    "createdAt": "2024-01-28T20:00:00.000Z"
  }
]
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)

### Installation

```bash
npm install
```

### Running the Server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will start on `http://localhost:3001`.

## Notes

- Data is stored in-memory and will be lost when the server restarts.
