import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      {/* Date block */}
      <ExpenseDate date={props.expense.date} />

      <div className="expense-item__description">
        <h2>{props.expense.title}</h2>
        <div className="expense-item__price">£{props.expense.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
