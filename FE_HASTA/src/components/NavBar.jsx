import { Link } from "react-router-dom";

const NavBar = () => {
  const handleLogin = () => {
    window.location.href = "/login";
  };

  const handleSignUp = () => {
    window.location.href = "/signup";
  };

  return (
    <nav>
      <Link to="/" className="logo">
        <span>LOGO here</span>
      </Link>
      <div className="navbar">
        <div className="bar-list">
          <ul>
            <li className="menu">
              <Link to="/menu">Menu</Link>
            </li>
            <li className="stores">
              <Link to="/stores">Stores</Link>
            </li>
            <li className="about">
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </div>
        <span className="login">
          <button className="login-btn" onClick={handleLogin}>
            Log In
          </button>
          <button className="signup-btn" onClick={handleSignUp}>
            Sign Up
          </button>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
