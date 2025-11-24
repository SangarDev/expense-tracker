import { useState } from "react";
import { useExpenses } from "../context/ExpenseContext";
import formatDate from "../utils/formatDate";
import EditExpenseModal from "./EditExpenseModal";

export default function ExpenseItem({ item }) {
  const { deleteExpense } = useExpenses();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="expense-item">
      <div>
        <strong>{item.title}</strong><br />
        ${item.amount} • {item.category || "No Category"}<br />
        {item.date && formatDate(item.date)}
      </div>

      <div className="expense-actions">
        <button onClick={() => setIsOpen(true)}>Edit</button>
        <button onClick={() => deleteExpense(item.id)} style={{background: "red"}}>
          Delete
        </button>
      </div>

      {isOpen && (
        <EditExpenseModal item={item} close={() => setIsOpen(false)} />
      )}
    </div>
  );
}
