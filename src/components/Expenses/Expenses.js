import Card  from './Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import React,{useState} from 'react'; 

function Expenses(props) {
    const  [filteredYear, setfilteredYear]=useState('2020');
    const filterChangeHandler=selectedYear=>{
        setfilteredYear(selectedYear);
    }
    return (
        <div>
        <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                {props.item.map((expenses) => (
                     
                  <ExpenseItem
                  key ={expenses.id}
                  title={expenses.title}
                 amount={expenses.amount} 
                 date={expenses.date} />))}
        </Card>
        </div>
    );
};

export default Expenses;