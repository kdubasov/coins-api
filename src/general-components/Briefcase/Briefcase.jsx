import React, {useState} from 'react';
import {Badge} from "react-bootstrap";
import SavedCoinsTable from "./components/SavedCoins/SavedCoinsTable";
import MessageAlert from "../Alerts/MessageAlert";

const Briefcase = () => {

    // for show/hide alert
    const [showAlert, setShowAlert] = useState({show:false,text:'',variant:''})

    const getBadge = text => {
        return (
            <h5><Badge bg={"secondary"} className={"fw-light"}>{text}</Badge></h5>
        )
    }

    return (
        <div className={'Briefcase container'}>
            <h3><Badge>Избранное</Badge></h3>

            {/*alert with text*/}
            {showAlert.show && <MessageAlert text={showAlert.text} variant={showAlert.variant} />}

            {getBadge("Монеты")}
            <SavedCoinsTable setShowAlert={setShowAlert} />
        </div>
    );
};

export default Briefcase;
