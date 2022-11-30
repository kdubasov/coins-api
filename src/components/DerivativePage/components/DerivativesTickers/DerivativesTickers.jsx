import React from 'react';
import {Table} from "react-bootstrap";
import DerivativesTickersTr from "./DerivativesTickersTr";
import {getTheme} from "../../../../functions/Theme/getTheme";
import {getLang} from "../../../../functions/Lang/getLang";

const DerivativesTickers = ({data}) => {

    // console.log(data,'DerivativesTickers');

    return (
        <div className={`DerivativesTickers`}>
            <h4>{getLang() === "eng" ? "Markets" : "Рынки"}</h4>

            <Table className={getTheme(true)}>
                <thead>
                <tr className={"small"}>
                    <th>#</th>
                    {/*<th>Символ</th>*/}
                    <th>{getLang() === "eng" ? "Coins" : "Монеты"}</th>
                    <th>{getLang() === "eng" ? "Price" : "Цена"}</th>
                    <th>{getLang() === "eng" ? "Change 24h" : "Изм. 24ч"}</th>
                    <th>{getLang() === "eng" ? "Volume 24h" : "Об. торгов 24ч"}</th>
                    <th>{getLang() === "eng" ? "Spread" : "Спред"}</th>
                    <th>{getLang() === "eng" ? "Basis" : "Базис"}</th>
                    <th>{getLang() === "eng" ? "Funding rate" : "Ставка финансирования"}</th>
                    <th>{getLang() === "eng" ? "Amount of open positions" : "Сумма открытых позиций"}</th>
                    <th>{getLang() === "eng" ? "Link" : "Ссылка"}</th>
                </tr>
                </thead>
                <tbody>
                    {
                        Object.values(data).map((elem,ids) => (
                            <DerivativesTickersTr key={ids} ids={ids} tick={elem} />
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default DerivativesTickers;
