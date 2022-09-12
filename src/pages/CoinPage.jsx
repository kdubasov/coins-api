import React from 'react';
import {useLastWordPath} from "../functions/useLastWordPath";

const CoinPage = () => {

    const coindId = useLastWordPath()

    return (
        <div className={`CoinPage`}>
            <h3 className={'m-3'}>{coindId}</h3>
        </div>
    );
};

export default CoinPage;