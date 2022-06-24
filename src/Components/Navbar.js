import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <Link to="/" style={{marginLeft:5}}>Home</Link>
        <Link to="/signup" style={{marginLeft:5}}>Signup</Link>
        <Link to="/login" style={{marginLeft:5}}>Login</Link>
        <Link to="/about" style={{marginLeft:5}}>About</Link>


    </div>
  )
}

export default Navbar