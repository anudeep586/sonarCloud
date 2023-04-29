import React , { useState } from 'react';
import './App.css';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Home Amenities',
    amount: 94.12,
    date: new Date(2020, 0, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e15',
    title: 'Vacation',
    amount: 649,
    date: new Date(2020, 1, 25),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'Laptop Repair',
    amount: 90,
    date: new Date(2020, 2, 14),
  }, {
    id: 'e6',
    title: 'Shopping',
    amount: 350,
    date: new Date(2020, 3, 24),
  }, {
    id: 'e7',
    title: 'Party',
    amount: 110,
    date: new Date(2020, 4, 4),
  }, {
    id: 'e8',
    title: 'College',
    amount: 750,
    date: new Date(2020, 5, 10),
  }, {
    id: 'e9',
    title: 'Car Service',
    amount: 340.50,
    date: new Date(2020, 6, 5),
  }, {
    id: 'e10',
    title: 'Medical Insurance',
    amount: 340,
    date: new Date(2020, 7, 8),
  }, {
    id: 'e11',
    title: 'House Rent',
    amount: 490,
    date: new Date(2020, 8, 1),
  }, {
    id: 'e12',
    title: 'New Furniture',
    amount: 150,
    date: new Date(2020, 9, 14),
  }, {
    id: 'e13',
    title: 'Microwave repair',
    amount: 50,
    date: new Date(2020, 10, 14),
  }, {
    id: 'e14',
    title: 'Festival Expenses',
    amount: 540.98,
    date: new Date(2020, 11, 12),
  },
];
const App = () => {
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense,...prevExpenses];
    });
  }
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
