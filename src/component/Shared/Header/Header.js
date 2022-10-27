import React from 'react';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../img/icoms_logo_blue.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import { Button } from 'react-bootstrap';
import { FaUser } from "react-icons/fa";
import Toggle from '../../Toggle/Toggle';

const Header = () => {
    const { logOut, user } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then(() => {

            })
            .catch(() => {

            })
    }

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
                    <Nav className='h-link me-4'>
                        <Toggle></Toggle>
                    </Nav>
                    <Nav className='h-link me-4'>
                        {
                            user?.uid ? <>


                                <Button variant="outline-primary" onClick={handleSignOut}>Logout</Button>
                            </> :
                                <>
                                    <Link to='/login'>Login</Link>
                                    <Link to='/signup'>Register</Link>
                                </>
                        }
                    </Nav>

                    {
                        user && <Nav className='h-link'>
                            {
                                user?.photoURL ? <img style={{ height: '40px', borderRadius: '100%', width: '40px' }} src={user?.photoURL} alt='' title={user.displayName} /> : <FaUser></FaUser>
                            }
                        </Nav>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;