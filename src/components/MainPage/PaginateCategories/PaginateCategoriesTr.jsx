import React from 'react';
import {Link} from "react-router-dom";
import {GL_CAT_TOP_3, GL_MK, GL_MKCH_24H, GL_NAME, GL_VOL_24H} from "../../../constants/ApiConstants";
import {getNumRedAfterDoot} from "../../../functions/getNumRedAfterDoot";
import PaginateChangeTd from "../PaginateCoins/PaginateChangeTd";
import {Spinner} from "react-bootstrap";

const PaginateCategoriesTr = ({elem,ids}) => {

    // console.log(elem,'PaginateCategoriesTr');

    return (
        <tr className={"small"}>
            <td>#{ids + 1}</td>
            {/*Категория*/}
            <td>
                <Link to={`/categories/${elem[GL_NAME].replace(/[\s/]/g, '')}`}>
                    {elem[GL_NAME]}
                </Link>
            </td>
            {/*Топ монеты*/}
            <td className={"coins-logos"}>
                {
                    Boolean(elem[GL_CAT_TOP_3].length) ?
                        <>
                            <img src={elem[GL_CAT_TOP_3][0]} alt=""/>
                            <img className={'mx-2'} src={elem[GL_CAT_TOP_3][1]} alt=""/>
                            <img src={elem[GL_CAT_TOP_3][2]} alt=""/>
                        </>:
                        <Spinner size={"sm"} animation={"border"} variant={"primary"} />
                }
            </td>
            {/*	Изм. 24ч*/}
            <PaginateChangeTd value={elem[GL_MKCH_24H]} text={'%'} />
            {/*Рын. кап.*/}
            <td>{Number(getNumRedAfterDoot(elem[GL_MK])).toLocaleString()}$</td>
            {/*Об. торгов 24ч*/}
            <td>{Number(getNumRedAfterDoot(elem[GL_VOL_24H])).toLocaleString()}$</td>
        </tr>
    );
};

export default PaginateCategoriesTr;
