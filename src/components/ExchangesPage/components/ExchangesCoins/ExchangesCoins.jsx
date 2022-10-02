import React from 'react';
import {useApi} from "../../../../functions/useApi";
import {GLOBAL_API_EXCHANGES_ID_TICKERS} from "../../../../constants/ApiCommand";

const ExchangesCoins = ({id}) => {

    const data = useApi(GLOBAL_API_EXCHANGES_ID_TICKERS(id)).data;
    // console.log(data,'GLOBAL_API_EXCHANGES_ID_TICKERS')

    return (
        <div className={`ExchangesCoins`}>
            <h5>Таблица с тикерс (доделать) <strong>ExchangesCoins</strong></h5>
        </div>
    );
};

export default ExchangesCoins;
