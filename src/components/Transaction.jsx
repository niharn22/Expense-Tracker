import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState'

export const Transaction = (props) => {
  const sign = props.transactions.amount<0 ? '-' : '+'
  const {deleteTransaction} = useContext(GlobalContext)
  return (
    <div>
        <li className={props.transactions.amount<0 ? 'minus' : 'plus'}>
            {props.transactions.text} <span>{sign}${Math.abs(props.transactions.amount)}</span>
            <button onClick={() => deleteTransaction(props.transactions.id)} className='delete-btn'>x</button>
        </li>
    </div>
  )
}

// export default Transaction
