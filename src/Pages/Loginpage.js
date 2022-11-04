import React from 'react'
import { useRef } from 'react'
import { Navigate } from 'react-router-dom'
import useAuthStore from '../Components/AuthV2'


function LPage() {
  const email = useRef()
  const password = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = {
      email: email.current.value,
      password: password.current.value,
    }


    useAuthStore.setState({ user })
    useAuthStore.setState({ isLoggedIn: true })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="email">Email</label>
          <input ref={email} type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input ref={password} type="password" name="password" id="password" />
        </div>
        <div>
          <input type="submit" value="Login" />
        </div>

      </form>


    </div>


  )
}

function Loginpage() {
  const isLoggedIn = useAuthStore(state => state.isLoggedIn)

  return (
    <>
      {isLoggedIn ? 
      (
        <Navigate to='/' />
      ) : 
      (

        <LPage />
      )}
    </>



  )
}

export default Loginpage