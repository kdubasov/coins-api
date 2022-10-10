import React from 'react';
import {Link} from "react-router-dom";
import {
    GL_CUR_PRICE,
    GL_IMAGE,
    GL_NAME,
    GL_SYMBOL, GL_TT_VOL
} from "../../../constants/ApiConstants";

const TopLoseCoinsTr = ({selectSort,elem}) => {
    return (
        <tr>
            {/*img and name*/}
            <td>
                <Link style={{color:"inherit"}} to={`/coins/${elem.id}`}>
                    <img style={{width:25,marginRight:5}} src={elem[GL_IMAGE]} alt=""/>
                    {elem[GL_SYMBOL].toUpperCase()} ({elem[GL_NAME]})
                </Link>
            </td>

            {/*current price*/}
            <td>{elem[GL_CUR_PRICE] ? elem[GL_CUR_PRICE].toLocaleString() : '?'}$</td>

            {/*Объем торгов за 24 часа*/}
            <td>{elem[GL_TT_VOL] ? elem[GL_TT_VOL].toLocaleString() : '?'}$</td>

            {/*price change 24 hours*/}
            <td style={String(elem[selectSort]).startsWith('-')?{color:'red'}:{color:'green'}}>
                {String(elem[selectSort]).startsWith('-')?'':'+'}
                {elem[selectSort] ? String(elem[selectSort]).slice(0,5) : '?'}%
            </td>
        </tr>
    );
};

export default TopLoseCoinsTr;
