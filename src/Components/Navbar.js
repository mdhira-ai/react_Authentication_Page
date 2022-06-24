import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from './Auth';
import RequiredAuth from './RequiredAuth'

function Navbar() {
  const auth = useAuth();

  return (
    <div style={{
      fontSize: 20,
      marginBottom: 20,
    }}>


      {auth.isAuthenticated ? (
        <>

          <Link to="/" style={{ marginLeft: 5 }}>Home 🌎</Link>
          <Link to="/about" style={{ marginLeft: 5 }}>About 📢</Link>
        </>

      ) : (
        <>


          <Link to="/login" style={{ marginLeft: 5 }}>Login</Link>
          <Link to="/signup" style={{ marginLeft: 5 }}>Signup</Link>

        </>

      )}


    </div>
  )
}

export default Navbar