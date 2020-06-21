import React, {createContext, useReducer} from 'react';

//Import the Reducer
import AppReducer from './AppReducer';

//Create the initial state
const initialState = {
    transactions: [
        {id: 1, description: 'Proj 1 Income', transactionAmount: 100000},
        {id: 2, description: 'Proj 2 Income', transactionAmount: 50000},
        {id: 3, description: 'Proj 1 Expense', transactionAmount: -1000},
        {id: 4, description: 'Proj 2 Expense', transactionAmount: -10000}
    ]
}

//Create the Global Context
export const GlobalContext = createContext(initialState);

// Create a Provider for the Global Context
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions
            }
        }>
            {children}
        </GlobalContext.Provider>
    );

}