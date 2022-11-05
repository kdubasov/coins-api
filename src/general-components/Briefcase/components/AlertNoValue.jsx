import React from 'react';
import {Link} from "react-router-dom";
import {Alert, Spinner} from "react-bootstrap";

const AlertNoValue = ({value}) => {
    return (
        <Alert className={"d-flex w-100 p-2 justify-content-between align-items-center small"}>
            <span>
                Вы пока не добавили ни одной {value} в избранное.
                Для добавления {value} вы можете
                вернуться <Link to={'/'}>на главную</Link> и выбрать нужную вам категорию.
            </span>
            <Spinner animation={"border"} size={"sm"} variant={"primary"} />
        </Alert>
    );
};

export default AlertNoValue;
