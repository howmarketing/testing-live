import { useState, useEffect } from 'react';

const API_URL = 'http://localhost:3001/api/transactions';

function App() {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState('');

  // Fetch existing transactions on mount
  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setTransactions(data);
    } catch (err) {
      setError('Failed to fetch transactions');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!amount || !description) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, description }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit transaction');
      }

      const newTransaction = await response.json();
      setTransactions([...transactions, newTransaction]);
      setAmount('');
      setDescription('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h1>Transaction App</h1>

      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="amount">Transaction Amount ($)</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            step="0.01"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
          />
        </div>

        <button type="submit">Submit Transaction</button>
      </form>

      {error && <p className="error">{error}</p>}

      <div className="transactions">
        <h2>Transactions</h2>
        {transactions.length === 0 ? (
          <p>No transactions yet</p>
        ) : (
          <ul>
            {transactions.map((tx) => (
              <li key={tx.id} className="transaction-item">
                <span className="amount">${tx.amount.toFixed(2)}</span>
                <span className="description">{tx.description}</span>
                <span className="date">
                  {new Date(tx.createdAt).toLocaleString()}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
