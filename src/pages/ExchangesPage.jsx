import React from 'react';
import {useLastWordPath} from "../hooks/useLastWordPath";
import MainData from "../components/ExchangesPage/MainData";
import ExchangesTickers from "../components/ExchangesPage/components/ExchangesTickers/ExchangesTickers";
import {useApi} from "../hooks/useApi";
import {GLOBAL_API_EXCHANGES_ID_DATA} from "../constants/ApiCommand";
import ExchangesGraph from "../components/ExchangesPage/components/ExchangesGraph/ExchangesGraph";
import SpinnerAlert from "../general-components/Alerts/SpinnerAlert/SpinnerAlert";

const ExchangesPage = ({setShowAlert}) => {

    const exchangeId = useLastWordPath();

    //data on element mainData
    const mainData = useApi(GLOBAL_API_EXCHANGES_ID_DATA(exchangeId)).data;
    // console.log(mainData,'GLOBAL_API_EXCHANGES_ID_DATA');

    return (
        <div className={`ExchangesPage container py-5`}>
            {
                Object.values(mainData).length?
                    <>
                        <MainData id={exchangeId} data={mainData} setShowAlert={setShowAlert} />
                        <ExchangesGraph id={exchangeId} />
                        <ExchangesTickers id={exchangeId} mainData={mainData} />
                    </>:
                    <SpinnerAlert />
            }
        </div>
    );
};

export default ExchangesPage;
