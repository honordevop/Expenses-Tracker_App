import React, {useState} from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFillter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";

const Expenses = (expenses) => {
    // const [id, title, amount, date] = expenses
    // console.log(expenses.data[0])

    const [filterDate, setFilterDate] = useState("Select")

    const filterDateHandler = (inputedFilterDate) => {
      // console.log(inputedFilterDate)
      setFilterDate(inputedFilterDate)
      
    }

    const filteredExpenses = expenses.data.filter(expense => {
      if (filterDate === "Select") {
        return expenses
      } else {
        return expense.date.getFullYear().toString() === filterDate
      }
    })

    
  return (
    // <h2>Expenses</h2>

    <Card className="expenses">
      <ExpensesFilter
        // selectedYear={filterDate}
        onFilteredDate={filterDateHandler}
      />
      <ExpensesChart expenses = {filteredExpenses} />
      <ExpensesList expenseList = {filteredExpenses} />
      <Card></Card>
    </Card>
  );
}

export default Expenses;
