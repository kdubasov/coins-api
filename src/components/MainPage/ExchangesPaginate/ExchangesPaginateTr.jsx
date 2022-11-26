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
import PaginateCoinsBriefcaseButton from "../PaginateCoins/PaginateCoinsBriefcaseButton";

const ExchangesPaginate = ({elem,setShowAlert,btcPrice}) => {

    // console.log(elem,'ExchangesPaginate');
    // console.log(Object.values(btcPrice)[0]['usd'])

    //переводим цену из btc в usd
    const getUsdValue = () => {
        if (Object.values(btcPrice)[0] && Object.values(btcPrice)[0]['usd'] && elem[GL_EXH_24H_VOL]){
            return (elem[GL_EXH_24H_VOL] * Object.values(btcPrice)[0]['usd']).toLocaleString("RU") + '$'
        }
        return false
    }

    return (
        <tr className={"small"} key={elem.id}>
            <td>
                #{elem[GL_EXC_TR_SC_RANK] && elem[GL_EXC_TR_SC_RANK]}

                <br />

                {/*add with check to BriefcaseDB button*/}
                <PaginateCoinsBriefcaseButton elemId={elem['id']} setShowAlert={setShowAlert} table={'exchanges'} title={'Биржа'} />
            </td>
            <td>
                {/*name and logo img*/}
                {
                    (elem[GL_NAME] && elem[GL_IMAGE]) &&
                    <>
                        <img width={25} src={elem[GL_IMAGE]} alt={elem[GL_NAME]} />
                        <Link className={'mx-2'} to={`/exchanges/${elem.id}`}>{elem[GL_NAME]}</Link>
                    </>
                }
            </td>
            {/*рейтинг доверия*/}
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
                {
                    getUsdValue() ?
                        getUsdValue():
                        elem[GL_EXH_24H_VOL] && elem[GL_EXH_24H_VOL].toLocaleString("RU") + "(btc)"
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
