import React, {useState} from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem =(props) => {
    // const expenseDate = new Date(2023, 1, 11);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.67
    const [title, setTitle] = useState(props.title)

    
    const clickHandler = () => {
        setTitle('Updated');
        console.log(title)
    }

    return (
        
        <Card className="expense-item">
            <ExpenseDate date = {props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Click</button>
        </Card>
    )
}

export default ExpenseItem;