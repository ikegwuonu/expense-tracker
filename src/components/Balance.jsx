import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const Balance = () => {
  const {transaction}=useContext(GlobalContext);
  const amounts = transaction.map(transactions => transactions.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div>
        <h4>your balance</h4>
        <h1 id='balance'>${total}</h1>
    </div>
  )
}

export default Balance