import { useState } from "react";
import { useExpenses } from "../context/ExpenseContext";

export default function EditExpenseModal({ item, close }) {
  const { editExpense } = useExpenses();
  const [input, setInput] = useState(item);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    editExpense(input);
    close();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Edit Expense</h3>

        <form onSubmit={handleUpdate}>
          <input name="title" value={input.title} onChange={handleChange} />
          <input
            name="amount"
            type="number"
            value={input.amount}
            onChange={handleChange}
          />
          <input
            name="category"
            value={input.category}
            onChange={handleChange}
          />
          <input
            name="date"
            type="date"
            value={input.date}
            onChange={handleChange}
          />

          <button type="submit">Update</button>
          <button type="button" onClick={close} style={{ marginLeft: "10px" }}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
