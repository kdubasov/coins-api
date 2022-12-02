import React from 'react';
import {Alert} from "react-bootstrap";
import {getLang} from "../../../functions/Lang/getLang";

//css
import "./ErrorGetInfoAlert.css";

const ErrorGetInfoAlert = ({data}) => {

    //проверяет ошибки при запросе если они есть выводит ошибку в алерте
    if (data.error)
        return (
            <Alert className={"ErrorGetInfoAlert"}>
                {
                    getLang() === "rus" &&
                    "Ошибка заргузки информации, пожалуйста, попробуйте позже " +
                    "или обратитесь в тех. поддержку."
                }
                {
                    getLang() === "eng" &&
                    "Error loading information, please try again later or contact technical support."
                }
            </Alert>
        )
};

export default ErrorGetInfoAlert;
