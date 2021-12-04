import React,{useState} from 'react';
import './Expense.css';
function ExpenseForm(props){
     const [EnteredTitle ,setEnteredTitle]=useState('');
     const [EnteredAmount ,setEnteredAmount]=useState('');
     const [EnteredDate ,setEnteredDate]=useState('');

    // const [userInput,setUserInput]=useState({
    //     EnteredTitle:'',
    //     EnteredAmount:'',
    //     EnteredDate:'',

    // });


    function titleChangeHandler(event){
        setEnteredTitle(event.target.value);
        //  setUserInput((prevState)=>{
        //      return {...prevState,
        //      EnteredTitle:event.target.value};
        //  });
    };
    function AmountChangeHandler(event){
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     EnteredAmount:event.target.value,
        // });
   };
   function DateChangeHandler(event){
    setEnteredDate(event.target.value);
    // setUserInput({
        // ...userInput,
        // EnteredDate:event.target.value,
        //     });
    };
    
    const submitHandler=(event)=>{
        event.preventDefault();

        const expenseData={
            title:EnteredTitle,
            amount:EnteredAmount,
            date:new Date(EnteredDate),

        };
         props.onSaveExpenseData(expenseData);
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
    };
     
    
    return(
        <form onSubmit={submitHandler}>
            <div>
                <div className='expense-control'>
                    <label>Title</label>
                    <input type='text' value={EnteredTitle} onChange={titleChangeHandler}/>
    
                </div>
                <div className='expense-control'>
                    <label>Amount    </label>
                    <input type='number' min="0.01" step="0.01" value={EnteredAmount} onChange={AmountChangeHandler}/>
                </div>
                <div className='expense-control'>
                    <label>Date </label>
                    <input type='date' min="2019-01-01" max="2025-12-31" value={EnteredDate} onChange={DateChangeHandler}/>
                </div>
            </div>
            <div className="expense-button">
                <button   type='submit'>Add Expense</button>
            </div>
        </form>
    );
};
export default ExpenseForm;