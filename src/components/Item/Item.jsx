import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import './Item.css'

const Item = ({ product }) => {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product, 1)
    alert('Producto agregado al carrito') 
  }

  return (
    <div className="item-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={handleAddToCart} className="btn-add-to-cart">
        Comprar
      </button>
      <Link to={`/item/${product.id}`} className="btn btn-detail">
        Ver detalle
      </Link>
    </div>
  )
}

export default Item




