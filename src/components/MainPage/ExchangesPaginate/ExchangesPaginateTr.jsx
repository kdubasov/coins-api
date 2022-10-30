import React from 'react';
import {
    GL_COUNTR,
    GL_EXC_TR_SC_RANK,
    GL_EXC_YEAR,
    GL_EXH_24H_VOL,
    GL_EXH_TR_SC, GL_IMAGE, GL_NAME,
    GL_URL
} from "../../../constants/ApiConstants";
import {Link} from "react-router-dom";
import {ProgressBar} from "react-bootstrap";
import {getNumRedAfterDoot} from "../../../functions/getNumRedAfterDoot";

const ExchangesPaginate = ({elem}) => {

    // console.log(elem,'ExchangesPaginate');

    return (
        <tr key={elem.id}>
            <td>
                #{elem[GL_EXC_TR_SC_RANK] && elem[GL_EXC_TR_SC_RANK]}
            </td>
            <td>
                {/*name and logo img*/}
                {
                    (elem[GL_NAME] && elem[GL_IMAGE]) &&
                    <>
                        <img width={35} src={elem[GL_IMAGE]} alt={elem[GL_NAME]}/>
                        <Link className={'mx-2'} to={`/exchanges/${elem.id}`}>{elem[GL_NAME]}</Link>
                    </>
                }
            </td>
            <td style={{minWidth:100}}>
                {
                    elem[GL_EXH_TR_SC] &&
                    <ProgressBar
                        animated
                        now={elem[GL_EXH_TR_SC] * 10}
                        label={`${elem[GL_EXH_TR_SC] * 10}%`}
                    />
                }
            </td>
            <td>
                {/*24h value*/}
                {
                    elem[GL_EXH_24H_VOL] &&
                    getNumRedAfterDoot(elem[GL_EXH_24H_VOL],2).toLocaleString('RU') + '(btc)'
                }
            </td>
            <td>
                {/*official website link*/}
                {
                    elem[GL_URL] &&
                    <a
                        href={elem[GL_URL]}
                        rel={"noreferrer"}
                        target={"_blank"}>
                        {elem[GL_URL].slice(8,25)+'...'}
                    </a>
                }
            </td>
            <td>
                {/*year*/}
                {elem[GL_EXC_YEAR] && elem[GL_EXC_YEAR]}
            </td>
            <td>
                {/*country*/}
                {elem[GL_COUNTR] && elem[GL_COUNTR]}
            </td>
        </tr>
    );
};

export default ExchangesPaginate;
