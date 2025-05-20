import React, { useState } from 'react'
import { useCart } from '../../context/CartContext'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'
import { useNavigate } from 'react-router-dom'

const CheckoutForm = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart()
  const navigate = useNavigate()

  const [buyer, setBuyer] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [orderId, setOrderId] = useState(null)

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    if (!buyer.name || !buyer.email || !buyer.phone) {
      setError('Por favor complete todos los campos')
      return
    }

    const order = {
      buyer,
      items: cartItems.map(({ id, name, price, quantity }) => ({
        id,
        name,
        price,
        quantity
      })),
      total: getTotalPrice(),
      createdAt: serverTimestamp()
    }

    setLoading(true)
    try {
      const docRef = await addDoc(collection(db, 'orders'), order)
      setOrderId(docRef.id)
      clearCart()
      
    } catch (err) {
      setError('Error al procesar la orden. Intente nuevamente.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  if (orderId) {
    return (
      <div>
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Checkout</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div>
        <label>Nombre:</label><br />
        <input
          type="text"
          name="name"
          value={buyer.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Email:</label><br />
        <input
          type="email"
          name="email"
          value={buyer.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Teléfono:</label><br />
        <input
          type="tel"
          name="phone"
          value={buyer.phone}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" disabled={loading}>
        {loading ? 'Procesando...' : 'Confirmar Compra'}
      </button>
    </form>
  )
}

export default CheckoutForm

