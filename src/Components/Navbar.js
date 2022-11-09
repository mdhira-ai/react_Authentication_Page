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

        <div className="space-y-10 text-xl font-mono text-slate-50 ">

          <Link className=' hover:text-blue-700' to="/login" style={{ marginLeft: 5 }}>Login</Link>
          <span> /</span>
          <Link className=' hover:text-blue-700' to="/signup" style={{ marginLeft: 5 }}>Signup</Link>

        </div>
        </>

      )}


    </div>
  )
}

export default Navbar