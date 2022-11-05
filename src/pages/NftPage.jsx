import React from 'react';
import {useLastWordPath} from "../hooks/useLastWordPath";
import {useApi} from "../hooks/useApi";
import MainData from "../components/NftPage/MainData";
import {Spinner} from "react-bootstrap";
import ErrorGetInfoAlert from "../general-components/Alerts/ErrorGetInfoAlert";
import {GLOBAL_API_NFT_ONE} from "../constants/ApiCommand";

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
                    <Spinner animation={"border"} variant={"primary"} />
            }
        </div>
    );
};

export default NftPage;