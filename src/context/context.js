import React,{useReducer,createContext} from 'react';
import contextReducer from './contextReducer';

const intitialState= JSON.parse(localStorage.getItem('transactions')) || [{"amount":1500,"category":"Lottery","type":"Income","date":"2020-12-29","id":"70193697-a113-4e36-a825-1f415d93d82d"},{"amount":300,"category":"Extra income","type":"Income","date":"2020-12-29","id":"7c112ca2-c6a8-4360-8724-e8f887c64762"},{"amount":2000,"category":"Investments","type":"Income","date":"2020-12-29","id":"9d7d89d6-5cda-4b74-a683-135b08da4b8d"},{"amount":500,"category":"Food","type":"Expense","date":"2020-12-29","id":"08c31009-1956-4fef-ab34-53df0b07e827"},{"amount":1000,"category":"Car","type":"Expense","date":"2020-12-29","id":"521f147b-ccaa-48fb-950b-2a75317fb798"}];

export const ExpenseTrackerContext = createContext(intitialState);

export const Provider =({ children })=>{

    const [transactions,dispatch]=useReducer(contextReducer,intitialState);

    //Action creatore
    const deleteTransaction=(id)=>{
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        })
    }
    const addTransaction=(transaction)=>{
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        })
    }

    const balance = transactions.reduce((acc,currVal)=>currVal.type === 'Expense'?acc-currVal.amount:acc+currVal.amount,0);

    return(
        <ExpenseTrackerContext.Provider value={{
            addTransaction,
            deleteTransaction,
            transactions,
            balance,
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}