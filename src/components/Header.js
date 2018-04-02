import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { AUTH_TOKEN } from '../constants'

const Header = ({ history }) => {
  const authToken = localStorage.getItem(AUTH_TOKEN)
  return (
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
      <div style={{ display: 'flex' }}>
        {authToken && <Link to="/new">Create Poll</Link>}
        <div style={{ marginLeft: '10px' }}>
          {authToken ? (
            <span
              style={{ cursor: 'pointer' }}
              onClick={() => {
                localStorage.removeItem(AUTH_TOKEN)
                history.push('/')
              }}
            >
              Logout
            </span>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  history: PropTypes.object.isRequired
}

export default withRouter(Header)
