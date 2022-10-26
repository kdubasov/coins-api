import React from 'react';
import {Table} from "react-bootstrap";
import TableTrHoldCompanies from "./TableTrHoldCompanies";
import {getTheme} from "../../../functions/Theme/getTheme";

const TableHoldCompanies = ({data}) => {
    return (
        <Table striped bordered hover className={'TableHoldCompanies'} variant={getTheme(true)}>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Название и символ</th>
                    <th>Кол-во активов</th>
                    <th>Общ. стоимость</th>
                    <th>От общ. предложения</th>
                    <th>Страна</th>
                </tr>
            </thead>

            <tbody>
                {
                    data.map((elem,ids) => (
                        <TableTrHoldCompanies key={ids} elem={elem} id={ids + 1} />
                    ))
                }
            </tbody>
        </Table>
    );
};

export default TableHoldCompanies;
