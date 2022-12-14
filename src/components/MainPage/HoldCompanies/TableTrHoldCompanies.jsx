import React from 'react';
import {
    GL_COUNTR,
    GL_HOLD_TT,
    GL_NAME,
    GL_SYMBOL,
    GL_TT_CUR_VAL_USD,
    GL_TT_SUP_PERC
} from "../../../constants/ApiConstants";

const TableTrHoldCompanies = ({elem,id,value}) => {

    // console.log(elem,'TableTrHoldCompanies');
    // console.log(value,'TableTrHoldCompanies value');

    return (
        <tr className={"small"}>
            <td className={"opacity-50"}>#{id}</td>
            {/*name and sybmol*/}
            <td>
                <strong style={{color:"#326CF4"}}>
                    {elem[GL_NAME] + ' '}
                </strong>
                <p className={"m-0 opacity-50"}>
                    ({elem[GL_SYMBOL]})
                </p>
            </td>
            {/*общее количество активов*/}
            <td>{elem[GL_HOLD_TT] && elem[GL_HOLD_TT].toLocaleString()}</td>
            {/*общая текущая стоимость usd*/}
            <td>{elem[GL_TT_CUR_VAL_USD] && elem[GL_TT_CUR_VAL_USD].toLocaleString() + '$'}</td>
            {/*процент от общего предложения*/}
            <td>{elem[GL_TT_SUP_PERC] ? elem[GL_TT_SUP_PERC] + '%' : '<0.001%'}</td>
            {/*процент от всех средст холдинга*/}
            <td>
                {
                    (elem[GL_TT_CUR_VAL_USD] && value) &&
                    (elem[GL_TT_CUR_VAL_USD]/value * 100).toLocaleString() + '%'
                }
            </td>
            {/*country*/}
            <td>{elem[GL_COUNTR]}</td>
        </tr>
    );
};

export default TableTrHoldCompanies;
