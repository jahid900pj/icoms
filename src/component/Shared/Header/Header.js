import React from 'react';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../img/icoms_logo_blue.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar className='shadow-lg p-3 mb-5 bg-body' collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand className=' fw-bolder' href="#home">

                    <img style={{ height: '30px', margin: '0px', padding: '0px' }} src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto h-link">
                        <Link to='/'>Home</Link>
                        <Link to='courses'>Courses</Link>
                        <Link to='/faq'>FAQ</Link>
                        <Link to='/blog'>Blog</Link>

                    </Nav>
                    <Nav className='h-link'>
                        <Link to='/login'>Login</Link>
                        <Link to='/signup'>Sign Up</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;