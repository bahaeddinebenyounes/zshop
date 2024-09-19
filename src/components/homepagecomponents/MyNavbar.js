import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineShop } from 'react-icons/ai';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { RiAccountCircleLine } from "react-icons/ri";
import { PiShoppingCartSimpleBold } from "react-icons/pi";





export class MyNavbar extends Component {
  render() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
        <a href='home' style={{textDecoration: 'none'}}>
          <AiOutlineShop  style={{ fontSize: '2rem', marginRight: '10px',color:'#008080' }} />

          <Navbar.Brand >Z-Market</Navbar.Brand>
          </a>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Fashion</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Electronics</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">gaming</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">phones and tablets</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">home</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">health</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.7">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              
            </Nav>
          </Navbar.Collapse>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{ width: '600px',marginLeft: '80px' }}
            />
            <Button style={{background:'#008080',marginRight:'30px'}} >Search</Button>
          </Form>
          <a href='log in'style={{ textDecoration: 'none'}}>
          <RiAccountCircleLine style={{ fontSize: '2rem', marginRight: '10px',color:'#008080', }}/>
          <Navbar.Brand>Log in</Navbar.Brand>
          </a>
          <a href='panier' style={{textDecoration: 'none'}}>
          <PiShoppingCartSimpleBold  style={{ fontSize: '2rem', marginRight: '10px',color:'#008080',marginLeft:'30px' }}/>
          <Navbar.Brand >Panier</Navbar.Brand>
          </a>
        </Container>

      </Navbar>
    );
  }
}

export default MyNavbar;
