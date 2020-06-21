import React, { useContext } from 'react';

// Import the Global State
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {

    // Get the delTransaction from the GlobalContext
    const { delTransaction } = useContext(GlobalContext);

    // Determine if the transaction amount is positive or negative and use 
    // the type to significy positive or negative transaction amount in the display
    const sign = transaction.transactionAmount > 0 ? '+' : '-';

    // Dynamically assign class to differentiate between income and expense
    const transactionType = transaction.transactionAmount > 0 ? 'plus' : 'minus';

    return (
        <li className={transactionType}>
            {transaction.description}
            <span>{sign}${Math.abs(transaction.transactionAmount)}</span>
            <button 
                className="delete-btn"
                onClick={() => delTransaction(transaction.id)}>
                X
            </button>
        </li>
    )
}