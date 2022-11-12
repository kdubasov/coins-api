import React from 'react';
import {GL_CH_PR_1H_PR, GL_CH_PR_24H_PR, GL_CH_PR_7D_PR} from "../../../constants/ApiConstants";
import TopLoseCoinsTr from "./TopLoseCoinsTr";
import {Table} from "react-bootstrap";
import {getTheme} from "../../../functions/Theme/getTheme";
import {getLang} from "../../../functions/Lang/getLang";

const TopLoseCoinsTable = ({selectSort,data,sort}) => {
    return (
        <Table striped bordered hover variant={getTheme(true)}>
            <thead>
            <tr>
                <td>
                    {getLang() === 'rus' && "Название"}
                    {getLang() === 'eng' && "Name"}
                </td>
                <td>
                    {getLang() === 'rus' && "Акт. цена"}
                    {getLang() === 'eng' && "Act. price"}
                </td>
                <td>
                    {getLang() === 'rus' && "Объем торгов (24ч)"}
                    {getLang() === 'eng' && "Volume (24h)"}
                </td>
                <td>
                    {getLang() === 'rus' && "Измен."}
                    {getLang() === 'eng' && "Change"}
                    {selectSort===GL_CH_PR_1H_PR && '(1h)'}
                    {selectSort===GL_CH_PR_24H_PR && '(24h)'}
                    {selectSort===GL_CH_PR_7D_PR && '(7d)'}
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
