import React, { useState } from 'react'
import Navbar from '../Components/Navbar'

export const inputcss = 'outline-none focus:ring-4 focus:ring-blue-500  rounded-md p-2 text-center'
export const btncss = 'flex items-center justify-center  p-3 hover:bg-slate-800 bg-slate-900 rounded-md text-gray-300 text-sm'

function Signuppage() {
  const [loading, setloading] = useState('')


  function startloading() {
    setloading('-ml-10 w-5 h-5 mr-6 border-t-transparent border-4 border-blue-200 rounded-full animate-spin')

    setTimeout(() => setloading(' '), 4000)



  }






  return (
    <div className=' mx-auto space-y-6 bg-blue-500 flex flex-col h-screen justify-center items-center'>
      <Navbar />
      <form className='flex flex-col bg-blue-400 w-96 p-14 shadow-xl rounded-xl'>
        <div className='flex flex-col space-y-4 '>
          <input placeholder='123-424-2232' className={inputcss} type="tel" name="phone" id="phone" />
          <input placeholder='Password' className={inputcss} type="password" name="password" id="password" />
          <button onClick={() => startloading()} className={btncss} type="button"   >
            <span className={loading}></span>
            Signup
          </button>

        </div>
      </form>
    </div>
  )
}

export default Signuppage