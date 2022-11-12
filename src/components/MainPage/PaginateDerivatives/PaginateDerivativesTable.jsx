import React from 'react';
import {Table} from "react-bootstrap";
import PaginateDerivativesTr from "./PaginateDerivativesTr";
import {getTheme} from "../../../functions/Theme/getTheme";
import {getLang} from "../../../functions/Lang/getLang";

const PaginateDerivativesTable = ({data}) => {

    return (
        <Table striped bordered hover variant={getTheme(true)}>
            <thead>
            <tr>
                <th>#</th>
                <th>
                    {getLang() === 'rus' && 'Название'}
                    {getLang() === 'eng' && 'Name'}
                </th>
                <th>
                    {getLang() === 'rus' && 'Сумма открытых позиций 24ч'}
                    {getLang() === 'eng' && 'Amount of open positions 24h'}
                </th>
                <th>
                    {getLang() === 'rus' && 'Об. торгов 24ч'}
                    {getLang() === 'eng' && 'Volume 24h'}
                </th>
                <th>
                    {getLang() === 'rus' && 'Бессрочные контр.'}
                    {getLang() === 'eng' && 'Perpetual сontracts'}
                </th>
                <th>
                    {getLang() === 'rus' && 'Фьючерсы'}
                    {getLang() === 'eng' && 'Futures'}
                </th>
                <th>
                    {getLang() === 'rus' && 'Оф. сайт'}
                    {getLang() === 'eng' && 'Official website'}
                </th>
            </tr>
            </thead>

            <tbody>
                {
                    data.map((elem,ids) => (
                        <PaginateDerivativesTr id={ids+1} key={elem.id} data={elem} />
                    ))
                }
            </tbody>
        </Table>
    );
};

export default PaginateDerivativesTable;
