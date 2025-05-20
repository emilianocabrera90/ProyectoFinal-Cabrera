import React from 'react'
import { useCart } from '../../context/CartContext'

const CartItem = ({ item }) => {
  const { removeItem } = useCart()

  return (
    <div style={{ borderBottom: '1px solid #ccc', marginBottom: '10px', paddingBottom: '10px' }}>
      <h4>{item.name}</h4>
      <p>Cantidad: {item.quantity}</p>
      <p>Precio unitario: ${item.price}</p>
      <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
      <button onClick={() => removeItem(item.id)}>Eliminar</button>
    </div>
  )
}

export default CartItem
