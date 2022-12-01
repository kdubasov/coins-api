import React from 'react';
import {useApi} from "../../../../hooks/useApi";
import {GLOBAL_API_DEFI} from "../../../../constants/ApiCommand";
import {
    GL_DEFI_DOM,
    GL_DEFI_ETH_MK, GL_DEFI_ETH_RAT, GL_DEFI_MK,
    GL_DEFI_TOP_COIN_DOM,
    GL_DEFI_TOP_COIN_NAME, GL_DEFI_TR_24H
} from "../../../../constants/ApiConstants";
import {getNumRedAfterDoot} from "../../../../functions/getNumRedAfterDoot";
import SpinnerAlert from "../../../../general-components/Alerts/SpinnerAlert";
import {getTheme} from "../../../../functions/Theme/getTheme";


const DeFiMainData = () => {

    const data = useApi(GLOBAL_API_DEFI).data.data;
    // console.log(data,'DeFi data');

    const getListItem = (text,apiConst,redact,sign) =>{
        if (data[apiConst]){
            return(
                <div className={"inner"}>
                    <h4 className={`m-0`}>
                        {
                            data[apiConst] &&
                            redact?
                                Number(getNumRedAfterDoot(data[apiConst],3)).toLocaleString() + (sign && sign):
                                data[apiConst].toLocaleString()
                        }
                    </h4>
                    <p>{text}</p>
                </div>
            )
        }else {
            return false;
        }
    }

    return (
        <div className={`DeFiMainData ${getTheme(true)}`}>
            {
                data ?
                <>
                    {getListItem('Defi Dominance (vs. Global)',GL_DEFI_DOM,true,'%')}
                    {getListItem('Market capitalization of ETH',GL_DEFI_ETH_MK,true,'$')}
                    {getListItem('DeFi Market capitalization',GL_DEFI_MK,true,'$')}

                    <div className={'inner'}>
                        <h4 className={'m-0'}>
                            {data[GL_DEFI_TOP_COIN_NAME]} :
                            {' ' + getNumRedAfterDoot(data[GL_DEFI_TOP_COIN_DOM],3) + '%'}
                        </h4>
                        <p>Domination</p>
                    </div>

                    {getListItem('DeFi/ETH Ratio',GL_DEFI_ETH_RAT,true,'%')}
                    {getListItem('Trading volume for 24 hours',GL_DEFI_TR_24H,true,'$')}
                </>:
                <SpinnerAlert />
            }
        </div>
    );
};

export default DeFiMainData;
