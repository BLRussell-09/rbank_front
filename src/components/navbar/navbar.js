import React from 'react';
import {Container, Navbar, NavDropdown } from 'react-bootstrap';
import './navbar.css';

class Navibar extends React.Component
{
  render()
  {
    return(
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <NavDropdown title="Login" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">Member Login</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.1">Employee Login</NavDropdown.Item>
            </NavDropdown>
            <Navbar.Text>
              Signed in as: <a href="#login">Barry Russell</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default Navibar;