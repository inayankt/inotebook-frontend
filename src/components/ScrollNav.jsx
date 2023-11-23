import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../contexts/User";
import { LoaderContext } from "../contexts/Loader";

function ScrollNav({ visible }) {
  const location = useLocation();
  const user = useContext(UserContext);
  const loader = useContext(LoaderContext);
  const handleSignOut = (e) => {
    loader.setProgress(10);
    localStorage.removeItem("user");
    loader.setProgress(60);
    user.setToken("");
    loader.setProgress(100);
  };
  return (
    <header className="container p-3 mb-3 border-bottom" style={{background: "white", borderRadius: "10px", boxShadow: "0 5px 15px 0 rgb(215, 215, 215)", position: "fixed", top: "10px", zIndex: "1000", transform: visible ? "none" : "translateY(-200px)", transition: "all 400ms ease-in"}}>
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none" style={{fontSize: "1.5rem"}}>
            iNoteBook
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><Link to="/" className={`nav-link px-2 ${location.pathname === "/" ? "link-secondary" : "link-body-emphasis"}`}>Home</Link></li>
            <li><Link to="/about" className={`nav-link px-2 ${location.pathname === "/about" ? "link-secondary" : "link-body-emphasis"}`}>About</Link></li>
          </ul>

          <div className="dropdown text-end">
            <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fa-solid fa-user" style={{fontSize: "1.25rem", color: "#0D6EFD", color: "black"}}></i>
            </a>
            <ul className="dropdown-menu text-small">
              <li><Link className="dropdown-item" to="/profile">Hi, {user.details.name}!</Link></li>
              <li><hr className="dropdown-divider" /></li>
              <li><button className="dropdown-item" onClick={handleSignOut}>Sign out</button></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default ScrollNav;