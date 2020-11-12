import React from 'react'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
// whenever you bring something in from the state it's useSelector
// if you want to call an action it's useDispatch
import { useDispatch, useSelector} from 'react-redux'
// LinkContainer does the same thing as link
import { LinkContainer } from 'react-router-bootstrap'
import {logout} from '../actions/userAction'


const Header = () => {

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const logoutHandler = () => {
        dispatch(logout())
    };

    return (
        <header>
            {/*Add the variant dark or else it will be dark bg with dark text*/}
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>ProShop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to='/cart'>
                                <Nav.Link>
                                    <i className='fas fa-shopping-cart'> </i> Cart
                                </Nav.Link>
                            </LinkContainer>
                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id={'username'}>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            ) : <LinkContainer to='/login'>
                                    <Nav.Link><i className='fas fa-user'> </i> Sign in
                                    </Nav.Link>
                                </LinkContainer>
                            }

                            {!userInfo && (
                                <LinkContainer to='/Register'>
                                    <Nav.Link><i className='fas fa-user'> </i> Register
                                    </Nav.Link>
                                </LinkContainer>)
                            }

                            {userInfo && userInfo.isAdmin && (
                                <NavDropdown title='Admin' id='adminmenu'>
                                    <LinkContainer to='/admin/userlist'>
                                        <NavDropdown.Item>Users</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/admin/productlist'>
                                        <NavDropdown.Item>Products</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/admin/orderlist'>
                                        <NavDropdown.Item>Orders</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                            )}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
};

// export as default means when we import on App.js we dont need to wrap in curly brackets ie: import {Header} is now import Header
export default Header