import React from 'react';
import {useApi} from "../../hooks/useApi";
import {GLOBAL_API_GLOBAL_COMMAND} from "../../constants/ApiCommand";
import {Badge, ListGroup, Spinner} from "react-bootstrap";
import {GL_ACT_COINS, GL_CH_ALL_PR, GL_MK_PR, GL_MKTS, GL_TT_MK} from "../../constants/ApiConstants";

const GeneralInfo = () => {

    //data
    const data = useApi(GLOBAL_API_GLOBAL_COMMAND).data.data;
    // console.log(data,"GLOBAL DATA IN GeneralInfo.jsx");

    //SPINNER!!!!!
    const SpinnerSmall = <Spinner animation="border" size="sm" />;

    //для получения объекта с данными о самой популярной монетке
    const getMainCoin = (data,returnValue) =>{
        if (data){
            let maxCoin = [];
            for (let elem in data) {
                if (!maxCoin.length || maxCoin[1]<data[elem]){
                    maxCoin = [elem,data[elem]]
                }
            }
            return returnValue === 'coin'?maxCoin[0]:maxCoin[1]
        }
        return false
    }

    return (
        <div className={'GeneralInfo container mt-3 mb-3 p-0'}>
            {
                data &&
                <ListGroup horizontal>
                    <ListGroup.Item>
                        Кол-во монет:
                        <strong> {data[GL_ACT_COINS] ? data[GL_ACT_COINS].toLocaleString() + 'шт.' : SpinnerSmall}</strong>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        Кол-во бирж:
                        <strong> {data[GL_MKTS] ? data[GL_MKTS] : SpinnerSmall} </strong>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        Изменение рынка за 24ч:
                        {
                            data[GL_CH_ALL_PR] &&
                            <Badge bg={String(data[GL_CH_ALL_PR]).startsWith('-') ? "danger" : "success"}>
                                {String(data[GL_CH_ALL_PR]).startsWith('-') ? '' : '+'}
                                {data[GL_CH_ALL_PR] ? data[GL_CH_ALL_PR].toLocaleString() + '%' : SpinnerSmall}
                            </Badge>
                        }
                    </ListGroup.Item>

                    <ListGroup.Item>
                        {
                            Object.values(data[GL_MK_PR]).length ?
                            <>
                                Доминирование
                                <strong> {getMainCoin(data[GL_MK_PR],'coin')} </strong>
                                по рыночной капитализации:
                                <strong> {getMainCoin(data[GL_MK_PR],'price').toLocaleString() + '%'} </strong>
                            </> : SpinnerSmall
                        }
                    </ListGroup.Item>

                    <ListGroup.Item>
                        Общая рыночная капитализация:
                        <strong> {data[GL_TT_MK]['usd'] ? data[GL_TT_MK]['usd'].toLocaleString() + '$' : SpinnerSmall} </strong>
                    </ListGroup.Item>
                </ListGroup>
            }
        </div>
    );
};

export default GeneralInfo;