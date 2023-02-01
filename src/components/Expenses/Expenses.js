import React, {useState} from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFillter";
import Card from "../UI/Card";

const Expenses = (expenses) => {
    // const [id, title, amount, date] = expenses
    // console.log(expenses.data[0])

    const [filterDate, setFilterDate] = useState("2020")

    const filterDateHandler = (inputedFilterDate) => {
      // console.log(inputedFilterDate)
      setFilterDate(inputedFilterDate)
      
    }

    const filteredExpenses = expenses.data.filter(expense => {
      return expense.date.getFullYear().toString() === filterDate
    })

    let expensesContent = <p> No Expenses found </p>
    if (filteredExpenses.length > 0) {
      expensesContent = filteredExpenses.map((expense) => (
        <ExpenseItem key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))
    }
  return (
    // <h2>Expenses</h2>

    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filterDate}
        onFilteredDate={filterDateHandler}
      />
      {expensesContent}
      <Card></Card>
    </Card>
  );
}

export default Expenses;
