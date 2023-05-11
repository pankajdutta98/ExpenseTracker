import React from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const expenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log("Expense form component")
        console.log(expenseData)
        props.onAddExpense(expenseData);
    }
    return <div className="new-expense">
        <ExpenseForm onSubmitExpenseData = {expenseHandler}/>
    </div>
}

export default NewExpense;