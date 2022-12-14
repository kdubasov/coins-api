import React from 'react';
import {useLastWordPath} from "../hooks/useLastWordPath";
import {useApi} from "../hooks/useApi";
import {GLOBAL_API_DERIVATIVE_ONE} from "../constants/ApiCommand";
import ExchangesGraph from "../components/ExchangesPage/components/ExchangesGraph/ExchangesGraph";
import MainData from "../components/DerivativePage/MainData";
import DerivativesTickers from "../components/DerivativePage/components/DerivativesTickers/DerivativesTickers";
import {GL_TICKERS} from "../constants/ApiConstants";
import SpinnerAlert from "../general-components/Alerts/SpinnerAlert/SpinnerAlert";

const DerivativePage = () => {

    //Derivative id from path
    const derivativeId = useLastWordPath();

    const mainData = useApi(GLOBAL_API_DERIVATIVE_ONE(derivativeId)).data;
    // console.log(mainData,'DerivativePage');

    return (
        <div className={`Derivative container`}>
            {
                Object.values(mainData).length?
                    <>
                        <MainData data={mainData} />
                        <ExchangesGraph id={derivativeId} />
                        {
                            mainData[GL_TICKERS] &&
                            <DerivativesTickers data={mainData[GL_TICKERS]} />
                        }
                    </>:
                    <SpinnerAlert />
            }
        </div>
    );
};

export default DerivativePage;
