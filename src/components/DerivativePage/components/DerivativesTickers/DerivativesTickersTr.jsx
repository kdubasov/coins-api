import React from 'react';
import {
    GL_BAS_PERS,
    GL_EXC_BASE,
    GL_EXC_SPR, GL_EXC_TRD_URL, GL_FUND_RATE, GL_IND, GL_OP_INT_USD,
    GL_PER_DEL_TICK, GL_PER_H24_VOL,
    GL_SYMBOL,
    GL_TRG
} from "../../../../constants/ApiConstants";
import {getNumRedAfterDoot} from "../../../../functions/getNumRedAfterDoot";
import {Badge} from "react-bootstrap";

const DerivativesTickersTr = ({ids,tick}) => {

    // console.log(tick,'DerivativesTickersTr');

    return (
        <tr>
            <td>{ids + 1}</td>
            <td>{tick[GL_SYMBOL]}</td>
            {/*Монеты*/}
            <td>{tick[GL_EXC_BASE]}/{tick[GL_TRG]}</td>
            {/*Цена*/}
            <td>{tick['last']+'$'}</td>
            {/*Индексная цена*/}
            <td>{tick[GL_IND] ? tick[GL_IND]+'$' : '-'}</td>
            {/*24ч*/}
            <td>
                <Badge pill bg={String(tick[GL_PER_DEL_TICK]).startsWith('-')?"danger":"success"}>
                    {tick[GL_PER_DEL_TICK] + '%'}
                </Badge>
            </td>
            {/*Об. торгов 24ч*/}
            <td>{getNumRedAfterDoot(tick[GL_PER_H24_VOL],3) + '$'}</td>
            {/*Спред*/}
            <td>{tick[GL_EXC_SPR] && getNumRedAfterDoot(tick[GL_EXC_SPR],5) + '%'}</td>
            {/*Базис*/}
            <td>
                <Badge pill bg={String(tick[GL_BAS_PERS]).startsWith('-')?"danger":"success"}>
                    {tick[GL_BAS_PERS] ? tick[GL_BAS_PERS] + '%' : '-'}
                </Badge>
            </td>
            {/*Ставка финансирования*/}
            <td>
                <Badge pill bg={String(tick[GL_FUND_RATE]).startsWith('-')?"danger":"success"}>
                    {Number(tick[GL_FUND_RATE]) ? tick[GL_FUND_RATE] + '%' : '-'}
                </Badge>
            </td>
            {/*Сумма открытых позиций*/}
            <td>
                {Number(tick[GL_OP_INT_USD]) ? getNumRedAfterDoot(tick[GL_OP_INT_USD],2) + '$' : '-'}
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
