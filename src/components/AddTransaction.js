import React, {useState, useContext} from 'react';

// Import the Global State
import {GlobalContext} from '../context/GlobalState';

export const AddTransaction = () => {

    const [description, setDescription] = useState('');
    const [transactionAmount, setTransactionAmount] = useState(0);

    const { AddTransaction } = useContext(GlobalContext);

    // Create the onSubmit function and apply the onSubmit event in the form
    const onSubmit = (e) => {

        e.preventDefault();

        const newTransaction = {
            id: new Date.getTime(),
            description,
            transactionAmount: +transactionAmount
        }

        AddTransaction(newTransaction);
    }

    return(
        <div>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input 
                        type="text" 
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Detail of Transaction"                     />
                </div>
                <div className="form-control">
                    <label htmlFor="transactionamount">
                        Transaction Amount
                    </label>
                    <input 
                        type="number" 
                        id="tran_amount"
                        value={transactionAmount}
                        onChange={(e) => setTransactionAmount(e.target.value)}
                        placeholder="Dollar Value of Transaction" 
                    />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>        
    )
}