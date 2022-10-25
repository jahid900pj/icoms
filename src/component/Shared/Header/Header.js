import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand className='fs-3 fw-bolder' href="#home">Skillshare</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className=' fw-bolder' href="#features">Home</Nav.Link>
                        <Nav.Link className=' fw-bolder' href="#features">Courses</Nav.Link>
                        <Nav.Link className=' fw-bolder' href="#features">FAQ</Nav.Link>
                        <Nav.Link className=' fw-bolder' href="#features">Blog</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className=' fw-bolder' href="#deets">
                            Login
                        </Nav.Link>
                        <Nav.Link className=' fw-bolder' eventKey={2} href="#memes">
                            Sign Up
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;