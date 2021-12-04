import './App.css';
 
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import React,{useState} from 'react';
// import ExpenseItem from './components/Expenses/ExpenseItem';
// import Card from './components/UI/Card';
const Dummy = [
  { id:'e1',
    title: 'car',
    amount: 94.63,
    date: new Date(2021, 3, 30) 
  },
  { id:'e2',
    title: 'books',
    amount: 998,
    date: new Date(2021, 3, 15)
  }, { id:'e3',
    title: 'Phone',
    amount: 794.63,
    date: new Date(2021, 5, 12)
  },
];
function App() {
  const [expenses,setExpenses]=useState(Dummy);
   
  const addExpenseHandler=(expense)=>{
 setExpenses( (prevExpenses)=>{
  return ([expense, ...prevExpenses])
 });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      {/* <Card>
      <ExpenseItem title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      ></ExpenseItem>
      <ExpenseItem title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}></ExpenseItem>
      <ExpenseItem title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}></ExpenseItem>
      </Card> */}
      <Expenses item={expenses}/>
    </div>
  );
}

export default App;
