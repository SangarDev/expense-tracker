import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useLocalStorage("expenses", []);

  const addExpense = (expense) => {
    setExpenses([...expenses, { id: Date.now(), ...expense }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  const editExpense = (updated) => {
    setExpenses(
      expenses.map((e) => (e.id === updated.id ? updated : e))
    );
  };

  return (
    <ExpenseContext.Provider
      value={{ expenses, addExpense, deleteExpense, editExpense }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenses = () => useContext(ExpenseContext);
