import React from 'react';
import {
    GL_CH_PR_CN_24H,
    GL_FULL_VAL, GL_HIGH_24H, GL_LOW_24H,
    GL_MAX_CNS,
    GL_MK,
    GL_TT_CNS,
    GL_TT_VOL,
    GL_VS_OBR
} from "../../../constants/ApiConstants";
import {Table} from "react-bootstrap";
import {getTheme} from "../../../functions/Theme/getTheme";

const TableMarketData = ({data}) => {

    return (
        <Table className={'mt-3 mb-3'} striped bordered hover variant={getTheme(true)}>
            <tbody>
            <tr className={"small"}>
                <td>
                    Изменение цены за 24ч:
                    {
                        data[GL_CH_PR_CN_24H]?
                        <strong style={{color:String(data[GL_CH_PR_CN_24H]).startsWith('-') ? 'red' : 'green'}}>
                            {String(data[GL_CH_PR_CN_24H]).startsWith('-')?' ' : ' +'}
                            {data[GL_CH_PR_CN_24H].toLocaleString() + '%'}
                        </strong>
                        :
                        <strong> ?</strong>
                    }
                </td>
                <td>
                    Объем торгов за 24 часа:
                    <strong> {data[GL_TT_VOL]["usd"] ? data[GL_TT_VOL]["usd"].toLocaleString() + '$' : '?'}</strong>
                </td>
            </tr>
            <tr className={"small"}>
                <td>
                    Всего в обращении:
                    <strong> {data[GL_VS_OBR] ? data[GL_VS_OBR].toLocaleString() : '?'}</strong>
                </td>
                <td>
                    Полностью разбавленная капитализация:
                    <strong> {data[GL_FULL_VAL]["usd"] ? data[GL_FULL_VAL]["usd"].toLocaleString() + '$' : '?'}</strong>
                </td>
            </tr>
            <tr className={"small"}>
                <td>
                    Максимальный объем:
                    <strong> {data[GL_MAX_CNS] ? data[GL_MAX_CNS].toLocaleString() : '?'}</strong>
                </td>
                <td>
                    Общее предложение:
                    <strong> {data[GL_TT_CNS] ? data[GL_TT_CNS].toLocaleString() : '?'}</strong>
                </td>
            </tr>
            <tr className={"small"}>
                <td>
                    Мин/Макс (24ч):
                    {
                        (data[GL_LOW_24H]["usd"] && data[GL_HIGH_24H]["usd"])?
                            <strong> {data[GL_LOW_24H]["usd"].toLocaleString() + '$'} / {data[GL_HIGH_24H]["usd"].toLocaleString() + '$'}</strong>
                            :
                            <strong> -</strong>
                    }
                </td>
                <td>
                    Рыночная капитализация:
                    <strong> {data[GL_MK]["usd"] ? data[GL_MK]["usd"].toLocaleString() + '$' : '?'}</strong>
                </td>
            </tr>
            </tbody>
        </Table>
    );
};

export default TableMarketData;
