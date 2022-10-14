import React from 'react';
import {useApi} from "../../../../functions/useApi";
import {GLOBAL_API_EXCHANGES_ID_TICKERS} from "../../../../constants/ApiCommand";
import {GL_TICKERS} from "../../../../constants/ApiConstants";
import {Table} from "react-bootstrap";
import ExchangesTickersTr from "./ExchangesTickersTr";


const ExchangesTickers = ({id,mainData}) => {

    const dataFromApi = useApi(GLOBAL_API_EXCHANGES_ID_TICKERS(id)).data[GL_TICKERS];
    // console.log(dataFromApi,'GLOBAL_API_EXCHANGES_ID_TICKERS');

    const tickersMainData = mainData[GL_TICKERS];
    // console.log(tickersMainData,'tickersMainData exch');

    //eslint-disable-next-line
    const showData = dataFromApi || tickersMainData;

    return (
        <div className={`ExchangesCoins`}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Монета</th>
                        <th>Ссылка</th>
                        <th>Доверие</th>
                        <th>Спред</th>
                        <th>Объем торгов за 24 часа</th>
                        <th>Преобразованный объем</th>
                        <th>Последняя сделка</th>
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
