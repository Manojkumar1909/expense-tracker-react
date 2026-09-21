import { useEffect, useState } from "react";
import Balance from "./components/Balance";
import ExpenseForm from "./components/ExpenseForm";
import TransactionList from "./components/TransactionList";

function App() {
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");

    if (savedTransactions) {
      return JSON.parse(savedTransactions);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    );
  }, [transactions]);

  function addTransaction(transaction) {
    setTransactions((currentTransactions) => [
      ...currentTransactions,
      transaction
    ]);
  }

  function deleteTransaction(id) {
    setTransactions((currentTransactions) =>
      currentTransactions.filter(
        (transaction) => transaction.id !== id
      )
    );
  }

  return (
    <main className="container">
      <h1>Expense Tracker</h1>

      <Balance transactions={transactions} />

      <ExpenseForm addTransaction={addTransaction} />

      <TransactionList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
      />
    </main>
  );
}

export default App;