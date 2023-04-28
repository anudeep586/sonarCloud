import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './ExpenseForm.css';
const ExpenseForm = (props) => {
    const [enteredTitle, setenteredTitle] = useState('');
    const [enteredAmount, setenteredAmount] = useState('');
    const [enteredDate, setenteredDate] = useState('');
    const titleChangeHandler = (event) => {
        setenteredTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setenteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setenteredDate(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };
        props.onSaveExpenseData(expenseData);
        setenteredAmount('');
        setenteredDate('');
        setenteredTitle('');
    }
    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <Button variant="outline-primary" type="button" onClick={props.onCancel}>Cancel</Button>{' '}
            <Button variant="primary" type="submit">Add Expenses</Button>{' '}
        </div>
    </form>
}

export default ExpenseForm;