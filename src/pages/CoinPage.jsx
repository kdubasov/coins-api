import React from 'react';
import {useLastWordPath} from "../hooks/useLastWordPath";
import {useApi} from "../hooks/useApi";
import {GLOBAL_API_COIN_ONE_MAIN} from "../constants/ApiCommand";
import MainData from "../components/CoinPage/MainData";
import {Spinner} from "react-bootstrap";

const CoinPage = () => {

    //coin id from path
    const coindId = useLastWordPath();

    //main data od coin
    const dataMain = useApi(GLOBAL_API_COIN_ONE_MAIN(coindId)).data;

    return (
        <div className={`CoinPage container pt-3 pb-3`}>

            {
                Object.values(dataMain).length?
                    <MainData dataMain={dataMain} /> :
                    <Spinner animation={"border"} variant={"primary"} />
            }

        </div>
    );
};

export default CoinPage;