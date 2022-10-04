import React from 'react';
import {useApi} from "../../../../functions/useApi";
import {GLOBAL_API_EXCHANGES_ID_TICKERS} from "../../../../constants/ApiCommand";
import {GL_TICKERS} from "../../../../constants/ApiConstants";

const ExchangesCoins = ({id,mainData}) => {

    const dataFromApi = useApi(GLOBAL_API_EXCHANGES_ID_TICKERS(id))['data'][GL_TICKERS];
    // console.log(dataFromApi,'GLOBAL_API_EXCHANGES_ID_TICKERS')

    const tickersMainData = mainData[GL_TICKERS];
    // console.log(tickersMainData,'tickersMainData exch')

    //eslint-disable-next-line
    const showData = dataFromApi || tickersMainData;

    return (
        <div className={`ExchangesCoins`}>
            <h5>Таблица с тикерс (доделать) <strong>ExchangesCoins</strong></h5>
        </div>
    );
};

export default ExchangesCoins;
