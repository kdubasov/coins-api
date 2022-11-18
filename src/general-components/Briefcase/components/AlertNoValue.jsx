import React from 'react';
import {Alert} from "react-bootstrap";
import {getLang} from "../../../functions/Lang/getLang";

const AlertNoValue = ({value}) => {
    return (
        <Alert className={"d-flex w-50 p-2 justify-content-between align-items-center small"}>
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
