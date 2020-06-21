import React, { useContext } from 'react'

// Import the Global State
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {

    const { transactions } = useContext(GlobalContext);

    // Add the transaction amounts to get total balance using the reduce method
    const transactionAmounts = transactions.map(transaction => transaction.transactionAmount);
    const balance = transactionAmounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div>
            <h4>Current Balance</h4>
            <h1 id="balance">$0.00</h1>
        </div>
    )
}