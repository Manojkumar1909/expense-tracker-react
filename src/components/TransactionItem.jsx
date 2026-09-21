function TransactionItem({
  transaction,
  deleteTransaction
}) {
  const isIncome = transaction.type === "income";

  return (
    <li className="transaction-item">
      <div>
        <strong>{transaction.description}</strong>

        <p className={isIncome ? "income" : "expense"}>
          {isIncome ? "+" : "-"}₹
          {transaction.amount.toFixed(2)}
        </p>
      </div>

      <button
        className="delete-button"
        onClick={() =>
          deleteTransaction(transaction.id)
        }
      >
        Delete
      </button>
    </li>
  );
}

export default TransactionItem;