import React from 'react'

export const TransactionHistory = () => {
    return(
        <div>
            <h3>
                Transaction History
            </h3>
            <ul className="list">
                <li className="plus">
                    Income 1
                    <span>$100</span>
                    <button className="delete-btn">X</button>
                </li>
                <li className="minue">
                    Exp 1
                    <span>-$30</span>
                    <button className="delete-btn">X</button>
                </li>
            </ul>
        </div>
    )
}