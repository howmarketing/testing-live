# @transaction/backend

Express.js REST API for managing transactions.

## Tech Stack

- Node.js
- Express.js
- CORS middleware

## Project Structure

```
backend/
├── package.json
└── server.js        # Express server with API endpoints
```

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

**Error Response:** `400 Bad Request`
```json
{
  "error": "Amount and description are required"
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

## Development

From the monorepo root:

```bash
# Run this app only
pnpm turbo dev --filter=@transaction/backend

# Or run all apps
pnpm dev
```

The server will start on `http://localhost:3001`.

## Testing the API

```bash
# Create a transaction
curl -X POST http://localhost:3001/api/transactions \
  -H "Content-Type: application/json" \
  -d '{"amount": 50.00, "description": "Test transaction"}'

# Get all transactions
curl http://localhost:3001/api/transactions
```

## Notes

- Data is stored in-memory and will be lost when the server restarts.
- CORS is enabled for cross-origin requests from the frontend.
