import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';

const Transaction = ({list}) => {
    const {deleteTransaction}=useContext(GlobalContext);
    const sign=list.amount<0?"-":"+";
  return (
    <li className={list.amount>0?'plus':'minus'} >
    {list.text} <span className='list'>{sign}${Math.abs(list.amount)}</span><button onClick={()=>deleteTransaction(list.id)} className="delete-btn">x</button>
  </li>
  )
}

export default Transaction