import React from 'react';
import {Table} from "react-bootstrap";
import TableTrHoldCompanies from "./TableTrHoldCompanies";
import {getTheme} from "../../../functions/Theme/getTheme";
import {getLang} from "../../../functions/Lang/getLang";

const TableHoldCompanies = ({data,value}) => {
    return (
        <Table striped bordered hover className={'TableHoldCompanies'} variant={getTheme(true)}>
            <thead>
                <tr className={"small"}>
                    <th>#</th>
                    <th>
                        {getLang() === 'rus' && "Название и символ"}
                        {getLang() === 'eng' && "Name and symbol"}
                    </th>
                    <th>
                        {getLang() === 'rus' && "Кол-во активов"}
                        {getLang() === 'eng' && "Number of assets"}
                    </th>
                    <th>
                        {getLang() === 'rus' && "Общая стоимость"}
                        {getLang() === 'eng' && "Total cost"}
                    </th>
                    <th>
                        {getLang() === 'rus' && "От общего предложения"}
                        {getLang() === 'eng' && "From the general offer"}
                    </th>
                    <th>
                        {getLang() === 'rus' && "От суммы активов"}
                        {getLang() === 'eng' && "From the amount of assets"}
                    </th>
                    <th>
                        {getLang() === 'rus' && "Страна"}
                        {getLang() === 'eng' && "Country"}
                    </th>
                </tr>
            </thead>

            <tbody>
                {
                    data.map((elem,ids) => (
                        <TableTrHoldCompanies key={ids} elem={elem} id={ids + 1} value={value} />
                    ))
                }
            </tbody>
        </Table>
    );
};

export default TableHoldCompanies;
