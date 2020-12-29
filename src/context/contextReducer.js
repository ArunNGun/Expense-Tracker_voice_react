const contextReducer = (state,action) => {
    
    switch (action.type) {
        case 'DELETE_TRANSACTION':{
            const transactions=state.filter((t)=>t.id!==action.payload);
            localStorage.setItem('transactions',JSON.stringify(transactions));
            return transactions;
        }
            
        case 'ADD_TRANSACTION': 
           { const transactions=[action.payload, ...state];
            localStorage.setItem('transactions',JSON.stringify(transactions));
            return transactions;
           }
        default:
            return state;
            
    }

}
 
export default contextReducer;