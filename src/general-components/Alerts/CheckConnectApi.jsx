import React from 'react';
import {useApi} from "../../hooks/useApi";
import {GLOBAL_API_PING} from "../../constants/ApiCommand";
import {Alert, Container} from "react-bootstrap";
import {getLang} from "../../functions/Lang/getLang";

const CheckConnectApi = () => {

    const checkConnectAPI = useApi(GLOBAL_API_PING);
    // console.log(checkConnectAPI,'checkConnectAPI');

    if (checkConnectAPI.error || !Object.values(checkConnectAPI.data)) {
        return (
            <Container>
                <Alert className={"ErrorGetInfoAlert"}>
                    {getLang() === "rus" && "Нет соединения с сервером, пожалуйста, посестите нас позже."}
                    {getLang() === "eng" && "No connection to the server, please visit us later."}
                </Alert>
            </Container>
        );
    }
};

export default CheckConnectApi;
