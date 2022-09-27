import React from 'react';
import {useLastWordPath} from "../functions/useLastWordPath";
import {useApi} from "../functions/useApi";
import MainData from "../components/NftPage/MainData";
import {Spinner} from "react-bootstrap";

const NftPage = () => {

    //nft id from path
    const nftId = useLastWordPath()

    //data for nft
    const data = useApi(`/nfts/${nftId}`).data;
    console.log(data,`NFT ID:${nftId}`)

    return (
        <div className={`NftPage container pt-3`}>
            {
                Object.values(data).length?
                    <MainData dataMain={data} /> :
                    <Spinner animation={"border"} />
            }
        </div>
    );
};

export default NftPage;