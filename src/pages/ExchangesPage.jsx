import React from 'react';
import {useLastWordPath} from "../functions/useLastWordPath";
import MainData from "../components/ExchangesPage/MainData";
import ExchangesCoins from "../components/ExchangesPage/components/ExchangesCoins/ExchangesCoins";

const ExchangesPage = () => {

    const exchangeId = useLastWordPath()

    return (
        <div className={`ExchangesPage container py-5`}>
            <MainData id={exchangeId} />
            <ExchangesCoins id={exchangeId} />
        </div>
    );
};

export default ExchangesPage;