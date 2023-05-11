import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";


function ExpenseItem(props) {

  const expenseDate = props.date;
  const expenseTitle = props.title;
  const amount = props.amount;

  return (
    <Card className="expense-item">
      <ExpenseDate date={expenseDate}></ExpenseDate>

      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <p className="expense-item__price">INR {amount}</p>
      </div>

    </Card>
  );
}

export default ExpenseItem;
