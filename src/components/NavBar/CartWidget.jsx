import React from 'react'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const { getItemQuantity } = useCart()
  const quantity = getItemQuantity()

  return (
    <Link to="/cart" style={{ position: 'relative', textDecoration: 'none', color: 'black' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="currentColor"
        className="bi bi-cart"
        viewBox="0 0 16 16"
      >
        <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .485.379L2.89 5H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 14H4a.5.5 0 0 1-.491-.408L1.01 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 4 0H5zm6-8H3.14l1.25 6h7.22l1.125-6z"/>
      </svg>
      {quantity > 0 && (
        <span
          style={{
            position: 'absolute',
            top: '-5px',
            right: '-10px',
            backgroundColor: 'red',
            color: 'white',
            borderRadius: '50%',
            padding: '2px 7px',
            fontSize: '12px',
            fontWeight: 'bold'
          }}
        >
          {quantity}
        </span>
      )}
    </Link>
  )
}

export default CartWidget

