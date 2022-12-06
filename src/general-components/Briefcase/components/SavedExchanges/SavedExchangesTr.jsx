import React from 'react';
import {
    GL_EXC_TR_SC_RANK,
    GL_EXC_YEAR,
    GL_EXH_24H_VOL,
    GL_EXH_TR_SC,
    GL_IMAGE,
    GL_NAME, GL_URL
} from "../../../../constants/ApiConstants";
import PaginateCoinsBriefcaseButton from "../../../../components/MainPage/PaginateCoins/PaginateCoinsBriefcaseButton";
import {Link} from "react-router-dom";
import {ProgressBar} from "react-bootstrap";
import {getNumRedAfterDoot} from "../../../../functions/getNumRedAfterDoot";

const SavedExchangesTr = ({elem,setShowAlert,elemId}) => {

    // console.log(elemId,'SavedExchangesTr');

    return (
        <tr className={"small"}>
            <td>
                #{elem[GL_EXC_TR_SC_RANK] && elem[GL_EXC_TR_SC_RANK]}

                <br />

                {/*add with check to BriefcaseDB button*/}
                <PaginateCoinsBriefcaseButton elemId={elemId.id} setShowAlert={setShowAlert} table={'exchanges'} title={'Биржа'} />
            </td>
            <td>
                {/*name and logo img*/}
                {
                    (elem[GL_NAME] && elem[GL_IMAGE]) &&
                    <>
                        <img width={25} src={elem[GL_IMAGE]} alt={elem[GL_NAME]}/>
                        <Link className={'mx-2'} to={`/exchanges/${elemId.id}`}>{elem[GL_NAME]}</Link>
                    </>
                }
            </td>
            <td>
                {/*24h value*/}
                {
                    elem[GL_EXH_24H_VOL] &&
                    getNumRedAfterDoot(elem[GL_EXH_24H_VOL],2).toLocaleString('RU') + '(btc)'
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
                {/*year*/}
                {elem[GL_EXC_YEAR] && elem[GL_EXC_YEAR]}
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
        </tr>
    );
};

export default SavedExchangesTr;
