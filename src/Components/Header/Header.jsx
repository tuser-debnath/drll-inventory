import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../../assets/logo.jpg";
import "./Header.css";

const Header = () => {
    return (
        <header id="header-area">
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="home"><img src={Logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="order">Create Order</Nav.Link>
                        <NavDropdown title="User Category" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Admin</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Order Manager
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Production</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Delivery</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Button className="navbar-btn" href="login">Login</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;