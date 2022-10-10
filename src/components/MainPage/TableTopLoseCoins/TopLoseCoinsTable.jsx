import React from 'react';
import {GL_CH_PR_1H_PR, GL_CH_PR_24H_PR} from "../../../constants/ApiConstants";
import TopLoseCoinsTr from "./TopLoseCoinsTr";
import {Table} from "react-bootstrap";

const TopLoseCoinsTable = ({selectSort,data,sort}) => {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <td>Название</td>
                <td>Акт. цена</td>
                <td>Об. торгов (24ч)</td>
                <td>
                    Измен.
                    {
                        selectSort===GL_CH_PR_1H_PR?'(1ч)':
                        selectSort===GL_CH_PR_24H_PR?'(24ч)':'(7д)'
                    }
                </td>
            </tr>
            </thead>

            <tbody>
            {
                data
                    .sort(
                        sort === 'max' ?
                            (a, b) => a[selectSort] - b[selectSort]:
                            (a, b) => b[selectSort] - a[selectSort]
                    )
                    .slice(0,20)
                    .map(elem =>(
                        <TopLoseCoinsTr selectSort={selectSort} key={elem.id} elem={elem} />
                    ))
            }
            </tbody>
        </Table>
    );
};

export default TopLoseCoinsTable;
