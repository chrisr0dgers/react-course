import React, { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectYear) => {
    console.log(selectYear);
    setFilteredYear(selectYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {props.items.map((expense, index) => {
          return <ExpenseItem key={index} expense={expense}></ExpenseItem>;
        })}
      </Card>
    </div>
  );
}

export default Expenses;
