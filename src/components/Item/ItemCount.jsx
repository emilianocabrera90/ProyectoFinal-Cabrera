import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial)

  const increment = () => {
    if (count < stock) setCount(count + 1)
  }

  const decrement = () => {
    if (count > 1) setCount(count - 1)
  }

  return (
    <div className="item-count">
      <div className="counter">
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
      <button onClick={() => onAdd(count)} className="btn">Agregar al carrito</button>
    </div>
  )
}

export default ItemCount
