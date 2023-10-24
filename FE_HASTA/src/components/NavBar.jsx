import { NavLink, useNavigate } from "react-router-dom";
import { logo } from "../assets";
import { useState } from "react";

const NavBar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(1);
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand" onClick={() => setActive(1)}>
          <img src={logo} alt="logo" style={{ width: "250px" }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <NavLink
                className={
                  active === 1 ? "nav-link text-success fw-bold" : "nav-link "
                }
                aria-current="page"
                to={"/"}
                onClick={() => setActive(1)}
              >
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={
                  active === 2 ? "nav-link text-success fw-bold" : "nav-link "
                }
                aria-current="page"
                to={"/about"}
                onClick={() => setActive(2)}
              >
                About
              </NavLink>
            </li>
          </ul>
          <form className="d-flex gap-3" role="search">
            <button
              className="btn  btn-outline-success"
              type="button"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
            <button
              className="btn btn-success px-4"
              type="button"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
