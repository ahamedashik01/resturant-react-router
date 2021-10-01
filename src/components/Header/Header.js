import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to="/home">Virtual-Resturant</Navbar.Brand>
                    <Nav className="ms-auto">
                        <NavLink className="me-3 text-decoration-none text-white" to="/home">Home</NavLink>
                        <NavLink className="me-3 text-decoration-none text-white" to="/resturant">Resturant</NavLink>
                        <NavLink className="me-3 text-decoration-none text-white" to="/about-us">About Us</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;