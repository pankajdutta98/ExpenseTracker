import React from "react";
import Chart from "../Chart/Chart";
import Card from "../UI/Card";

const ExpenseChart = (props) => {
  let sumOfExpenses = 0;

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  props.expenses.forEach((expense) => {
    sumOfExpenses += parseInt(expense.amount);
  });
  console.log(sumOfExpenses);
  const showMonthlyVal = props.month == -1 ? false : true;
  const avlblBal = props.maxVal - sumOfExpenses;

  return (
    <Card className="expense-item">
      <table width={"100%"}>
        <tr>
          <td width={"15%"}>
            <div>
              <Chart maxVal={props.maxVal} value={sumOfExpenses} />
            </div>
          </td>
          <td style={{ color: "white", width: "60%" }}>
            <table width={"100%"}>
              <tr>
                <td align="center">Showing Expenses for</td>
                {showMonthlyVal && <td align="center">Total Budget</td>}
                <td align="center">Total Expenditure</td>
                {showMonthlyVal && <td align="center">Available Budget</td>}
              </tr>
              <tr>
                <td align="center">
                  {showMonthlyVal && <h2>{months[props.month]}</h2>}
                  {!showMonthlyVal && <h2>{props.year}</h2>}
                </td>
                {showMonthlyVal && (
                  <td align="center">
                    <h2 style={{ color: "greenyellow" }}>{props.maxVal}</h2>
                  </td>
                )}
                <td align="center">
                  <h2 style={{ color: "Highlight" }}>{sumOfExpenses}</h2>
                </td>
                {showMonthlyVal && (
                  <td align="center">
                    {avlblBal > 0 ? (
                      <h2 style={{ color: "greenyellow" }}>{avlblBal}</h2>
                    ) : (
                      <h2 style={{ color: "red" }}>{avlblBal}</h2>
                    )}
                  </td>
                )}
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </Card>
  );
};

export default ExpenseChart;
