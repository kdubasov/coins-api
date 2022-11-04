import React from 'react';
import {useApi} from "../../hooks/useApi";
import {GLOBAL_API_PING} from "../../constants/ApiCommand";
import {Alert} from "react-bootstrap";

const CheckConnectApi = () => {

    const checkConnectAPI = useApi(GLOBAL_API_PING);
    // console.log(checkConnectAPI,'checkConnectAPI');

    if (checkConnectAPI.error || !Object.values(checkConnectAPI.data)) {
        return (
            <Alert variant={'danger'} className={"w-75 mx-auto p-2 small"}>
                Нет соединения с сервером, посестите нас позже.
            </Alert>
        );
    }
};

export default CheckConnectApi;
