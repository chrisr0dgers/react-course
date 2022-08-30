import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);

    toggleForm()
  };

  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  }

  if (showForm) {
    return (
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      </div>
    );
  }

  return (
    <div className="new-expense">
      <button onClick={toggleForm}>Add new expense</button>
    </div>
  );
};

export default NewExpense;
