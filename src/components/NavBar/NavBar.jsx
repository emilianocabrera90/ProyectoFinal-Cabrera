import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px', backgroundColor: '#eee' }}>
      <div>
        <Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold', fontSize: '24px' }}>
          Mi E-commerce
        </Link>
      </div>
      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        <NavLink to="/" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
          Catálogo
        </NavLink>
        <NavLink to="/cart" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
          Carrito
        </NavLink>
        <CartWidget />
      </div>
    </nav>
  )
}

export default NavBar
