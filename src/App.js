import { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";

import NewExpense from "./Components/NewExpenses/NewExpense";
const initExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94,
    date: new Date(2023, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799, date: new Date(2023, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294,
    date: new Date(2023, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2023, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(initExpenses);

  const addExpenseHandler = (enteredExpense) => {
    console.log("From app.js ");
    console.log(enteredExpense);
    setExpenses((previousExpenses) => [enteredExpense, ...previousExpenses]);
    console.log(expenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <div>
        <Expenses items={expenses} />
      </div>
    </div>
  );
}

export default App;
