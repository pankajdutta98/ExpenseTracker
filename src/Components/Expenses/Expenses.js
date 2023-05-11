import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseChart from "./ExpenseChart";
function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2023");
  const [filterMonth, setFilterMonth] = useState(-1);
  const expenses = props.items;
  const handleFilterYear = (year) => {
    console.log(year);
    setFilterYear(year);
  };
  const handleFilterMonth = (month) => {
    console.log(month);
    setFilterMonth(month);
  };

  let filteredExpenses = expenses.filter(
    (x) => x.date.getFullYear().toString() === filterYear
  );

  if (filterMonth >= 0) {
    filteredExpenses = expenses.filter(
      (x) =>
        x.date.getFullYear().toString() === filterYear &&
        x.date.getMonth().toString() === filterMonth
    );
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          year={filterYear}
          month={filterMonth}
          onChangeFilterYear={handleFilterYear}
          onChangeFilterMonth={handleFilterMonth}
        />
        
        {/* <ExpenseChart expenses={filteredExpenses} /> */}
        {filteredExpenses.length === 0 ? (
          <div></div>
        ) : (
          <ExpenseChart maxVal = {20000} year = {filterYear} month = {filterMonth} expenses={filteredExpenses} />
        )}

        {filteredExpenses.length === 0 ? (
          <p className="expenses-list__notFound">No Expenses Found</p>
        ) : (
          filteredExpenses.map((exp) => (
            <ExpenseItem
              key={exp.id}
              date={exp.date}
              title={exp.title}
              amount={exp.amount}
            />
          ))
        )}
      </Card>
    </div>
  );
}
export default Expenses;
