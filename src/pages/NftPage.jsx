import React from 'react';
import {useLastWordPath} from "../hooks/useLastWordPath";
import {useApi} from "../hooks/useApi";
import MainData from "../components/NftPage/MainData";
import {Alert, Spinner} from "react-bootstrap";
import {Link} from "react-router-dom";

const NftPage = () => {

    //nft id from path
    const nftId = useLastWordPath()

    //data for nft
    const data = useApi(`/nfts/${nftId}`);
    // console.log(data,`NFT ID DATA:${nftId}`)

    return (
        <div className={`NftPage container pt-3`}>
            {   //check error in data
                data.error &&
                <Alert variant={"danger"}>
                    Ошибка получения данных,
                    <Link to={'/'}>вернуться назад</Link>.
                </Alert>
            }
            {   //show result or wait result
                Object.values(data.data).length?
                    <MainData dataMain={data.data} /> :
                    <Spinner animation={"border"} variant={"primary"} />
            }
        </div>
    );
};

export default NftPage;