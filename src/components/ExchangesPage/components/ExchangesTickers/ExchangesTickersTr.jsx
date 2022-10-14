import React from 'react';
import {
    FL_ECH_COIN_ID, FL_ECH_TG_COIN_ID,
    GL_EXC_BASE, GL_EXC_CONV_VOL,
    GL_EXC_TICK_SPR,
    GL_EXC_TRD_URL,
    GL_EXH_TR_SC, GL_LAST_TR, GL_TRG,
    GL_VOL
} from "../../../../constants/ApiConstants";
import {getNumRedAfterDoot} from "../../../../functions/getNumRedAfterDoot";
import {Link} from "react-router-dom";

const ExchangesTickersTr = ({tick,ids}) => {

    // console.log(tick,'data for one tickers in exchanges')
    // console.log(Object.entries(tick[GL_EXC_CONV_VOL]))

    return (
        <tr>
            <td>{ids + 1}</td>
            <td>
                <Link to={`/coins/${tick[FL_ECH_COIN_ID]}`}>
                    {tick[GL_EXC_BASE]}
                </Link>
                /
                <Link to={`/coins/${tick[FL_ECH_TG_COIN_ID]}`}>
                    {tick[GL_TRG]}
                </Link>
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
            <td className={`d-flex justify-content-center align-content-center`}>
                {
                    tick[GL_EXH_TR_SC]?
                        <div style={{width:15,height:15,borderRadius:15,background:tick[GL_EXH_TR_SC]}} />:
                        '-'
                }
            </td>
            <td>
                {tick[GL_EXC_TICK_SPR]? getNumRedAfterDoot(tick[GL_EXC_TICK_SPR],3) + '%' : '-'}
            </td>
            <td>
                {getNumRedAfterDoot(tick[GL_VOL],3) + ' ' + tick[GL_EXC_BASE]}
            </td>
            <td>
                {
                    Object.entries(tick[GL_EXC_CONV_VOL]).map((elem,ids) => (
                        <p key={ids} className={"small m-0"}>
                            <strong>{elem[0]}</strong>: {elem[1]}
                        </p>
                    ))
                }
            </td>
            <td>
                {
                    tick[GL_LAST_TR]?
                        Number(tick[GL_LAST_TR].slice(8,10)) === Number(new Date().getDate()) ? 'Недавно' : 'Более дня назад'
                        :'?'
                }
            </td>
        </tr>
    );
};

export default ExchangesTickersTr;