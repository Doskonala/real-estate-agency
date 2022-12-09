import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";

const Menu = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container> 
                <Navbar.Brand href="#home">Агентство з нерухомості "Крилата хата"</Navbar.Brand>
                <Navbar.Toggle />
                <Nav className="me-auto"> 
                    <Nav.Link href="/about">Про нас</Nav.Link> 
                    <Nav.Link href="/basket">Кошик</Nav.Link> 
                    <Nav.Link href="/">Головна</Nav.Link> 
                    
                </Nav> 
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Ви ввійшли як : <a href="#login">Наталія Кашуба</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;