import React from 'react';
import {Link} from "react-router-dom";
import {
    GL_CH_PR_24H_PR, GL_CH_PR_CN_30D, GL_CH_PR_CN_7D,
    GL_CUR_PRICE, GL_HIGH_24H, GL_IMAGE, GL_LOW_24H, GL_MC_RANK,
    GL_MD, GL_MD_SPL_7D, GL_MK, GL_MKCH_24H_PR, GL_NAME,
    GL_SYMBOL, GL_TT_VOL
} from "../../../../constants/ApiConstants";
import PaginateCoinsBriefcaseButton from "../../../../components/MainPage/PaginateCoins/PaginateCoinsBriefcaseButton";
import {getNumRedAfterDoot} from "../../../../functions/getNumRedAfterDoot";
import PaginateGraph from "../../../../components/MainPage/PaginateCoins/PaginateGraph";
import PaginateChangeTd from "../../../../components/MainPage/PaginateCoins/PaginateChangeTd";
import {Badge} from "react-bootstrap";

const SavedCoinsTr = ({elem,setShowAlert}) => {

    // console.log(elem,'SavedCoinsTr');
    return (
        <tr>
            {/*id*/}
            <td>
                {elem[GL_MC_RANK] && '#' + elem[GL_MC_RANK]}
                {/*add with check to BriefcaseDB button*/}
                <PaginateCoinsBriefcaseButton elemId={elem['id']} setShowAlert={setShowAlert} table={'coins'} title={'Монета'} />
            </td>

            {/*img and name*/}
            <td>
                <Link style={{color:"inherit"}} to={`/coins/${elem.id}`}>
                    <img style={{width:25,marginRight:5}} src={elem[GL_IMAGE]?.small} alt={elem[GL_NAME]}/>
                    {elem[GL_SYMBOL]?.toUpperCase()} ({elem[GL_NAME] && elem[GL_NAME]})
                </Link>
            </td>

            {/*price*/}
            <td>
                {elem[GL_MD][GL_CUR_PRICE]['usd'] && elem[GL_MD][GL_CUR_PRICE]['usd'].toLocaleString('RU') + '$'}
            </td>

            {/*price change 24 hours*/}
            <PaginateChangeTd value={elem[GL_MD][GL_CH_PR_24H_PR]} text={'%'} />

            {/*price change 7 days*/}
            <PaginateChangeTd value={elem[GL_MD][GL_CH_PR_CN_7D]} text={'%'} />

            {/*price change 7 days*/}
            <PaginateChangeTd value={elem[GL_MD][GL_CH_PR_CN_30D]} text={'%'} />

            {/*min max price 24 hours*/}
            <td>
                {elem[GL_MD][GL_LOW_24H]['usd'] && elem[GL_MD][GL_LOW_24H]['usd']?.toLocaleString()}$
                /
                {elem[GL_MD][GL_HIGH_24H]['usd'] && elem[GL_MD][GL_HIGH_24H]['usd']?.toLocaleString()}$
            </td>

            {/*Объем торгов за 24 часа*/}
            <td>{elem[GL_MD][GL_TT_VOL] && elem[GL_MD][GL_TT_VOL]['usd']?.toLocaleString()}$</td>

            {/*Рыночная кап-ция*/}
            <td>
                {elem[GL_MD][GL_MK] && elem[GL_MD][GL_MK]['usd']?.toLocaleString()}$
                <br />
                <Badge bg={String(elem[GL_MD][GL_MKCH_24H_PR]).startsWith('-')?'danger':'success'}>
                    {!String(elem[GL_MD][GL_MKCH_24H_PR]).startsWith('-') && '+'}
                    {elem[GL_MD][GL_MKCH_24H_PR] ? getNumRedAfterDoot(elem[GL_MD][GL_MKCH_24H_PR],2) : '?'}
                    % (24ч)
                </Badge>
            </td>

            {/*График*/}
            <td width={150}>
                <PaginateGraph data={elem[GL_MD][GL_MD_SPL_7D]["price"]} />
            </td>
        </tr>
    );
};

export default SavedCoinsTr;
