import React from 'react'
import { Navbar, Nav , Container} from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            {/*Add the variant dark or else it will be dark bg with dark text*/}
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                <Navbar.Brand href="/">ProShop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/cart"><i className='fas fa-shopping-cart'></i> Cart </Nav.Link>
                        <Nav.Link href="/login"><i className='fas fa-user'></i> Sign in</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

// export as default means when we import on App.js we dont need to wrap in curly brackets ie: import {Header} is now import Header
export default Header