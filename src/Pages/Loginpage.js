import React, { useState } from 'react'
import { useRef } from 'react'
import { Navigate } from 'react-router-dom'
import useAuthStore from '../Components/AuthV2'
import Navbar from '../Components/Navbar'
import { btncss, inputcss } from './Signuppage'
import * as yup from 'yup';


function LPage() {
  const [loading, setloading] = useState('')



  const phonenumber = useRef()
  const password = useRef()

  function startloading() {
    setloading('-ml-10 w-5 h-5 mr-6 border-t-transparent border-4 border-blue-200 rounded-full animate-spin')
  }

  function stoploading() {
    setTimeout(() => setloading(' '), 2000)

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    startloading()

    const schema = yup.object({
      phonenumber: yup.number().integer().required(),
      password: yup.string().required()
    })

    schema.validate({
      phonenumber: phonenumber.current.value,
      password: password.current.value,
    }).catch((err) => {
      stoploading()
      alert(err.message)

    }).then((res) => {

      setTimeout(() => setloading(' '), 2000)

      //save user data on database
      useAuthStore.setState({
        user: {
          phonenumber: res.phonenumber,
          password: res.password
        }, isLoggedIn: true
      })

      alert(res.password)

    })





  }

  return (
    <div className='mx-auto space-y-6 bg-blue-500 flex flex-col h-screen justify-center items-center'>
      <Navbar />
      <form onSubmit={handleSubmit} className='flex flex-col bg-blue-400 w-96 p-14 shadow-xl rounded-xl'>
        <div className='flex flex-col space-y-4 '>
          <input placeholder='123-424-2232' ref={phonenumber} className={inputcss} type="tel" name="phone" id="phone" />
          <input placeholder='Password' ref={password} className={inputcss} type="password" name="password" id="password" />
          <button className={btncss} type="submit"   >
            <span className={loading}></span>
            Login
          </button>
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