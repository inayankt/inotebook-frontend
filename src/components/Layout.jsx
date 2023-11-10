import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Profile from "./Profile";
import About from "./About";
import { AlertContext } from "../contexts/Alert";

function Layout() {
  const alert = useContext(AlertContext);
  return (
    <div className="container">
      {alert.error && <div className="error-msg">{alert.error}</div>}
      {alert.success && <div className="error-msg success-msg">{alert.success}</div>}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default Layout;