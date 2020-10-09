import React from 'react'
//row and column to use bootstrap grid
import { Container, Row, Col} from "react-bootstrap";

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className='text-center py-3' >
                        Copyright &copy; Proshop
                    </Col>
                </Row>

            </Container>
        </footer>
    )
}

// export as default means when we import on App.js we dont need to wrap in curly brackets ie: import {Header} is now import Header
export default Footer