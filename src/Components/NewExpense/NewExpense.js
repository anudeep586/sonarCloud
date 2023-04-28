import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import {Button} from 'react-bootstrap';
import './NewExpense.css';
const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpensedata) => {
        const expenseData = {
            ...enteredExpensedata,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }
    const starteditingHandler = () => {
        setIsEditing(true);
    }
    const stopitingHandler = () => {
        setIsEditing(false);
    }
    return <div className="new-expense">
        <div className="mb-2">
            {!isEditing && <Button variant="primary" size="lg" onClick={starteditingHandler}>
            Add New Expense
            </Button>}
        </div>
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopitingHandler} />}
    </div>
}

export default NewExpense;