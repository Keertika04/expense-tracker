import React from 'react'
import ExpenseItem from './ExpenseItem'

function ExpensesList(props) {

    if(props.items.length === 0){
        return <h1 className="expenses-list__fallback"> No Expenses Found </h1>
    }

    return (
        <ul className="expenses-list">
            {props.items.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />))}
        </ul>
    )
}

export default ExpensesList
