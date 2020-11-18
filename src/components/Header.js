import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

function Header() {
    return (
        <div>
            <Navbar className="navbarContent py-3" variant="dark" fixed="top" expand="lg">
                <Container>
                    <Navbar.Brand href="/"><i className="far fa-bookmark"></i> Rasp</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/" className="mx-2"><i className="fas fa-home"></i> Home</Nav.Link>
                            <Nav.Link href="/books" className="mx-2"><i className="fas fa-book"></i> Books</Nav.Link>
                            <Nav.Link href="/about" className="mx-2"><i className="fas fa-chalkboard"></i> About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;
