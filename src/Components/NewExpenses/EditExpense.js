import { useState } from "react";

const EditExpense = (props) => {
    const [enteredTitle, setEnteredTitle] = useState(props.title)
    const [enteredAmount, setEnteredAmount] = useState(props.amount);
    const [enteredDate, setEnteredDate] = useState(new Date(props.txnDate).toLocaleString());
  
    const titleChangeHandler = (event) => {
      setEnteredTitle(event.target.value);
    };
  
    const amountChangeHandler = (event) => {
      setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
      setEnteredDate(event.target.value);
    };
  
    const submitHandler = (event) => {
      event.preventDefault();
  
      const expenseData = {
        txnId: props.txnId,
        EditDelete: 'E',
        title: enteredTitle,
        amount: enteredAmount,
        txnDate: new Date(enteredDate),
        category: 'Misc'
      };
      props.updateHandler(expenseData);
      cancelHandler();
      // console.log(expenseData);
    //   props.onSubmitExpenseData(expenseData);
    //   setEnteredDate("");
    //   setEnteredTitle("");
    //   setEnteredAmount("");
    };

    const cancelHandler = () => {
        props.cancelHandler();
    }
  
return <div>
<form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              onChange={titleChangeHandler}
              value={enteredTitle}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="1"
              step={0.1}
              onChange={amountChangeHandler}
              value={enteredAmount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              onChange={dateChangeHandler}
              value={enteredDate}
            />
          </div>
        </div>
        <div className="new-expense__actions">
        <button onClick={cancelHandler}>Cancel</button>
          <button type="submit">Edit Expense</button>
        </div>
      </form>
      </div>

}

export default EditExpense;