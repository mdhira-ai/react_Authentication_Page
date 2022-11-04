import React from 'react'
import { useRef } from 'react'
import { Navigate } from 'react-router-dom'
import useAuthStore from '../Components/AuthV2'
import Navbar from '../Components/Navbar'


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
    <div className=" mx-auto flex flex-col space-y-8 bg-blue-500 p-4 h-screen items-center justify-center ">
      <Navbar />
      
      <form onSubmit={handleSubmit} className="shadow-xl rounded-xl bg-blue-400 p-14 flex flex-col space-y-6">

        <div className="item-center">
          <label htmlFor="email" className='mr-11'>Email :</label>
          <input ref={email} className="rounded-md px-2" type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password" className="mr-4">Password :</label>
          <input ref={password} className="rounded-md px-2" type="password" name="password" id="password" />
        </div>
        <div>
          <input className='p-3 min-w-full bg-slate-900 rounded-md text-gray-300 text-sm' type="submit" value="Login" />
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