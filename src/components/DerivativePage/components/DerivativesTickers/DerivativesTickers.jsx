import React from 'react';
import {Badge, Table} from "react-bootstrap";
import DerivativesTickersTr from "./DerivativesTickersTr";
import {getTheme} from "../../../../functions/Theme/getTheme";

const DerivativesTickers = ({data}) => {

    // console.log(data,'DerivativesTickers');

    return (
        <div className={`DerivativesTickers`}>
            <h4><Badge>Рынки</Badge></h4>

            <Table striped bordered hover variant={getTheme(true)}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Символ</th>
                    <th>Монеты</th>
                    <th>Цена</th>
                    <th>Индексная цена</th>
                    <th>24ч</th>
                    <th>Об. торгов 24ч</th>
                    <th>Спред</th>
                    <th>Базис</th>
                    <th>Ставка финансирования</th>
                    <th>Сумма открытых позиций </th>
                    <th>Ссылка</th>
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
