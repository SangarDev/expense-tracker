import { useExpenses } from "../context/ExpenseContext";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList() {
  const { expenses } = useExpenses();

  // ⭐ Calculate total
  const total = expenses.reduce((sum, item) => {
    return sum + Number(item.amount);
  }, 0);

  return (
    <div>
      <h2>Expenses</h2>

      {/* ⭐ Display Total */}
      <h3>Total Spent: ${total}</h3>

      {expenses.length === 0 && <p>No expenses added yet.</p>}

      {expenses.map((item) => (
        <ExpenseItem key={item.id} item={item} />
      ))}
    </div>
  );
}
