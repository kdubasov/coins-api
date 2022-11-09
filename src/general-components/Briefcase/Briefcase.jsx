import React, {useState} from 'react';
import {Badge, Button, Form} from "react-bootstrap";
import SavedCoinsTable from "./components/SavedCoins/SavedCoinsTable";
import MessageAlert from "../Alerts/MessageAlert";
import SavedNftsTable from "./components/SavedNfts/SavedNftsTable";
import SavedExchangesTable from "./components/SavedExchanges/SavedExchangesTable";
import {useUserAuth} from "../../contexts/UserAuthContext";
import {deleteAllBriefcase} from "../../functions/BriefcaseDB/deleteAllBriefcase";
import GeneralInfo from "../GeneralInfo/GeneralInfo";

const Briefcase = () => {

    const { user } = useUserAuth();

    //for show or hide general info block
    const [hide,setHide] = useState(false);

    // for show/hide alert
    const [showAlert, setShowAlert] = useState({show:false,text:'',variant:''})

    //заголовк таблицы
    const getBadge = text => {
        return (
            <h5><Badge bg={"secondary"} className={"fw-light"}>{text}</Badge></h5>
        )
    }

    //delete all data from user briefcase
    const deleteAllFromBriefcase = () =>{
        deleteAllBriefcase(user?.uid)
            .then(() => setShowAlert({show: true, text: "Избранное успешно очищено.", variant:"primary"}))
            .catch(() => setShowAlert({show:true, text: "Ошибка удаления информации.", variant: "danger"}))
            .finally(() => setTimeout(() => setShowAlert({show:false,text:'',variant:''}),1000 * 5))
        window.location.reload()
    }



    return (
        <div className={'Briefcase container'}>

            <header className={"w-100 d-flex justify-content-between align-items-center"}>
                <h4><Badge>Избранное</Badge></h4>

                <Button size={"sm"} variant={"outline-danger"} onClick={deleteAllFromBriefcase}>
                    Очистить избранное
                </Button>
            </header>

            {/*alert with text*/}
            {showAlert.show && <MessageAlert text={showAlert.text} variant={showAlert.variant} />}

            {getBadge("Монеты")}
            <SavedCoinsTable setShowAlert={setShowAlert} />

            {getBadge("Nft")}
            <SavedNftsTable setShowAlert={setShowAlert} />

            {getBadge("Биржи")}
            <SavedExchangesTable setShowAlert={setShowAlert} />

            <br />
            {getBadge("Основная информация")}
            <Form.Check
                type="switch"
                label="Скрыть этот блок"
                checked={hide}
                onChange={() => setHide(!hide)}
            />
            {
                !hide &&
                <GeneralInfo />
            }
        </div>
    );
};

export default Briefcase;
