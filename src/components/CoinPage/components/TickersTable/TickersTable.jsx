import React, {useState} from 'react';
import {useApi} from "../../../../hooks/useApi";
import {GLOBAL_API_COINS_TICKERS} from "../../../../constants/ApiCommand";
import {GL_TICKERS} from "../../../../constants/ApiConstants";
import {Alert, Table} from "react-bootstrap";
import TickersTableTr from "./TickersTableTr";
import TickersTableShowMore from "./TickersTableShowMore";
import {getTheme} from "../../../../functions/Theme/getTheme";

//css
import "./TickersTable.css";
import {getLang} from "../../../../functions/Lang/getLang";
import SpinnerAlert from "../../../../general-components/Alerts/SpinnerAlert";

const TickersTable = ({id,name = false}) => {

    const data = useApi(GLOBAL_API_COINS_TICKERS(id)).data[GL_TICKERS];
    // console.log(data,'GLOBAL_API_COINS_TICKERS');

    //показать больше маркетов
    const [showMore,setShowMore] = useState(false)

    return (
        <div className={'TickersTable'}>
            <h4>
                {getLang() === "rus" && `${name && name} Рынки:`}
                {getLang() === "eng " && `${name && name} Markets:`}
            </h4>

            {
                data && !Object.values(data).length &&
                <Alert className={'small p-2'}>
                    {getLang() === "rus" && "Не удалось найти рынки для данной монеты, попробуйте позже."}
                    {getLang() === "eng " && "Could not find markets for this coin, please try again later."}
                </Alert>
            }

            {
                data?
                    <>
                        <Table className={getTheme(true)}>
                            <thead>
                                <tr className={"small"}>
                                    <th>#</th>
                                    <th>
                                        {getLang() === "eng" && "Name"}
                                        {getLang() === "rus" && "Название"}
                                    </th>
                                    <th>
                                        {getLang() === "eng" && "Pair"}
                                        {getLang() === "rus" && "Пары"}
                                    </th>
                                    <th>
                                        {getLang() === "eng" && "Spread"}
                                        {getLang() === "rus" && "Спред"}
                                    </th>
                                    <th>
                                        {getLang() === "eng" && "Confidence"}
                                        {getLang() === "rus" && "Доверие"}
                                    </th>
                                    <th>
                                        {getLang() === "eng" && "Converted volume"}
                                        {getLang() === "rus" && "Преобразованный объем"}
                                    </th>
                                    <th>
                                        {getLang() === "eng" && "24h Volume"}
                                        {getLang() === "rus" && "Об. торгов (24ч)"}
                                    </th>
                                    <th>
                                        {getLang() === "eng" && "Official website"}
                                        {getLang() === "rus" && "Оф. сайт"}
                                    </th>
                                    <th>
                                        {getLang() === "eng" && "Last trade"}
                                        {getLang() === "rus" && "Последняя сделка"}
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {data.slice(0,(showMore?100:20)).map((elem,ids) => (
                                    <TickersTableTr key={ids} data={elem} ids={ids} />
                                ))}
                            </tbody>
                        </Table>

                        {
                            Object.values(data).length >= 20 &&
                            <TickersTableShowMore showMore={showMore} setShowMore={setShowMore} />
                        }
                    </>:
                    <SpinnerAlert />
            }
        </div>
    );
};

export default TickersTable;
