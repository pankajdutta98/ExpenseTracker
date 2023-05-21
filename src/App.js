import { useEffect, useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import LoaderA from "./Components/Loaders/LoaderA";
import LoginPage from "./Components/Login/LoginPage";
import NewExpense from "./Components/NewExpenses/NewExpense";

// const initExpenses = [
//   {
//     id: "e1",
//     title: "Toilet Paper",
//     amount: 94,
//     date: new Date(2023, 7, 14),
//   },
//   { id: "e2", title: "New TV", amount: 799, date: new Date(2023, 2, 12) },
//   {
//     id: "e3",
//     title: "Car Insurance",
//     amount: 294,
//     date: new Date(2023, 2, 28),
//   },
//   {
//     id: "e4",
//     title: "New Desk (Wooden)",
//     amount: 450,
//     date: new Date(2023, 5, 12),
//   },
// ];
let firstLoad = true;

function App() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState("false");

  async function fetchExpenses() {
    setLoading(true);
    const response = await fetch(
      "https://xpensetracker.azurewebsites.net/api/ExpenseModels/Getexpenses"
      // "http://localhost:58597/api/ExpenseModels/Getexpenses"
    );
    const data = await response.json();
    const Expenses =
      data &&
      data.map((data) => {
        return {
          id: data.txnId,
          title: data.title,
          amount: data.amount,
          date: new Date(Date.parse(data.txnDate)),
        };
      });
    console.log(Expenses);
    setLoading(false);
    setExpenses(Expenses);
  }
  if (firstLoad) {
    fetchExpenses();
    firstLoad = false;
  }

  async function addExpenseHandler(enteredExpense) {
    const dataModel = {
      txnDate: enteredExpense.date,
      title: enteredExpense.title,
      amount: enteredExpense.amount,
      category: enteredExpense.category,
    };
    setLoading(true);
    const response = await fetch(
      "https://xpensetracker.azurewebsites.net/api/ExpenseModels/CreateNewExpense",
      // "http://localhost:58597/api/ExpenseModels/CreateNewExpense",
      {
        method: "POST",
        body: JSON.stringify(dataModel),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    const Expenses =
      data &&
      data.expenses.map((data) => {
        return {
          id: data.txnId,
          title: data.title,
          amount: data.amount,
          date: new Date(Date.parse(data.txnDate)),
        };
      });
    console.log(Expenses);
    setLoading(false);
    setExpenses(Expenses);
    // console.log(enteredExpense);
    // setExpenses((previousExpenses) => [enteredExpense, ...previousExpenses]);
    // console.log(expenses);
  }

  //Call to Edit or Delete API Based on EditDelete flag (E/D) 
  async function editDeleteHandler (dataObject){
    setLoading(true);
    let apiEndpointString = ''
    if (dataObject.EditDelete === 'E'){
      // apiEndpointString = "http://localhost:58597/api/ExpenseModels/EditExpense";
      apiEndpointString = "https://xpensetracker.azurewebsites.net/api/ExpenseModels/EditExpense";
    }
    else{
      // apiEndpointString = "http://localhost:58597/api/ExpenseModels/DeleteExpense";
      apiEndpointString = "https://xpensetracker.azurewebsites.net/api/ExpenseModels/DeleteExpense";
    }
    const response = await fetch(
      apiEndpointString,
      {
        method: "POST",
        body: JSON.stringify(dataObject),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    const Expenses =
      data &&
      data.expenses.map((data) => {
        return {
          id: data.txnId,
          title: data.title,
          amount: data.amount,
          date: new Date(Date.parse(data.txnDate)),
        };
      });
    console.log(Expenses);
    setLoading(false);
    setExpenses(Expenses);
  }

  return (
    <div>

      <NewExpense onAddExpense={addExpenseHandler} />
      {loading === true ? <LoaderA></LoaderA> : expenses != null && expenses.length > 0 ? (
        <div>
          <Expenses onEditDelete= {editDeleteHandler} items={expenses} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
