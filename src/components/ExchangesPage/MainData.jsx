import React from 'react';
import {Badge, Button} from "react-bootstrap";
import {
    GL_DESCRIPT, GL_EXC_CENTR, GL_IMAGE, GL_NAME
} from "../../constants/ApiConstants";
import {getTheme} from "../../functions/Theme/getTheme";
import {getLang} from "../../functions/Lang/getLang";
import MainButtons from "../CoinPage/components/MainButtons/MainButtons";
import ExchangesListInfo from "./components/ExchangesListInfo/ExchangesListInfo";

//css
import "./MainDataExchanges.css";
import "./MainDataExchangesMedia.css";

const MainData = ({data,setShowAlert,id}) => {

    const theme = getTheme(true);

    // console.log(data,'MAIN DATA FOR EXCHANGE');

    return (
        <div className={`MainData exchanges ${theme}`}>
            {/*header*/}
            <header>

                <div className="left">
                    <img src={data[GL_IMAGE]} alt={data[GL_NAME]}/>
                    <div className={'d-flex align-items-center flex-wrap'}>
                        <h3 className={'m-0 w-100'}>{data[GL_NAME]}</h3>
                        <Badge bg={theme} className={"px-3 fw-semibold"}>
                            {data[GL_EXC_CENTR]?'Centralized':'Not centralized'}
                        </Badge>
                    </div>
                </div>

                <div className="right">
                    <Button size={"sm"} variant={"primary"}>
                        <a
                            href={data["url"]}
                            className={"text-white text-decoration-none"}
                        >
                            {getLang() === "rus" && "Начать торговать"}
                            {getLang() === "eng" && "Start trading"}
                        </a>
                    </Button>

                    {/*кнопка для добавление в избранное и поделиться*/}
                    <MainButtons
                        coinId={id}
                        setShowAlert={setShowAlert}
                        table={'exchanges'}
                        title={'Биржа'}
                    />
                </div>

            </header>

            {/*description*/}
            {
                data[GL_DESCRIPT] &&
                <p className={'small mt-3 mb-3'}>
                    {data[GL_DESCRIPT]}
                </p>
            }

            <ExchangesListInfo data={data} />

        </div>
    );
};

export default MainData;
