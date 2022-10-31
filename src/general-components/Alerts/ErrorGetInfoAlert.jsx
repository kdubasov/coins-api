import React from 'react';
import {Alert} from "react-bootstrap";
import {Link} from "react-router-dom";

const ErrorGetInfoAlert = ({data}) => {

    //проверяет ошибки при запросе если они есть выводит ошибку в алерте
    if (data.error)
        return (
            <Alert variant={"danger"}>
                Ошибка заргузки информации, пожалуйста, попробуйте позже
                или обратитесь в тех. поддержку. <br />
                <Link to={'/'}>Вернуться назад</Link>
            </Alert>
        )
};

export default ErrorGetInfoAlert;
