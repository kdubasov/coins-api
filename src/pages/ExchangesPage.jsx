import React from 'react';
import {useLastWordPath} from "../functions/useLastWordPath";
import MainData from "../components/ExchangesPage/MainData";
import ExchangesCoins from "../components/ExchangesPage/components/ExchangesCoins/ExchangesCoins";
import {useApi} from "../functions/useApi";
import {GLOBAL_API_EXCHANGES_ID_DATA} from "../constants/ApiCommand";
import {Spinner} from "react-bootstrap";

const ExchangesPage = () => {

    const exchangeId = useLastWordPath()

    //data on element mainData
    const mainData = useApi(GLOBAL_API_EXCHANGES_ID_DATA(exchangeId)).data;
    // console.log(mainData,'GLOBAL_API_EXCHANGES_ID_DATA');

    return (
        <div className={`ExchangesPage container py-5`}>
            {
                Object.values(mainData).length?
                    <>
                        <MainData data={mainData} />
                        <ExchangesCoins id={exchangeId} mainData={mainData} />
                    </>:
                    <Spinner animation={"border"} variant={"primary"} />
            }
        </div>
    );
};

export default ExchangesPage;