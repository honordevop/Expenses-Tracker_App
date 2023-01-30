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
      <ExpensesFilter selectedYear={filterDate} onFilteredDate = {filterDateHandler}/>
      <ExpenseItem
        title={expenses.data[0].title}
        amount={expenses.data[0].amount}
        date={expenses.data[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses.data[1].title}
        amount={expenses.data[1].amount}
        date={expenses.data[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses.data[2].title}
        amount={expenses.data[2].amount}
        date={expenses.data[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses.data[3].title}
        amount={expenses.data[3].amount}
        date={expenses.data[3].date}
      ></ExpenseItem>
      <Card></Card>
    </Card>
    
  );
}

export default Expenses;
