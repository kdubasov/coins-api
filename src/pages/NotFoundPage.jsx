import React from 'react';
import {Badge} from "react-bootstrap";

const NotFoundPage = () => {
    return (
        <div className={"NotFoundPage d-flex justify-content-center"}>
            <h1 className={"mt-5"}><Badge bg={"danger"}>404</Badge></h1>
        </div>
    );
};

export default NotFoundPage;
