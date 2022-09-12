import React from 'react';
import {useLastWordPath} from "../functions/useLastWordPath";

const ExchangesPage = () => {

    const exchangeId = useLastWordPath()

    return (
        <div className={`ExchangesPage`}>
            <h3 className={'m-3'}>{exchangeId}</h3>
        </div>
    );
};

export default ExchangesPage;