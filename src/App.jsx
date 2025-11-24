import { ExpenseProvider } from "./context/ExpenseContext";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

export default function App() {
  return (
    <ExpenseProvider>
      <div className="container">
        <h1>Expense Tracker</h1>
        <ExpenseForm />
        <ExpenseList />
      </div>
    </ExpenseProvider>
  );
}
