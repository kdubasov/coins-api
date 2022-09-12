import React from 'react';
import {
    GL_CH_PR_1H_PR,
    GL_CH_PR_24H_PR,
    GL_CUR_PRICE, GL_HIGH_24H,
    GL_IMAGE, GL_LOW_24H,
    GL_MC_RANK, GL_MK,
    GL_NAME,
    GL_SYMBOL, GL_TT_VOL
} from "../../constants/ApiConstants";
import {Link} from "react-router-dom";

const PaginateCoinsTr = ({elem}) => {
    return (
        <tr>

            {/*id*/}
            <td>{elem[GL_MC_RANK]}</td>

            {/*img and name*/}
            <td>
                <Link style={{color:"inherit"}} to={`/coins/${elem.id}`}>
                <img style={{width:25,marginRight:5}} src={elem[GL_IMAGE]} alt=""/>
                {elem[GL_SYMBOL].toUpperCase()} ({elem[GL_NAME]})
                </Link>
            </td>

            {/*current price*/}
            <td>{elem[GL_CUR_PRICE] ? elem[GL_CUR_PRICE].toLocaleString() : '?'}$</td>

            {/*price change 1 hour*/}
            <td style={String(elem[GL_CH_PR_1H_PR]).startsWith('-')?{color:'red'}:{color:'green'}}>
                {String(elem[GL_CH_PR_1H_PR]).startsWith('-')?'':'+'}
                {elem[GL_CH_PR_1H_PR] ? String(elem[GL_CH_PR_1H_PR]).slice(0,5) : '?'}%
            </td>

            {/*price change 24 hours*/}
            <td style={String(elem[GL_CH_PR_24H_PR]).startsWith('-')?{color:'red'}:{color:'green'}}>
                {String(elem[GL_CH_PR_24H_PR]).startsWith('-')?'':'+'}
                {elem[GL_CH_PR_24H_PR] ? String(elem[GL_CH_PR_24H_PR]).slice(0,5) : '?'}%
            </td>

            {/*min max price 24 hours*/}
            <td>{elem[GL_LOW_24H] ? elem[GL_LOW_24H].toLocaleString() : '?'}$ / {elem[GL_HIGH_24H] ? elem[GL_HIGH_24H].toLocaleString() : '?'}$</td>

            {/*Объем торгов за 24 часа*/}
            <td>{elem[GL_TT_VOL] ? elem[GL_TT_VOL].toLocaleString() : '?'}$</td>

            {/*Рыночная кап-ция*/}
            <td>{elem[GL_MK] ? elem[GL_MK].toLocaleString() : '?'}$</td>
        </tr>
    );
};

export default PaginateCoinsTr;