import React from 'react';
import {getLang} from "../../functions/Lang/getLang";

const CoinsTableHeaderNoSort = () => {
    return (
        <tr className={"small"}>
            <th>
                #
            </th>
            <th>
                {getLang() === "rus" && "Название"}
                {getLang() === "eng" && "Name"}
            </th>
            <th>
                {getLang() === "rus" && "Акт. цена"}
                {getLang() === "eng" && "Act. price"}
            </th>
            <th>
                {getLang() === "rus" && "1ч"}
                {getLang() === "eng" && "1h"}
            </th>
            <th>
                {getLang() === "rus" && "24ч"}
                {getLang() === "eng" && "24h"}
            </th>
            <th>
                {getLang() === "rus" && "7 Дней"}
                {getLang() === "eng" && "7 Days"}
            </th>
            <th>
                {getLang() === "rus" && "Мин/Макс 24ч"}
                {getLang() === "eng" && "Min/Max 24h"}
            </th>
            <th>
                {getLang() === "rus" && "Объем торгов 24ч"}
                {getLang() === "eng" && "Trading volume 24h"}
            </th>
            <th>
                {getLang() === "rus" && "Рын. кап-ция"}
                {getLang() === "eng" && "Market cap"}
            </th>
            <th>
                {getLang() === "rus" && "График 3д"}
                {getLang() === "eng" && "Graph 3d"}
            </th>
        </tr>
    );
};

export default CoinsTableHeaderNoSort;
