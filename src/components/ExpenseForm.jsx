import { useState } from "react";

function ExpenseForm({ addTransaction }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!description.trim()) {
      setError("Please enter a description.");
      return;
    }

    if (!amount || Number(amount) <= 0) {
      setError("Please enter an amount greater than 0.");
      return;
    }

    const transaction = {
      id: Date.now(),
      description: description.trim(),
      amount: Number(amount),
      type: type
    };

    addTransaction(transaction);

    setDescription("");
    setAmount("");
    setType("expense");
    setError("");
  }

  return (
    <section className="form-section">
      <h2>Add Transaction</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="description">
            Description
          </label>

          <input
            id="description"
            type="text"
            placeholder="Example: Food"
            value={description}
            onChange={(event) =>
              setDescription(event.target.value)
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="amount">
            Amount
          </label>

          <input
            id="amount"
            type="number"
            placeholder="Example: 500"
            value={amount}
            onChange={(event) =>
              setAmount(event.target.value)
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="type">
            Type
          </label>

          <select
            id="type"
            value={type}
            onChange={(event) =>
              setType(event.target.value)
            }
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        {error && (
          <p className="error-message">
            {error}
          </p>
        )}

        <button type="submit">
          Add Transaction
        </button>
      </form>
    </section>
  );
}

export default ExpenseForm;