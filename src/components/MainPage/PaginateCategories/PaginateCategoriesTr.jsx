import React from 'react';
import {Link} from "react-router-dom";
import {GL_CAT_TOP_3, GL_MK, GL_MKCH_24H, GL_NAME, GL_VOL_24H} from "../../../constants/ApiConstants";
import {getNumRedAfterDoot} from "../../../functions/getNumRedAfterDoot";

const PaginateCategoriesTr = ({elem,ids}) => {
    return (
        <tr>
            <td>{ids + 1}</td>
            {/*Категория*/}
            <td>
                <Link to={`/categories/${elem[GL_NAME].replace(/[\s/]/g, '')}`}>
                    {elem[GL_NAME]}
                </Link>
            </td>
            {/*Топ монеты*/}
            <td>
                <img width={25} src={elem[GL_CAT_TOP_3][0]} alt=""/>
                <img width={25} className={'mx-2'} src={elem[GL_CAT_TOP_3][1]} alt=""/>
                <img width={25} src={elem[GL_CAT_TOP_3][2]} alt=""/>
            </td>
            {/*	Изм. 24ч*/}
            <td style={String(elem[GL_MKCH_24H]).startsWith('-')?{color:"red"}:{color:"green"}}>
                {!String(elem[GL_MKCH_24H]).startsWith('-') && "+"}
                {getNumRedAfterDoot(elem[GL_MKCH_24H],3)}%
            </td>
            {/*Рын. кап.*/}
            <td>{getNumRedAfterDoot(elem[GL_MK]).toLocaleString()}$</td>
            {/*Об. торгов 24ч*/}
            <td>{getNumRedAfterDoot(elem[GL_VOL_24H]).toLocaleString()}$</td>
        </tr>
    );
};

export default PaginateCategoriesTr;
