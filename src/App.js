import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import Loginpage from "./Pages/Loginpage";
import Aboutpage from "./Pages/Aboutpage";
import Signuppage from "./Pages/Signuppage";
import { Auth } from "./Components/Auth";
import RequiredAuth from "./Components/RequiredAuth";

function App() {
  return (
    <>
      <Auth>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Loginpage />} />
          <Route path="/signup" element={<Signuppage />} />

          <Route path="/" element={<RequiredAuth><Homepage /></RequiredAuth>} />
          <Route path="/About" element={<RequiredAuth> <Aboutpage /> </RequiredAuth>} />
          <Route path="/*" element={<div>
            404 Not Found
          </div>} />
        </Routes>
      </Auth>
    </>
  );
}

export default App;
