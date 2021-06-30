import React, { useState } from 'react'
import Card from './Card'
import ExpenseFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './Chart/ExpensesChart'

function Expenses(props) {

  const [filteredYear, setfilteredYear] = useState("2020");

  const filterChangeHandler = (selectedyear) => {
    setfilteredYear(selectedyear);
  }

  const filteredExpenses = props.item.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}/>
    </Card>
  )
}

export default Expenses
