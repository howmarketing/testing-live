const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage for transactions
const transactions = [];

// POST endpoint to save a transaction
app.post('/api/transactions', (req, res) => {
  const { amount, description } = req.body;

  if (!amount || !description) {
    return res.status(400).json({ error: 'Amount and description are required' });
  }

  const transaction = {
    id: Date.now(),
    amount: parseFloat(amount),
    description,
    createdAt: new Date().toISOString()
  };

  transactions.push(transaction);
  res.status(201).json(transaction);
});

// GET endpoint to retrieve all transactions
app.get('/api/transactions', (req, res) => {
  res.json(transactions);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
