import React from 'react';
import {useApi} from "../../hooks/useApi";
import {GLOBAL_API_GLOBAL_COMMAND} from "../../constants/ApiCommand";
import {Badge, ListGroup, Spinner} from "react-bootstrap";
import {GL_ACT_COINS, GL_CH_ALL_PR, GL_MK_PR, GL_MKTS, GL_TT_MK} from "../../constants/ApiConstants";
import {getLang} from "../../functions/Lang/getLang";
import {getNumRedAfterDoot} from "../../functions/getNumRedAfterDoot";

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
                        {getLang() === 'rus' && 'Кол-во монет:'}
                        {getLang() === 'eng' && 'Total coins:'}
                        <strong> {data[GL_ACT_COINS] ? data[GL_ACT_COINS].toLocaleString("RU") + 'шт.' : SpinnerSmall}</strong>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        {getLang() === 'rus' && 'Кол-во бирж:'}
                        {getLang() === 'eng' && 'Total exchanges:'}
                        <strong> {data[GL_MKTS] ? data[GL_MKTS] : SpinnerSmall} </strong>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        {getLang() === 'rus' && 'Изменение рынка за 24ч:'}
                        {getLang() === 'eng' && 'Market change in 24h:'}
                        {
                            data[GL_CH_ALL_PR] &&
                            <Badge className={"px-3"} bg={String(data[GL_CH_ALL_PR]).startsWith('-') ? "danger" : "success"}>
                                {!String(data[GL_CH_ALL_PR]).startsWith('-') && '+'}
                                {getNumRedAfterDoot(data[GL_CH_ALL_PR],4) + '%'}
                            </Badge>
                        }
                    </ListGroup.Item>

                    <ListGroup.Item>
                        {
                            Object.values(data[GL_MK_PR]).length ?
                            <>
                                {getLang() === 'rus' && 'Доминирование'}
                                {getLang() === 'eng' && 'Dominance'}
                                <strong> {getMainCoin(data[GL_MK_PR],'coin').toUpperCase("RU")} </strong>
                                {getLang() === 'rus' && 'по рыночной капитализации:'}
                                {getLang() === 'eng' && 'by market capitalization:'}
                                <strong> {getMainCoin(data[GL_MK_PR],'price').toLocaleString("RU") + '%'} </strong>
                            </> : SpinnerSmall
                        }
                    </ListGroup.Item>

                    <ListGroup.Item>
                        {getLang() === 'rus' && 'Общая рыночная капитализация:'}
                        {getLang() === 'eng' && 'Total market cap:'}
                        <strong> {data[GL_TT_MK]['usd'] ? data[GL_TT_MK]['usd'].toLocaleString("RU") + '$' : SpinnerSmall} </strong>
                    </ListGroup.Item>
                </ListGroup>
            }
        </div>
    );
};

export default GeneralInfo;