import React from 'react'
import { Link } from 'react-router-dom'
import useAuthStore from './AuthV2'

function Navbar() {
  const isLoggedIn = useAuthStore(state => state.isLoggedIn)

  return (
    <div className="">


      {isLoggedIn ? (
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