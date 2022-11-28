import React from 'react';
import {useApi} from "../../hooks/useApi";
import {GLOBAL_API_GLOBAL_COMMAND} from "../../constants/ApiCommand";
import {Badge, ListGroup} from "react-bootstrap";
import {GL_ACT_COINS, GL_CH_ALL_PR, GL_MK_PR, GL_MKTS, GL_TT_MK} from "../../constants/ApiConstants";
import {getLang} from "../../functions/Lang/getLang";
import {getNumRedAfterDoot} from "../../functions/getNumRedAfterDoot";

//css
import "./GeneralInfo.css";
import {getTheme} from "../../functions/Theme/getTheme";
import GeneralInfoTopCoin from "./GeneralInfoTopCoin";

//для получения объекта с данными о самой популярной монетке
export const getMainCoin = (data,returnValue) =>{
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

const GeneralInfo = () => {

    //data
    const data = useApi(GLOBAL_API_GLOBAL_COMMAND).data.data;
    // console.log(data,"GLOBAL DATA IN DefaultInfo.jsx");

    return (
        <div className={`GeneralInfo ${getTheme(true)}`}>

            <h5>
                {getLang() === "eng" && "Basic information about the cryptocurrency market"}
                {getLang() === "rus" && "Основная информация о криптовалютном рынке"}
            </h5>
            {
                data &&
                <ListGroup className={"small"}>
                    <ListGroup.Item>
                        {getLang() === 'rus' && 'Кол-во монет:'}
                        {getLang() === 'eng' && 'Total coins:'}
                        <Badge className={"mx-2"}>
                            {data[GL_ACT_COINS] && data[GL_ACT_COINS].toLocaleString("RU")}
                        </Badge>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        {getLang() === 'rus' && 'Кол-во бирж:'}
                        {getLang() === 'eng' && 'Total exchanges:'}
                        <Badge className={"mx-2"}>
                            {data[GL_MKTS] && data[GL_MKTS]}
                        </Badge>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        {getLang() === 'rus' && 'Изменение рынка за 24ч:'}
                        {getLang() === 'eng' && 'Market change in 24h:'}
                        {
                            data[GL_CH_ALL_PR] &&
                            <Badge className={"mx-2"} bg={String(data[GL_CH_ALL_PR]).startsWith('-') ? "danger" : "success"}>
                                {!String(data[GL_CH_ALL_PR]).startsWith('-') && '+'}
                                {getNumRedAfterDoot(data[GL_CH_ALL_PR],4) + '%'}
                            </Badge>
                        }
                    </ListGroup.Item>

                    <ListGroup.Item>
                        {
                            Object.values(data[GL_MK_PR]).length &&
                            <>
                                {getLang() === 'rus' && 'Доминирование'}
                                {getLang() === 'eng' && 'Dominance'}
                                <Badge className={"mx-2"}>
                                    {getMainCoin(data[GL_MK_PR],'coin').toUpperCase("RU")}
                                </Badge>
                                {getLang() === 'rus' && 'по рыночной капитализации:'}
                                {getLang() === 'eng' && 'by market capitalization:'}
                                <Badge className={"mx-2"}>
                                    {getMainCoin(data[GL_MK_PR],'price').toLocaleString("RU") + '%'}
                                </Badge>
                            </>
                        }
                    </ListGroup.Item>

                    <ListGroup.Item>
                        {getLang() === 'rus' && 'Общая рыночная капитализация:'}
                        {getLang() === 'eng' && 'Total market cap:'}
                        <Badge className={"mx-2"}>
                            {data[GL_TT_MK]['usd'] && data[GL_TT_MK]['usd'].toLocaleString("RU") + '$'}
                        </Badge>
                    </ListGroup.Item>

                    {/*data about best coin*/}
                    <GeneralInfoTopCoin />
                </ListGroup>
            }
        </div>
    );
};

export default GeneralInfo;
