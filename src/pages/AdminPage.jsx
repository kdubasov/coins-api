import React from 'react';
import {Badge} from "react-bootstrap";
import {Navigate} from "react-router-dom";
import {useUserAuth} from "../contexts/UserAuthContext";
import FeedbackTable from "../components/AdminPage/FeedbackMessages/FeedbackTable";
import SpinnerAlert from "../general-components/Alerts/SpinnerAlert/SpinnerAlert";

const AdminPage = ({setShowAlert}) => {

    const { user } = useUserAuth();

    if (user && (user.phoneNumber || user.email)){
        if (user.phoneNumber === "+79040574145" || user.email === "cergocergo41@gmail.com") {
            return (
                <div className={"AdminPage container py-3"}>
                    <h4><Badge>Страница администратора</Badge></h4>

                    <FeedbackTable setShowAlert={setShowAlert} />
                </div>
            );
        }
        return <Navigate to="/notFoundPage" />;
    }
    return <SpinnerAlert />;
};

export default AdminPage;
