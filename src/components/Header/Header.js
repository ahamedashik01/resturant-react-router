import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Link to="/home" className="text-decoration-none"><Navbar.Brand >Virtual-Resturant</Navbar.Brand></Link>
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