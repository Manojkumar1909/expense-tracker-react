import TransactionItem from "./TransactionItem";

function TransactionList({ transactions }) {
  return (
    <section>
      <h2>Transactions</h2>

      <ul>
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
          />
        ))}
      </ul>
    </section>
  );
}

export default TransactionList;