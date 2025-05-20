import { useCart } from '../../context/CartContext'
import './Cart.css'

const Cart = () => {
  const { cart, removeOneFromCart, clearCart } = useCart()

  if (cart.length === 0) {
    return <p>El carrito está vacío</p>
  }

  return (
    <div className="container">
      {cart.map(({ product, quantity }) => (
        <div key={product.id} className="cart-item">
          <img src={product.image} alt={product.name} />
          <div>
            <h4>{product.name}</h4>
            <p>Cantidad: {quantity}</p>
            <p>Precio unitario: ${product.price}</p>
            <p>Subtotal: ${product.price * quantity}</p>
            <button onClick={() => removeOneFromCart(product.id)}>Eliminar una unidad</button>
          </div>
        </div>
      ))}
      <button onClick={clearCart} className="btn-clear-cart">
        Vaciar carrito
      </button>
    </div>
  )
}

export default Cart




