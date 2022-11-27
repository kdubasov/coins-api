import React from 'react';
import {useLastWordPath} from "../hooks/useLastWordPath";
import {useApi} from "../hooks/useApi";
import MainData from "../components/NftPage/MainData";
import ErrorGetInfoAlert from "../general-components/Alerts/ErrorGetInfoAlert";
import {GLOBAL_API_NFT_ONE} from "../constants/ApiCommand";
import TableBestCoins from "../general-components/TableBestCoins/TableBestCoins";
import SpinnerAlert from "../general-components/Alerts/SpinnerAlert";

const NftPage = ({setShowAlert}) => {

    //nft id from path
    const nftId = useLastWordPath()

    //data for nft
    const data = useApi(GLOBAL_API_NFT_ONE(nftId));
    // console.log(data,`NFT ID DATA:${nftId}`)

    return (
        <div className={`NftPage container pt-3`}>

            {/*проверяет ошибки запроса*/}
            <ErrorGetInfoAlert data={data} />

            {   //show result or wait result
                Object.values(data.data).length?
                    <MainData dataMain={data.data} setShowAlert={setShowAlert} /> :
                    <SpinnerAlert />
            }

            <TableBestCoins setShowAlert={setShowAlert} />
        </div>
    );
};

export default NftPage;