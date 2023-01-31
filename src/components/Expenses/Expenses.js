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
  return (
    // <h2>Expenses</h2>

    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filterDate}
        onFilteredDate={filterDateHandler}
      />
      {expenses.data.map((expense) => (
        <ExpenseItem key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      <Card></Card>
    </Card>
  );
}

export default Expenses;
