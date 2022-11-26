import React from 'react';
import {Alert, Spinner} from "react-bootstrap";

const SpinnerAlert = () => {
    return (
        <Alert className={"w-100 p-2 d-flex justify-content-center"}>
            <Spinner animation={"border"} variant={"primary"} size={"sm"} />
        </Alert>
    );
};

export default SpinnerAlert;
