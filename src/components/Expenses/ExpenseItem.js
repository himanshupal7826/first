import './ExpenseItem.css';
import React,{useState} from 'react';
import Card from './Card';
import ExpenseDate from './ExpenseDate';
function ExpenseItem(props) {
    const [ title, setTitle ]=useState(props.title);
    
    const clickHandler=()=>{  //also an function declaration
         
        setTitle('updated');
        console.log(title);
    }
    return (
        <Card className="expense-item" >
            <ExpenseDate date={props.date}   />
            
            <div className="expense-item_description">
                {props.title}</div>
            <div className="expense-item_price">
                Rs: {props.amount}</div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
};
export default ExpenseItem;