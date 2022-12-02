import React from 'react';
import {Alert} from "react-bootstrap";
import {getTheme} from "../../../functions/Theme/getTheme";

//css
import "./SpinnerAlert.css";

const SpinnerAlert = () => {
    return (
        <Alert className={`SpinnerAlert ${getTheme(true)}`}>

            <div className="spinner-square">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

        </Alert>
    );
};

export default SpinnerAlert;
