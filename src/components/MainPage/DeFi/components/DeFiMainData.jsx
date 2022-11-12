import React from 'react';
import {useApi} from "../../../../hooks/useApi";
import {GLOBAL_API_DEFI} from "../../../../constants/ApiCommand";
import {Badge, ListGroup, Spinner} from "react-bootstrap";
import {
    GL_DEFI_DOM,
    GL_DEFI_ETH_MK, GL_DEFI_ETH_RAT, GL_DEFI_MK,
    GL_DEFI_TOP_COIN_DOM,
    GL_DEFI_TOP_COIN_NAME, GL_DEFI_TR_24H
} from "../../../../constants/ApiConstants";
import {getNumRedAfterDoot} from "../../../../functions/getNumRedAfterDoot";


const DeFiMainData = () => {

    const data = useApi(GLOBAL_API_DEFI).data.data;
    // console.log(data,'DeFi data');

    const getListItem = (text,apiConst,redact,sign) =>{

        return(
            <ListGroup.Item className={'p-3'}>
                <Badge bg={"secondary"}>
                <h6 className={`m-0`}>
                    {
                        data[apiConst] &&
                        redact?
                            getNumRedAfterDoot(data[apiConst],3).toLocaleString() + (sign && sign):
                            data[apiConst].toLocaleString()
                    }
                </h6>
                </Badge>
                <p>{text}</p>
            </ListGroup.Item>
        )
    }

    return (
        <div className={`DeFiMainData`}>
            {
                data ?
                <>
                    <ListGroup horizontal>
                        {getListItem('Defi Dominance (vs. Global)',GL_DEFI_DOM,true,'%')}
                        {getListItem('Market capitalization of ETH',GL_DEFI_ETH_MK,true,'$')}
                        {getListItem('DeFi Market capitalization',GL_DEFI_MK,true,'$')}

                        <ListGroup.Item className={'p-3'}>
                            <Badge bg={"secondary"}>
                                <h6 className={'m-0'}>
                                    {data[GL_DEFI_TOP_COIN_NAME]} :
                                    {' ' + getNumRedAfterDoot(data[GL_DEFI_TOP_COIN_DOM],3) + '%'}
                                </h6>
                            </Badge>
                            Domination
                        </ListGroup.Item>
                    </ListGroup>

                    <ListGroup horizontal>
                        {getListItem('DeFi/ETH Ratio',GL_DEFI_ETH_RAT,true,'%')}
                        {getListItem('Trading volume for 24 hours',GL_DEFI_TR_24H,true,'$')}
                    </ListGroup>
                </>:
                <Spinner animation={"border"} variant={"primary"} />
            }
        </div>
    );
};

export default DeFiMainData;
