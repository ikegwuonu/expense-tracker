import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const IncomeExpenses = () => {
    const {transaction} =useContext(GlobalContext);
    const amounts = transaction.map(transactio => transactio.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  return (
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">-${expense}</p>
        </div>
      </div>
  )
}

export default IncomeExpenses