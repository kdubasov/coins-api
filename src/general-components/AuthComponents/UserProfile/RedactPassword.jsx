import React from 'react';
import {useGetUserData} from "../../../hooks/useGetUserData";
import {Badge} from "react-bootstrap";

const RedactPassword = ({user}) => {

    const userData = useGetUserData(user.uid);
    console.log(userData)

    return (
        <div className={'RedactPassword'}>
            <Badge>Добавьте пароль чтобы авторизоваться</Badge>
        </div>
    );
};

export default RedactPassword;
