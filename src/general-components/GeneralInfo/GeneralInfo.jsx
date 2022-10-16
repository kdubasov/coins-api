import React from 'react';
import {useApi} from "../../hooks/useApi";
import {GLOBAL_API_GLOBAL_COMMAND} from "../../constants/ApiCommand";
import {ListGroup, Spinner} from "react-bootstrap";
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
        <div className={'GeneralInfo container mt-3 mb-3'}>
            <ListGroup horizontal>
                <ListGroup.Item>
                    Кол-во монет:
                    <strong> {data?data[GL_ACT_COINS].toLocaleString():SpinnerSmall}шт.</strong>
                </ListGroup.Item>

                <ListGroup.Item>
                    Кол-во бирж:
                    <strong> {data?data[GL_MKTS]:SpinnerSmall} </strong>
                </ListGroup.Item>

                <ListGroup.Item>
                    Изменение рынка за 24ч:
                    <strong> {data?data[GL_CH_ALL_PR].toLocaleString():SpinnerSmall}%</strong>
                </ListGroup.Item>

                <ListGroup.Item>
                    Доминирование
                    <strong> {data?getMainCoin(data[GL_MK_PR],'coin'):SpinnerSmall} </strong>
                    по рыночной капитализации:
                    <strong> {data?getMainCoin(data[GL_MK_PR],'price').toLocaleString():SpinnerSmall}% </strong>
                </ListGroup.Item>

                <ListGroup.Item>
                    Общая рыночная капитализация:
                    <strong> {data?data[GL_TT_MK]['usd'].toLocaleString() + '$':SpinnerSmall} </strong>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default GeneralInfo;