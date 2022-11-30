import React from 'react';
import {
    GL_BAS_PERS, GL_EXC_BASE,
    GL_EXC_SPR, GL_EXC_TRD_URL, GL_FUND_RATE, GL_OP_INT_USD,
    GL_PER_DEL_TICK, GL_PER_H24_VOL, GL_TRG
} from "../../../../constants/ApiConstants";
import {getNumRedAfterDoot} from "../../../../functions/getNumRedAfterDoot";
import {Badge} from "react-bootstrap";

const DerivativesTickersTr = ({ids,tick}) => {

    // console.log(tick,'DerivativesTickersTr');

    return (
        <tr className={"small"}>
            <td>#{ids + 1}</td>
            {/*Монеты*/}
            <td>{tick[GL_EXC_BASE]}/{tick[GL_TRG]}</td>
            {/*Цена*/}
            <td>{tick['last'] && tick['last'].toLocaleString("RU") + '$'}</td>
            {/*24ч*/}
            <td>
                {
                    tick[GL_PER_DEL_TICK] &&
                    <Badge pill bg={String(tick[GL_PER_DEL_TICK]).startsWith('-')?"danger":"success"}>
                        {tick[GL_PER_DEL_TICK] > 0 && "+"}
                        {tick[GL_PER_DEL_TICK] + '%'}
                    </Badge>
                }
            </td>
            {/*Об. торгов 24ч*/}
            <td>
                {
                    tick[GL_PER_H24_VOL] &&
                    Number(getNumRedAfterDoot(tick[GL_PER_H24_VOL],3)).toLocaleString("RU") + '$'
                }
            </td>
            {/*Спред*/}
            <td>{tick[GL_EXC_SPR] && getNumRedAfterDoot(tick[GL_EXC_SPR],5) + '%'}</td>
            {/*Базис*/}
            <td>{tick[GL_BAS_PERS] ? tick[GL_BAS_PERS] + '%' : '-'}</td>
            {/*Ставка финансирования*/}
            <td>
                {
                    Boolean(tick[GL_FUND_RATE]) &&
                    <Badge pill bg={String(tick[GL_FUND_RATE]).startsWith('-')?"danger":"success"}>
                        {tick[GL_FUND_RATE] + "%"}
                    </Badge>
                }
            </td>
            {/*Сумма открытых позиций*/}
            <td>
                {
                    Boolean(tick[GL_OP_INT_USD]) &&
                    Number(getNumRedAfterDoot(tick[GL_OP_INT_USD],2)).toLocaleString("RU") + '$'
                }
            </td>
            <td>
                <a
                    href={tick[GL_EXC_TRD_URL]}
                    target={'_blank'}
                    rel={'noreferrer'}
                >
                    {
                        tick[GL_EXC_TRD_URL] &&
                        tick[GL_EXC_TRD_URL].slice(8,18) + '...' + tick[GL_EXC_TRD_URL].slice(35,45)
                    }
                </a>
            </td>
        </tr>
    );
};

export default DerivativesTickersTr;
