import React from 'react';
import './NewExpense.css'
import ExpenseForm from './Expenseform'
const NewExpense=(props)=>{
    const saveExpensedDataHandler=(enteredExpensedData)=>{
        const expenseData={
            ...enteredExpensedData,
        };
        props.onAddExpense(expenseData);
    };
    return(<div className='expense-form' >
         <ExpenseForm onSaveExpenseData={saveExpensedDataHandler}/>
        </div>

    );
};

export default NewExpense;