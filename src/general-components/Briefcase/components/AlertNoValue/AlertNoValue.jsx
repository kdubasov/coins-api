import React from 'react';
import {Alert} from "react-bootstrap";
import {getLang} from "../../../../functions/Lang/getLang";

//css
import "./AlertNoValue.css";

const AlertNoValue = ({value}) => {

    return (
        <Alert className={"AlertNoValue small"}>
            <span>
                {
                    getLang() === "eng" ?
                        `You have not added any ${value} to your favorites yet.`:
                        `Вы пока не добавили ни одной ${value} в избранное.`
                }
            </span>
        </Alert>
    );
};

export default AlertNoValue;
