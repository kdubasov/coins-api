import React, {useState} from 'react';
import {Button} from "react-bootstrap";
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

    //для отображения определенной таблицы
    const [selectValue,setSelectValue] = useState("coins");

    // for show/hide alert
    const [showAlert, setShowAlert] = useState({show:false,text:'',variant:''})


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
                className={`but-dark ${margin && "mx-2"}`}
                onClick={() => setSelectValue(value)}
                disabled={selectValue === value}
            >
                {text}
            </Button>
        )
    }

    return (
        <div className={'Briefcase container'}>

            <header className={"w-100 d-flex justify-content-between align-items-center"}>
                <h4 className={"mt-4"}>
                    {getLang() === "eng" && "Favorites"}
                    {getLang() === "rus" && "Избранное"}
                </h4>

                <Button size={"sm"} variant={"outline-danger"} onClick={deleteAllFromBriefcase}>
                    {getLang() === "eng" && "Delete all"}
                    {getLang() === "rus" && "Очистить избранное"}
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


            <hr className={"mt-4 mb-3"}/>
            {/*блок с основной информацией о монетах*/}
            <GeneralInfo />
        </div>
    );
};

export default Briefcase;
