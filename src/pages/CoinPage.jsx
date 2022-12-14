import React from 'react';
import {useLastWordPath} from "../hooks/useLastWordPath";
import {useApi} from "../hooks/useApi";
import {GLOBAL_API_COIN_ONE_MAIN} from "../constants/ApiCommand";
import MainData from "../components/CoinPage/MainData";
import ErrorGetInfoAlert from "../general-components/Alerts/ErrorGetInfoAlert/ErrorGetInfoAlert";
import SpinnerAlert from "../general-components/Alerts/SpinnerAlert/SpinnerAlert";
import TrendCoins from "../components/MainPage/TrendCoins/TrendCoins";
import SeoCoinPage from "../SEO/SeoCoinPage";

const CoinPage = ({setShowAlert}) => {

    //coin id from path
    const coindId = useLastWordPath();

    //main data od coin
    const dataMain = useApi(GLOBAL_API_COIN_ONE_MAIN(coindId));
    // console.log(dataMain,'CoinPage');

    return (
        <div className={`CoinPage container pt-3 pb-3`}>

            {/*проверяет ошибки запроса*/}
            <ErrorGetInfoAlert data={dataMain} />

            {//SEO
                Boolean(Object.values(dataMain.data).length) &&
                <SeoCoinPage data={dataMain.data} />
            }

            {
                Boolean(Object.values(dataMain.data).length)?
                    <MainData dataMain={dataMain.data} setShowAlert={setShowAlert} /> :
                    <SpinnerAlert />
            }

            <br/><br/><br/>
            <TrendCoins setShowAlert={setShowAlert} showBestCoins={false} />

        </div>
    );
};

export default CoinPage;
