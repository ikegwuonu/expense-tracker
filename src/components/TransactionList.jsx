import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import Transaction from './Transaction';


const TransactionList = () => {
    const {transaction}=useContext(GlobalContext);
  return (
    <div>
        <h3>History</h3>
      <ul id="list" className="list">
        {transaction.map((list)=>(
           <Transaction list={list} key={list.id}/>
        ))}
        
      </ul>

    </div>
  )
}

export default TransactionList