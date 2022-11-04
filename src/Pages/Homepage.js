import React from "react";
import useAuthStore from "../Components/AuthV2";

function Profile() {
  const user = useAuthStore((state) => state.user);

  function logout(){
    useAuthStore.setState({ user: { email: '', password: '' }, isLoggedIn: false })
  }

  return (
    <>
      <div>Homepage</div>
      <div
        style={{
          fontSize: 40,
        }}
      >
        Welcome to 🙋 {user.email}
      </div>
      <div>
        <input type="button" value="Logout" onClick={() => logout()} />
      </div>
    </>
  );
}

function Homepage() {
  return (
    <>
      <Profile />
    </>
  );
}

export default Homepage;
