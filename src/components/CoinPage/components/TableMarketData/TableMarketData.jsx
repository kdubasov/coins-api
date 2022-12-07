import React from 'react';
import {
    GL_CH_PR_CN_24H,
    GL_FULL_VAL, GL_HIGH_24H, GL_LOW_24H,
    GL_MAX_CNS,
    GL_MK,
    GL_TT_CNS,
    GL_TT_VOL,
    GL_VS_OBR
} from "../../../../constants/ApiConstants";
import {Badge} from "react-bootstrap";
import {getTheme} from "../../../../functions/Theme/getTheme";
import {getLang} from "../../../../functions/Lang/getLang";

//css
import "./TableMarketData.css";
import "./TableMarketDataMedia.css";

const TableMarketData = ({data}) => {

    return (
        <div className={`TableMarketData ${getTheme(true)}`}>
            <div className={"inner"}>
                <p className={"small"}>
                    {getLang() === "rus" && "Изменение цены за 24ч:"}
                    {getLang() === "eng" && "Price change for 24h:"}
                </p>
                {
                    data[GL_CH_PR_CN_24H]?
                        <h6>
                            <Badge bg={String(data[GL_CH_PR_CN_24H]).startsWith('-') ? 'danger' : 'success'}>
                                {!String(data[GL_CH_PR_CN_24H]).startsWith('-') && '+'}
                                {data[GL_CH_PR_CN_24H].toLocaleString() + '%'}
                            </Badge>
                        </h6>
                        :
                        <h6>?</h6>
                }
            </div>

            <div className={"inner"}>
                <p className={"small"}>
                    {getLang() === "rus" && "Объем торгов за 24 часа:"}
                    {getLang() === "eng" && "Trading volume for 24 hours:"}
                </p>
                <h6>{data[GL_TT_VOL]["usd"] ? data[GL_TT_VOL]["usd"].toLocaleString() + '$' : '?'}</h6>
            </div>

            <div className={"inner"}>
                <p className={"small"}>
                    {getLang() === "rus" && "Всего в обращении:"}
                    {getLang() === "eng" && "Total in circulation:"}
                </p>
                <h6>{data[GL_VS_OBR] ? data[GL_VS_OBR].toLocaleString() : '?'}</h6>
            </div>

            <div className={"inner"}>
                <p className={"small"}>
                    {getLang() === "rus" && "Полностью разбавленная капитализация:"}
                    {getLang() === "eng" && "Fully diluted capitalization:"}
                </p>
                <h6>{data[GL_FULL_VAL]["usd"] ? data[GL_FULL_VAL]["usd"].toLocaleString() + '$' : '?'}</h6>
            </div>


            <div className={"inner"}>
                <p className={"small"}>
                    {getLang() === "rus" && "Максимальный объем:"}
                    {getLang() === "eng" && "Max Volume:"}
                </p>
                <h6>{data[GL_MAX_CNS] ? data[GL_MAX_CNS].toLocaleString() : '?'}</h6>
            </div>

            <div className={"inner"}>
                <p className={"small"}>
                    {getLang() === "rus" && "Общее предложение:"}
                    {getLang() === "eng" && "General offer:"}
                </p>
                <h6>{data[GL_TT_CNS] ? data[GL_TT_CNS].toLocaleString() : '?'}</h6>
            </div>


            <div className={"inner"}>
                <p className={"small"}>
                    {getLang() === "rus" && "Мин/Макс (24ч):"}
                    {getLang() === "eng" && "Min/Max (24h):"}
                </p>
                {
                    (data[GL_LOW_24H]["usd"] && data[GL_HIGH_24H]["usd"])?
                        <h6>{data[GL_LOW_24H]["usd"].toLocaleString() + '$'} / {data[GL_HIGH_24H]["usd"].toLocaleString() + '$'}</h6> :
                        <h6>?</h6>
                }
            </div>

            <div className={"inner"}>
                <p className={"small"}>
                    {getLang() === "rus" && "Рыночная капитализация:"}
                    {getLang() === "eng" && "Market capitalization:"}
                </p>
                <h6>{data[GL_MK]["usd"] ? data[GL_MK]["usd"].toLocaleString() + '$' : '?'}</h6>
            </div>
        </div>
    );
};

export default TableMarketData;
