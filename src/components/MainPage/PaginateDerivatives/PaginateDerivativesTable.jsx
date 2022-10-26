import React from 'react';
import {Table} from "react-bootstrap";
import PaginateDerivativesTr from "./PaginateDerivativesTr";
import {getTheme} from "../../../functions/Theme/getTheme";

const PaginateDerivativesTable = ({data}) => {

    return (
        <Table striped bordered hover variant={getTheme(true)}>
            <thead>
            <tr>
                <th>#</th>
                <th>Название</th>
                <th>Сумма открытых позиций 24ч</th>
                <th>Об. торгов 24ч</th>
                <th>Бессрочные контр.</th>
                <th>Фьючерсы</th>
                <th>Оф. сайт</th>
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
