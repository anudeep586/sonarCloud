import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';
const ExpensesList = props => {

    if(props.items.length === 0){
        return <h2 className="expense-list__fallback" style={{color: "white"}}>Found no expenses.</h2>
    }
    return <ul className="expenses-list">
        {props.items.map(expense =>
            <ExpenseItem
                id={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />)}
    </ul>
}

export default ExpensesList;