# 💰 Expense Tracker

A simple and responsive **Expense Tracker** built using **React.js** and **JavaScript**.
The application allows users to manage their income and expenses, calculate their current balance, delete transactions, and persist data using browser `localStorage`.

## 🚀 Live Demo

🔗 **Live Demo:** Add your deployed project link here

## 📂 GitHub Repository

🔗 **GitHub:** https://github.com/Manojkumar1909/expense-tracker-react

---

## ✨ Features

* ➕ Add income and expense transactions
* 💰 Calculate total income
* 💸 Calculate total expenses
* 📊 Display current balance
* 🗑️ Delete transactions
* ✅ Form validation
* 💾 Store transactions using `localStorage`
* 🔄 Data remains available after refreshing the browser
* 📱 Responsive design for different screen sizes
* ⚛️ Built using reusable React components

---

## 🛠️ Technologies Used

* **React.js**
* **JavaScript (ES6+)**
* **HTML5**
* **CSS3**
* **Vite**
* **Browser localStorage**

---

## 📁 Project Structure

```text
expense-tracker-react/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Balance.jsx
│   │   ├── ExpenseForm.jsx
│   │   ├── TransactionItem.jsx
│   │   └── TransactionList.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

---

## 🧩 Application Components

### `App.jsx`

The main component of the application.

Responsibilities:

* Maintains the transaction state
* Adds new transactions
* Deletes transactions
* Saves transactions to `localStorage`
* Loads saved transactions when the application starts
* Passes data and functions to child components

### `ExpenseForm.jsx`

Handles adding new transactions.

It contains:

* Description input
* Amount input
* Transaction type selection
* Form validation

The form uses React controlled inputs with `useState`.

### `Balance.jsx`

Calculates and displays:

* Total income
* Total expenses
* Current balance

The calculations use JavaScript array methods such as:

```javascript
filter()
reduce()
```

### `TransactionList.jsx`

Displays all transactions using React's `map()` method.

### `TransactionItem.jsx`

Displays an individual transaction and provides the delete functionality.

---

## 🔄 Application Data Flow

```text
User
  ↓
ExpenseForm
  ↓
Create Transaction Object
  ↓
addTransaction()
  ↓
App.jsx
  ↓
setTransactions()
  ↓
React State Updates
  ↓
┌───────────────┬──────────────────┐
↓               ↓                  ↓
Balance     TransactionList     localStorage
                ↓
        TransactionItem
```

---

## 💾 Local Storage

The application uses the browser's `localStorage` to persist transactions.

When the transaction state changes:

```javascript
localStorage.setItem(
  "transactions",
  JSON.stringify(transactions)
);
```

When the application starts, previously saved transactions are retrieved:

```javascript
const savedTransactions =
  localStorage.getItem("transactions");
```

The stored JSON string is converted back into a JavaScript array using:

```javascript
JSON.parse(savedTransactions);
```

This allows transaction data to remain available even after refreshing the browser.

---

## ⚛️ React Concepts Used

This project demonstrates several important React concepts:

* Functional Components
* JSX
* `useState`
* `useEffect`
* Props
* Event Handling
* Controlled Components
* Conditional Rendering
* Component Communication
* List Rendering
* `map()`
* `filter()`
* `reduce()`

---

## 🧮 Example Transaction

Transactions are stored as JavaScript objects:

```javascript
{
  id: 123456789,
  description: "Salary",
  amount: 25000,
  type: "income"
}
```

An expense transaction looks like:

```javascript
{
  id: 123456790,
  description: "Food",
  amount: 500,
  type: "expense"
}
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Manojkumar1909/expense-tracker-react.git
```

### 2. Navigate to the project

```bash
cd expense-tracker-react
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Vite will provide a local URL similar to:

```text
http://localhost:5173
```

---

## 📌 Future Improvements

Possible improvements for future versions:

* Edit existing transactions
* Add transaction categories
* Add date for each transaction
* Add search and filtering
* Add charts for income and expenses
* Add monthly expense tracking
* Add dark mode
* Connect the application to a backend API and database

---

## 🎯 Learning Outcome

This project helped me understand how to build a small React application from scratch and strengthened my understanding of:

* React component architecture
* State management
* Props and component communication
* Form handling
* JavaScript array methods
* Browser storage
* Data persistence
* Conditional rendering
* Responsive UI development

---

## 👨‍💻 Author

**Manojkumar1909**

GitHub:
https://github.com/Manojkumar1909

---

## ⭐ If You Like This Project

If you find this project useful, consider giving the repository a ⭐ on GitHub.
