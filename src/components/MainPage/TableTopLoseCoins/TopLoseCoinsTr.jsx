import React from 'react';
import {Link} from "react-router-dom";
import {
    GL_CUR_PRICE,
    GL_IMAGE,
    GL_NAME,
    GL_SYMBOL, GL_TT_VOL
} from "../../../constants/ApiConstants";
import {Badge} from "react-bootstrap";

const TopLoseCoinsTr = ({selectSort,elem}) => {
    return (
        <tr className={"small"}>
            {/*img and name*/}
            <td>
                <Link to={`/coins/${elem.id}`}>
                    <img src={elem[GL_IMAGE]} alt=""/>
                    {elem[GL_SYMBOL].toUpperCase()} ({elem[GL_NAME]})
                </Link>
            </td>

            {/*current price*/}
            <td>{elem[GL_CUR_PRICE] ? elem[GL_CUR_PRICE].toLocaleString() : '?'}$</td>

            {/*Объем торгов за 24 часа*/}
            <td>{elem[GL_TT_VOL] ? elem[GL_TT_VOL].toLocaleString() : '?'}$</td>

            {/*price change 24 hours*/}
            <td>
                <Badge pill bg={String(elem[selectSort]).startsWith('-')?'danger':'success'}>
                    {String(elem[selectSort]).startsWith('-')?'':'+'}
                    {elem[selectSort] ? String(elem[selectSort]).slice(0,5) : '?'}%
                </Badge>
            </td>
        </tr>
    );
};

export default TopLoseCoinsTr;
