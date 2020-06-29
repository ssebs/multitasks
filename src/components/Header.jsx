import React from "react";

import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
    return (
        <Navbar variant="dark" bg="primary" expand="md">
            <Navbar.Brand href="/">Multi-Tasks</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
                id="basic-navbar-nav"
                className="d-flex justify-content-end"
            >
                <Nav>
                    <LinkContainer to="/edit">
                        <Nav.Link>Edit Users</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
