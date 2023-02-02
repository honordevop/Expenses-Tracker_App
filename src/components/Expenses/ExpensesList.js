import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (filteredExpenses) => {
  // let expensesContent = <p> No Expenses found </p>
  if (filteredExpenses.expenseList.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {filteredExpenses.expenseList.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;




/*
Second Conditional rendering method
const ExpensesList = (filteredExpenses)=>{


    let expensesContent = <p> No Expenses found </p>
    if (filteredExpenses.expenseList.length > 0) {
      expensesContent = filteredExpenses.expenseList.map((expense) => (
        <ExpenseItem key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))
    }
    return (
        <ul className="expenses-list">
            {expensesContent}
        </ul>
    )
}
*/
