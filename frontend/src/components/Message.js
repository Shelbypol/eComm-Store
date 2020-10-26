import React from 'react'
import { Alert } from 'react-bootstrap'

//pass in two props variant and children
const Message = ({ variant, children }) => {
    return (
        <Alert variant = { variant }>
            { children }
        </Alert>
    )
};

//default variant prop
Message.defaultProps = {
    variant: 'info'
};

export default Message