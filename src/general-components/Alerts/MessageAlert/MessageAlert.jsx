import React from 'react';
import {Alert} from "react-bootstrap";

//css
import "./MessageAlert.css";
import {getTheme} from "../../../functions/Theme/getTheme";

const MessageAlert = ({text,variant}) => {

    return (
        <Alert  variant={variant} className={`MessageAlert small ${getTheme(true)}`}>
            {text}
        </Alert>
    );
};

export default MessageAlert;
