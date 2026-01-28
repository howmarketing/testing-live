# Transaction Submission Application

simple web application that allows users to submit a monetary transaction. 
The application consist of a front-end built with React and a back-end using Node.js and Express.

> The application allow users to input the transaction amount and a description, and upon submission, it should display the transaction details on the front-end.

## Requirements

### 1.  Front-End (React)

- [x] Create a form that accepts:
  - [x] Transaction Amount (number)
  - [x] Transaction Description (text)
- [x] On form submission, display the transaction details below the form.

### 2.  Back-End (Node.js + Express)

- [x] Set up a simple Express server that handles POST requests to save transaction data.
- [x] Implement a GET endpoint to retrieve the transaction data.
- [x] Use an in-memory array to store transactions (no database required for this challenge).