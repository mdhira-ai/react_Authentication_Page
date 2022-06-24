import React, { useState } from 'react'
import { useAuth } from '../Components/Auth';

function Loginpage() {
  const [username, setusername] = useState()
  const [password, setpassword] = useState()

  const auth = useAuth();

  function handleLogin(e) {
    e.preventDefault()

    auth.login({ username, password })
  }

  return (
    <div>
      <form onSubmit={handleLogin} >
        <label>Username:</label>
        <input type="text" name="username" value={username} onChange={(e) => setusername(e.target.value)} />
        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={(e) => setpassword(e.target.value)} />
        <input type="submit" value="Login" />

      </form>


    </div>
  )
}

export default Loginpage