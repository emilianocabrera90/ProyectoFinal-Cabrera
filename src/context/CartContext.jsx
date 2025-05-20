import React, { createContext, useState, useContext } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (product, quantity) => {
    setCart(prev => {
      const itemInCart = prev.find(item => item.product.id === product.id)
      if (itemInCart) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      } else {
        return [...prev, { product, quantity }]
      }
    })
  }

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.product.id !== productId))
  }

  const removeOneFromCart = (productId) => {
    setCart(prev => {
      const item = prev.find(item => item.product.id === productId)
      if (!item) return prev

      if (item.quantity === 1) {
        return prev.filter(item => item.product.id !== productId)
      } else {
        return prev.map(item =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      }
    })
  }

  const clearCart = () => {
    setCart([])
  }

  const getItemQuantity = (productId) => {
    const item = cart.find(item => item.product.id === productId)
    return item ? item.quantity : 0
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, getItemQuantity, removeOneFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart debe usarse dentro de un CartProvider')
  }
  return context
}
