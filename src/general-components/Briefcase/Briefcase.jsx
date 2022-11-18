import React, {useState} from 'react';
import {Badge, Button, Form} from "react-bootstrap";
import SavedCoinsTable from "./components/SavedCoins/SavedCoinsTable";
import MessageAlert from "../Alerts/MessageAlert";
import SavedNftsTable from "./components/SavedNfts/SavedNftsTable";
import SavedExchangesTable from "./components/SavedExchanges/SavedExchangesTable";
import {useUserAuth} from "../../contexts/UserAuthContext";
import {deleteAllBriefcase} from "../../functions/BriefcaseDB/deleteAllBriefcase";
import GeneralInfo from "../GeneralInfo/GeneralInfo";
import {getLang} from "../../functions/Lang/getLang";

const Briefcase = () => {

    const { user } = useUserAuth();

    //for show or hide general info block
    const [hide,setHide] = useState(false);

    //для отображения определенной таблицы
    const [selectValue,setSelectValue] = useState("coins");

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

    //для показа кнопки выбора таблицы
    const getButtonSelect = (text,value,margin = false) => {
        return (
            <Button
                size={"sm"}
                className={margin && "mx-2"}
                onClick={() => setSelectValue(value)}
                variant={"outline-primary"}
                disabled={selectValue === value}
            >
                {text}
            </Button>
        )
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

            <div className="buttons-container my-3">
                {getButtonSelect((getLang() === "eng" ? "Coins" : "Монеты"),"coins",false)}
                {getButtonSelect("NFT","nft",true)}
                {getButtonSelect((getLang() === "eng" ? "Exchanges" : "Биржи"),"exchanges",false)}
            </div>

            {/*tables*/}
            {selectValue === "coins" && <SavedCoinsTable setShowAlert={setShowAlert} />}
            {selectValue === "nft" && <SavedNftsTable setShowAlert={setShowAlert} />}
            {selectValue === "exchanges" && <SavedExchangesTable setShowAlert={setShowAlert} />}

            <div className="mt-5 d-flex align-items-center">
                {getBadge(getLang() === "eng" ? "Basic information" : "Основная информация")}

                <Form.Check
                    className={"mx-2"}
                    type="switch"
                    label={getLang() === "eng" ? "Hide this block" : "Скрыть этот блок"}
                    checked={hide}
                    onChange={() => setHide(!hide)}
                />
            </div>
            {
                !hide &&
                <GeneralInfo />
            }
        </div>
    );
};

export default Briefcase;
