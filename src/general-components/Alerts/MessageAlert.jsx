import React from 'react';
import {Alert} from "react-bootstrap";

const MessageAlert = ({text,variant}) => {

    return (
        <Alert style={{position:'fixed',left:15,bottom:0,zIndex:100}} variant={variant}>
            {text}
        </Alert>
    );
};

export default MessageAlert;
