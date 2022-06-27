import React, { useState } from 'react'
import { useAuth } from '../Components/Auth';

function Signuppage() {
  const [username, setusername] = useState()
  const [password, setpassword] = useState()

  const auth = useAuth();

  function handlesignup(e) {
    e.preventDefault()

    auth.SignUp({ username, password })
    
    
  }


  return (
    <>
    <div>Signuppage</div>
    <br />

    <div>

    <form onSubmit={handlesignup} >
        <label>Username:</label>
        <input type="text" name="username" value={username} onChange={(e) => setusername(e.target.value)} />
        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={(e) => setpassword(e.target.value)} />
        <input type="submit" value="Login" />

      </form>
    </div>
    
    
    </>
  )
}

export default Signuppage