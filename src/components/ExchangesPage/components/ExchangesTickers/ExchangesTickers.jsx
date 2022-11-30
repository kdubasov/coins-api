import React from 'react';
import {useApi} from "../../../../hooks/useApi";
import {GLOBAL_API_EXCHANGES_ID_TICKERS} from "../../../../constants/ApiCommand";
import {GL_TICKERS} from "../../../../constants/ApiConstants";
import {Table} from "react-bootstrap";
import ExchangesTickersTr from "./ExchangesTickersTr";
import {getLang} from "../../../../functions/Lang/getLang";
import {getTheme} from "../../../../functions/Theme/getTheme";


const ExchangesTickers = ({id,mainData}) => {

    const dataFromApi = useApi(GLOBAL_API_EXCHANGES_ID_TICKERS(id)).data[GL_TICKERS];
    // console.log(dataFromApi,'GLOBAL_API_EXCHANGES_ID_TICKERS');

    const tickersMainData = mainData[GL_TICKERS];
    // console.log(tickersMainData,'tickersMainData exch');

    //eslint-disable-next-line
    const showData = dataFromApi || tickersMainData;

    return (
        <div className={`ExchangesCoins`}>

            <h4>
                {getLang() === "rus" && "Рынки"}
                {getLang() === "eng" && "Markets"}
            </h4>

            <Table className={getTheme(true)}>
                <thead>
                    <tr className={"small"}>
                        <th>#</th>
                        <th>{getLang() === "eng" ? "Coins" : "Монеты"}</th>
                        <th>{getLang() === "eng" ? "Link" : "Ссылка"}</th>
                        <th>{getLang() === "eng" ? "Confidence" : "Доверие"}</th>
                        <th>{getLang() === "eng" ? "Spread" : "Спред"}</th>
                        <th>{getLang() === "eng" ? "24h Volume" : "Объем торгов за 24 часа"}</th>
                        <th>{getLang() === "eng" ? "Converted volume" : "Преобразованный объем"}</th>
                        <th>{getLang() === "eng" ? "Last trade" : "Последняя сделка"}</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        showData.map((tick,ids) => (
                            <ExchangesTickersTr key={ids} tick={tick} ids={ids} />
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ExchangesTickers;
