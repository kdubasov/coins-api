import React from 'react';
import {useApi} from "../../../functions/useApi";
import {GLOBAL_API_NFTS_LIST_ALL} from "../../../constants/ApiCommand";

const Nft = () => {

    const data = useApi(GLOBAL_API_NFTS_LIST_ALL(50,1)).data;
    console.log(data,'NFTS LIST')

    return (
        <div className={`Nft container`}>
            <h5>Nft</h5>
        </div>
    );
};

export default Nft;
