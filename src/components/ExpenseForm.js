import React, { useState } from 'react'
import './ExpenseItem.css'

function ExpenseForm(props) {

    const [EnteredTitle, setEnteredTitle] = useState('')
    const [EnteredAmount, setEnteredAmount] = useState('')
    const [EnteredDate, setEnteredDate] = useState('')

    const titleHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const amountHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    const dateHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expensedata = {
            title: EnteredTitle,
            amount: +EnteredAmount,
            date: new Date(EnteredDate)
        };

        //console.log(expensedata);
        props.onSaveExpenseData(expensedata);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__control">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={EnteredTitle} onChange={titleHandler} />
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={EnteredAmount} min="0.01" step="0.01" onChange={amountHandler} />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={EnteredDate} min="2019-01-01" max="2022-12-31" onChange={dateHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit"> Add Expense </button>
            </div>
        </form>
    )
}

export default ExpenseForm