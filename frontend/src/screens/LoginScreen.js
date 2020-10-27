import React, { useState ,useEffect } from 'react'
import { Link} from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
// deals with our redux state
import { useDispatch, useSelector } from "react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { login } from '../actions/userAction'

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = userState('');


    return (
        <div>

        </div>
    )
};

export default LoginScreen