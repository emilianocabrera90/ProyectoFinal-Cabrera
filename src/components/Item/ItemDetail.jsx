import React, { useState } from 'react'
import { useCart } from '../../context/CartContext'
import ItemCount from './ItemCount'
import './ItemDetail.css'

const ItemDetail = ({ product }) => {
  const [addedToCart, setAddedToCart] = useState(false)
  const { addToCart } = useCart()

  const handleAdd = (quantity) => {
    addToCart(product, quantity)
    setAddedToCart(true)
  }

  if (!product) return <p>Cargando producto...</p>

  return (
    <div className="item-detail">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <p>Stock disponible: {product.stock}</p>

      {!addedToCart ? (
        <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
      ) : (
        <p>Producto agregado al carrito</p>
      )}
    </div>
  )
}

export default ItemDetail



