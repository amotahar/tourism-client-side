import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Header.css';
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header">
            <Container>
                <Navbar variant="dark" collapseOnSelect expand="lg" sticky="top">
                    <Container>
                        <Navbar.Brand as={Link} to="/home">Travel World</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/services">Services</Nav.Link>
                            {user?.email ?
                                <Nav.Link as={Link} to="/my-orders">My Order</Nav.Link> : ''
                            }
                            {user?.email ?
                                <Nav.Link as={Link} to="/all-orders">All Oder Management</Nav.Link> : ''
                            }
                            {user?.email ?
                                <Nav.Link as={Link} to="/add-service">Add New Service</Nav.Link> : ''
                            }

                            {user?.email ?
                                <Button onClick={logOut} variant="light me-2">Logout</Button> :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                            <Navbar.Text>
                                Signed in as: <a href="#login">{user?.displayName}</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </div>
    );
};

export default Header;