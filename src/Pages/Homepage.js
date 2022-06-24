import React from 'react'
import { useAuth } from '../Components/Auth';

function Homepage() {
  const auth = useAuth();
  return (
    <>

      <div>Homepage</div>
      <div style={{
        fontSize: 40,
      }}>Welcome to 🙋 {auth.user} </div>
      <div>

        <input type="button" value="Logout" onClick={auth.logout} />

      </div>


    </>
  )
}

export default Homepage