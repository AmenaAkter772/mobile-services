import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Icon from '../../assests/Photo/icon3.png'

const header = () => {

    const style={
        textDecoration:'none',
        color:'white',
        marginRight:'30px'
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" fixed="top" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img style={{ height:'50px'}} src={Icon} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <ul className="navbar-nav m-auto">
                            <li>
                                <a style={style} href="#home">Home</a>
                            </li>
                            <li>
                                <a style={style} href="#service">Services</a>
                            </li>
                            <li>
                                <a style={style} href="#blog">Blog</a>
                            </li>
                            <li>
                                <a style={style} href="#contact">Contact</a>
                            </li>
                        </ul>
                        <button  className="brand-btn">Get An Appointment</button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default header;