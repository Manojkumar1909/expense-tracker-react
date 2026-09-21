function Balance({ transactions }) {
  const income = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce(
      (total, transaction) => total + transaction.amount,
      0
    );

  const expenses = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce(
      (total, transaction) => total + transaction.amount,
      0
    );

  const balance = income - expenses;

  return (
    <section className="balance-section">
      <h2>Balance</h2>

      <h3>₹{balance.toFixed(2)}</h3>

      <div className="summary">
        <div>
          <p>Income</p>
          <strong className="income">
            ₹{income.toFixed(2)}
          </strong>
        </div>

        <div>
          <p>Expense</p>
          <strong className="expense">
            ₹{expenses.toFixed(2)}
          </strong>
        </div>
      </div>
    </section>
  );
}

export default Balance;