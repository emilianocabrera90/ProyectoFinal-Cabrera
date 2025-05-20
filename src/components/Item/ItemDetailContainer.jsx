import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    const docRef = doc(db, 'products', id) 

    getDoc(docRef)
      .then(doc => {
        if (doc.exists()) {
          setProduct({ id: doc.id, ...doc.data() })
        } else {
          console.error('No se encontró el producto')
        }
      })
      .catch(error => {
        console.error('Error al cargar el producto:', error)
      })
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <p>Cargando producto...</p>
  if (!product) return <p>Error al cargar el producto</p>

  return <ItemDetail product={product} />
}

export default ItemDetailContainer



