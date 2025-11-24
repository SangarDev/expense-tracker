import { useState } from "react";
import { useExpenses } from "../context/ExpenseContext";

export default function ExpenseForm() {
  const { addExpense } = useExpenses();
  const [input, setInput] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.title || !input.amount) return;
    addExpense(input);
    setInput({ title: "", amount: "", category: "", date: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Expense Title"
        value={input.title}
        onChange={handleChange}
      />
      <input
        name="amount"
        type="number"
        placeholder="Amount"
        value={input.amount}
        onChange={handleChange}
      />
      <input
        name="category"
        placeholder="Category"
        value={input.category}
        onChange={handleChange}
      />
      <input
        name="date"
        type="date"
        value={input.date}
        onChange={handleChange}
      />

      <button type="submit">Add Expense</button>
    </form>
  );
}
