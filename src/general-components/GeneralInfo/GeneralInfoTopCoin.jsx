import React from 'react';
import {GL_CH_PR_24H_PR, GL_CUR_PRICE, GL_IMAGE, GL_MK, GL_NAME, GL_TT_VOL} from "../../constants/ApiConstants";
import {Link} from "react-router-dom";
import {Badge, ListGroup} from "react-bootstrap";
import {getNumRedAfterDoot} from "../../functions/getNumRedAfterDoot";
import {useApi} from "../../hooks/useApi";
import {GLOBAL_API_COIN_LIST_ALL} from "../../constants/ApiCommand";
import {getLang} from "../../functions/Lang/getLang";

//основная информация по самой популярной монете по рын кап-ции
const GeneralInfoTopCoin = () => {

    const dataCoin = useApi(GLOBAL_API_COIN_LIST_ALL(1,1)).data[0];
    // console.log(dataCoin,'Data for bestCoin');

    if (dataCoin && Object.values(dataCoin).length){
        return (
            <ListGroup.Item className={"best-coin"}>
                <h6 className={"my-2 fw-light"}>
                    {getLang() === "eng" && "Best Coin by Market Cap:"}
                    {getLang() === "rus" && "Лучшая монета по рыночной капитализации:"}
                </h6>

                <header>
                    <div className={"left"}>
                        {//img
                            (dataCoin[GL_IMAGE] && dataCoin[GL_NAME]) &&
                            <img src={dataCoin[GL_IMAGE]} alt={dataCoin[GL_NAME]} />
                        }

                        <div>
                            {/*link and name*/}
                            <Link to={`/coins/${dataCoin["id"]}`} className={"d-flex"}>
                                {dataCoin[GL_NAME]}
                            </Link>
                            {/*price*/}
                            <h6 className={"price"}>
                                {dataCoin[GL_CUR_PRICE] && dataCoin[GL_CUR_PRICE]?.toLocaleString("RU") + '$'}
                            </h6>
                        </div>
                    </div>

                    <div className={"right"}>
                        {//изменение цены за 24ч
                            dataCoin[GL_CH_PR_24H_PR] &&
                            <Badge bg={String(dataCoin[GL_CH_PR_24H_PR]).startsWith('-')?"danger":"success"}>
                                {!String(dataCoin[GL_CH_PR_24H_PR]).startsWith('-') && '+'}
                                {getNumRedAfterDoot(dataCoin[GL_CH_PR_24H_PR],4) + '% (24h)'}
                            </Badge>
                        }
                        {/*Объем торгов за 24 часа*/}
                        <p className={"m-0"}>
                            {getLang() === "eng" && "24h Volume:"}
                            {getLang() === "rus" && "Об. торг. 24ч:"}
                            <strong>
                                {Boolean(dataCoin[GL_TT_VOL]) && ' ' + dataCoin[GL_TT_VOL].toLocaleString("RU") + '$'}
                            </strong>
                        </p>

                        {/*Рыночная кап-ция*/}
                        <p className={"m-0"}>
                            {getLang() === "eng" && "Market cap:"}
                            {getLang() === "rus" && "Рыночная кап-ция:"}
                            <strong>
                                {dataCoin[GL_MK] && ' ' + dataCoin[GL_MK].toLocaleString("RU") + '$'}
                            </strong>
                        </p>
                    </div>
                </header>
            </ListGroup.Item>
        );
    }
};

export default GeneralInfoTopCoin;
