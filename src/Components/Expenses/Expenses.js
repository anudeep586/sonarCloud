import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }
    const filtered = props.expenses.filter(exp => exp.date.getFullYear().toString() === filteredYear);

    
    return <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filtered}/>
        <ExpensesList items={filtered}/>
    </Card>
}

export default Expenses;