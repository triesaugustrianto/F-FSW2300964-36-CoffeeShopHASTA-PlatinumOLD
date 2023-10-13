import { Container, Navbar, Nav, Button } from "react-bootstrap";

const NavBar = () => {
  const handleLogin = () => {
    window.location.href = "/login";
  };

  const handleSignUp = () => {
    window.location.href = "/signup";
  };

  return (
    <Navbar className="navbar">
      <Container>
        <Nav.Brand href="/" className="logo">
          <span>LOGO here</span>
        </Nav.Brand>
        <Nav className="navbar">
          <div className="bar-list">
            <ul>
              <li className="menu">
                <Nav.Link to="/menu">Menu</Nav.Link>
              </li>
              <li className="stores">
                <Nav.Link to="/stores">Stores</Nav.Link>
              </li>
              <li className="about">
                <Nav.Link to="/about">About Us</Nav.Link>
              </li>
            </ul>
          </div>
          <span className="login">
            <Button className="login-btn" onClick={handleLogin}>
              Log In
            </Button>
            <Button className="signup-btn" onClick={handleSignUp}>
              Sign Up
            </Button>
          </span>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
