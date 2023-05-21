import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { Trash3Fill, PencilSquare } from "react-bootstrap-icons";
import { useState } from "react";
import EditExpense from "../NewExpenses/EditExpense";

function ExpenseItem(props) {
  const [editFlag, setEditFlag] = useState(false);
  const DeleteHandler = () => {
    const data = {
      EditDelete: "D",
      txnId: props.id,
    };
    console.log(data);
    props.onEdit(data);
  };
  const EditHandler = (updatedData) => {
    // const data = {
    //   EditDelete: "E",
    //   txnId: props.id,
    //   title: props.title,
    //   amount: props.amount,
    // };
    props.onEdit(updatedData);
  };

  const onClickEdit = () => {
    setEditFlag(!editFlag);
  };
  const expenseDate = props.date;
  const expenseTitle = props.title;
  const amount = props.amount;

  return (
    <Card className="expense-item">
      <ExpenseDate date={expenseDate}></ExpenseDate>

      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <p className="expense-item__price">INR {amount}</p>
        <button style={{ backgroundColor: "#4b4b4b" }} onClick={DeleteHandler}>
          <Trash3Fill color="red" size="15px" />
        </button>
        {editFlag === true ? (
          <EditExpense
            cancelHandler = {onClickEdit}
            updateHandler = {EditHandler}
            txnId={props.id}
            title={props.title}
            amount={props.amount}
            txnDate={props.date}
          />
        ) : (
          <button style={{ backgroundColor: "#4b4b4b" }} onClick={onClickEdit}>
            <PencilSquare color="blue" size="15px" />
          </button>
        )}
      </div>
    </Card>
  );
}

export default ExpenseItem;
