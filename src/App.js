import React, {useState} from 'react'
import './App.css';
import Expenses from './components/Expenses';
import NewExpenses from './components/NewExpenses';

const dummy_expenses = [
  {
    id: 1,
    title: "car insurance",
    amount: 420,
    date: new Date(2020, 6, 6)
  },
  {
    id: 2,
    title: "grossery",
    amount: 420,
    date: new Date(2021, 7, 7)
  },
  {
    id: 3,
    title: "stationary",
    amount: 420,
    date: new Date(2022, 8, 8)
  },
  {
    id: 4,
    title: "fees",
    amount: 420,
    date: new Date(2021, 9, 9)
  },
]


function App() {

  const [expenses, setexpenses] = useState(dummy_expenses)
  
  const AddExpenseHandler = (expense) => {
    setexpenses((prevexpense) => {
      return [expense, ...prevexpense]
    })
    
  }
  
  return (
    <div>
          <NewExpenses onAddExpense={AddExpenseHandler} />
    <div className="expense-item">
          <Expenses item={expenses} />        
    </div>
    </div>
  );
}

export default App;
