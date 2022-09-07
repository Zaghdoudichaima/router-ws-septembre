import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation({ setLogin, login }) {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link as={Link} to='/'>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to='/about'>
            About
          </Nav.Link>
          {/* <Nav.Link as={Link} to='/profile/12455ejejhr/hamza'>
            Profile
          </Nav.Link> */}
          <Nav.Link as={Link} to='/userslist'>
            Users
          </Nav.Link>
        </Nav>
        <Button variant='outline-secondary' onClick={() => setLogin(!login)}>
          {login ? "Logout" : "Login"}
        </Button>
      </Container>
    </Navbar>
  );
}

export default Navigation;
