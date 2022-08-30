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

  return (
    <div className="new-expense">
      {!showForm && <button onClick={toggleForm}>Add new expense</button>}
      {showForm && (
        <ExpenseForm
          onCancel={toggleForm}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
