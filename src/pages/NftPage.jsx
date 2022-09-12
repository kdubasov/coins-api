import React from 'react';
import {useLastWordPath} from "../functions/useLastWordPath";

const NftPage = () => {

    const nftId = useLastWordPath()

    return (
        <div className={`NftPage`}>
            <h3 className={'m-3'}>{nftId}</h3>
        </div>
    );
};

export default NftPage;