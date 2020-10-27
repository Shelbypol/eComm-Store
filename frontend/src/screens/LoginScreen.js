import React, { useState ,useEffect } from 'react'
import { Link} from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
// deals with our redux state
import { useDispatch, useSelector } from "react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { login } from '../actions/userAction'
import FormContainer from "../components/FormContainer";

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = userState('');


    return (
        <FormContainer>
            <h1>Sign in</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group constolId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email'
                      placeholder='Enter email'
                                  value={email}
                                  onChange{(e) => setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group constolId='Password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='Password'
                                  placeholder='Enter Password'
                                  value={password}
                                  onChange{(e) => setPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>
            </Form>

            </Form>
        </FormContainer>
    )
};

export default LoginScreen