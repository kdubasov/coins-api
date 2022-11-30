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
import {getLang} from "../../../../functions/Lang/getLang";

const ExchangesTickersTr = ({tick,ids}) => {

    // console.log(tick,'data for one ticker in exchanges')
    // console.log(Object.entries(tick[GL_EXC_CONV_VOL]))

    return (
        <tr className={"small"}>
            <td>#{ids + 1}</td>
            {/*Монета*/}
            <td>
                <Link to={`/coins/${tick[FL_ECH_COIN_ID]}`}>
                    {tick[GL_EXC_BASE]}
                </Link>
                /
                <Link to={`/coins/${tick[FL_ECH_TG_COIN_ID]}`}>
                    {tick[GL_TRG]}
                </Link>
            </td>
            {/*Ссылка*/}
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
            {/*Доверие*/}
            <td>
                {
                    tick[GL_EXH_TR_SC] &&
                    <div
                        style={{
                            width:25,
                            height:25,
                            background:`${tick[GL_EXH_TR_SC]}`,
                            borderRadius:5,
                            margin:"auto",
                        }}
                    />
                }
            </td>
            {/*спред*/}
            <td>
                {tick[GL_EXC_TICK_SPR] && getNumRedAfterDoot(tick[GL_EXC_TICK_SPR],3) + '%'}
            </td>
            {/*об торгов 24h*/}
            <td>
                {Number(getNumRedAfterDoot(tick[GL_VOL],3)).toLocaleString("RU") + ' ' + tick[GL_EXC_BASE]}
            </td>
            <td>
                {
                    Object.entries(tick[GL_EXC_CONV_VOL]).map((elem,ids) => (
                        <p key={ids} className={"small m-0"}>
                            {elem[0] && elem[0].toUpperCase()}:
                            <strong className={"mx-2"}>
                                {
                                    getNumRedAfterDoot(elem[1],3) &&
                                    getNumRedAfterDoot(elem[1],3).toLocaleString("RU")
                                }
                            </strong>
                        </p>
                    ))
                }
            </td>
            <td>
                {
                    tick[GL_LAST_TR] &&
                    Number(tick[GL_LAST_TR].slice(8,10)) === Number(new Date().getDate()) ?
                        (getLang() === "rus" ? 'Недавно' : 'Recently') :
                        (getLang() === "rus" ? 'Более дня назад' : 'Over a day ago')
                }
            </td>
        </tr>
    );
};

export default ExchangesTickersTr;
