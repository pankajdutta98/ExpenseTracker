import { useEffect, useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
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

  async function fetchExpenses() {
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
    setExpenses(Expenses);
  }
  if (firstLoad) {
    fetchExpenses();
    firstLoad = false;
  }

  async function addExpenseHandler(enteredExpense) {
    const dataModel = {
      title: enteredExpense.title,
      amount: enteredExpense.amount,
      category: enteredExpense.category,
    }

    const response = await fetch(
      "https://xpensetracker.azurewebsites.net/api/ExpenseModels/CreateNewExpense",
      // "http://localhost:58597/api/ExpenseModels/CreateNewExpense",
      {
        method: "POST",
        body: JSON.stringify(dataModel),
        headers: {
          "Content-Type": "application/json"
        }
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
    setExpenses(Expenses);
    // console.log(enteredExpense);
    // setExpenses((previousExpenses) => [enteredExpense, ...previousExpenses]);
    // console.log(expenses);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      {expenses != null && expenses.length > 0 ? (
        <div>
          <Expenses items={expenses} />
        </div>
      ) : (
        <p>Expenses Not Found!!!</p>
      )}
      {/* <LoginPage ></LoginPage> */}
    </div>
  );
}

export default App;
