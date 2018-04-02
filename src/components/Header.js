import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '80px',
      padding: '0 2rem',
      background: '#2573CC',
      color: 'white'
    }}
  >
    <Link to="/">
      <h2>Polling App 📊</h2>
    </Link>
    <div>
      <Link to="/new">Create Poll</Link> / <Link to="/login">Login</Link>
    </div>
  </div>
)

export default Header
