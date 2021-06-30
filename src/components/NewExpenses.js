import React from 'react'
import ExpenseForm from './ExpenseForm'
                                                                                                                     
function NewExpenses(props) {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expensedata = {
            ...enteredExpenseData,
            id : Math.random().toString(),
        }
        props.onAddExpense(expensedata);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpenses
