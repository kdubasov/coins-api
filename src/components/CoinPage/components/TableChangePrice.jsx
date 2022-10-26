import React from 'react';
import {Table} from "react-bootstrap";
import {
    GL_CH_PR_CN_14D, GL_CH_PR_CN_1H, GL_CH_PR_CN_1Y, GL_CH_PR_CN_200D,
    GL_CH_PR_CN_24H, GL_CH_PR_CN_30D, GL_CH_PR_CN_60D, GL_CH_PR_CN_7D,
} from "../../../constants/ApiConstants";
import {getTheme} from "../../../functions/Theme/getTheme";

const TableChangePrice = ({data}) => {

    // console.log(data)

    const tdValue = (command,currency = false) =>{
        if (currency){
            return(
                data[command][currency]?
                    <td style={{color:String(data[command][currency]).startsWith('-')?'red':'green'}}>
                        {String(data[command][currency]).startsWith('-')?'':'+'}
                        {data[command][currency].toLocaleString() + '%'}
                    </td>:
                    <td>?</td>
            )
        }else {
            return(
                data[command]?
                    <td style={{color:String(data[command]).startsWith('-')?'red':'green'}}>
                        {String(data[command]).startsWith('-')?'':'+'}
                        {data[command].toLocaleString() + '%'}
                    </td>:
                    <td>?</td>
            )
        }
    }

    return (
        <Table className={'mt-3 mb-3'} striped bordered hover variant={getTheme(true)}>
            <thead>
            <tr>
                <th>1 час</th>
                <th>24 часа</th>
                <th>7 дней</th>
                <th>14 дней</th>
                <th>30 дней</th>
                <th>60 дней</th>
                <th>200 дней</th>
                <th>1 год</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                {tdValue(GL_CH_PR_CN_1H,'usd')}
                {tdValue(GL_CH_PR_CN_24H)}
                {tdValue(GL_CH_PR_CN_7D)}
                {tdValue(GL_CH_PR_CN_14D)}
                {tdValue(GL_CH_PR_CN_30D)}
                {tdValue(GL_CH_PR_CN_60D)}
                {tdValue(GL_CH_PR_CN_200D)}
                {tdValue(GL_CH_PR_CN_1Y)}
            </tr>
            </tbody>
        </Table>
    );
};

export default TableChangePrice;