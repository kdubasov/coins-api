import React from 'react';
import {useApi} from "../../../../functions/useApi";
import {GLOBAL_API_DEFI} from "../../../../constants/ApiCommand";
import {ListGroup} from "react-bootstrap";
import {
    GL_DEFI_DOM,
    GL_DEFI_ETH_MK, GL_DEFI_ETH_RAT, GL_DEFI_MK,
    GL_DEFI_TOP_COIN_DOM,
    GL_DEFI_TOP_COIN_NAME, GL_DEFI_TR_24H
} from "../../../../constants/ApiConstants";
import {getNumRedAfterDoot} from "../../../../functions/getNumRedAfterDoot";

const DeFiMainData = () => {

    const data = useApi(GLOBAL_API_DEFI).data.data;

    const getListItem = (text,apiConst,redact,sign) =>{
        return(
            <ListGroup.Item className={'p-3'}>
                <h5 className={`m-0`}>
                    {
                        redact?
                            getNumRedAfterDoot(data[apiConst],3) + (sign?sign:''):
                            data[apiConst]
                    }
                </h5>
                {text}
            </ListGroup.Item>
        )
    }

    return (
        <div className={`DeFiMainData`}>
            {
                data &&
                <>
                    <ListGroup horizontal>
                        {getListItem('Доминирование DeFi на глобальном рынке',GL_DEFI_DOM,true,'%')}
                        {getListItem('Рыночная капитализация ETH',GL_DEFI_ETH_MK,true,'$')}
                        {getListItem('Объем торгов за 24 часа',GL_DEFI_MK,true,'$')}

                        <ListGroup.Item className={'p-3'}>
                            <h5 className={'m-0'}>
                                {data[GL_DEFI_TOP_COIN_NAME]} :
                                {' ' + getNumRedAfterDoot(data[GL_DEFI_TOP_COIN_DOM],3) + '%'}
                            </h5>
                            Доминирование
                        </ListGroup.Item>
                    </ListGroup>

                    <ListGroup horizontal>
                        {getListItem('Соотношение DeFi/ETH',GL_DEFI_ETH_RAT,true,'%')}
                        {getListItem('Объем торгов за 24 часа',GL_DEFI_TR_24H,true,'$')}
                    </ListGroup>
                </>
            }
        </div>
    );
};

export default DeFiMainData;
