import React from 'react';
import {
    GL_DEFI_TR_24H_BTC,
    GL_FUT_PAIRS,
    GL_IMAGE,
    GL_NAME,
    GL_OP_INT_BTC,
    GL_PER_PAIRS, GL_URL
} from "../../../constants/ApiConstants";
import {Link} from "react-router-dom";

const PaginateDerivativesTr = ({id,data}) => {

    // console.log(data,'data for one Derivative');

    return (
        <tr className={"small"}>
            <td>#{id}</td>
            {/*name link and logo*/}
            <td className={'d-flex align-items-center'}>
                <img width={30} src={data[GL_IMAGE]} alt={data[GL_NAME]} />
                <Link to={`/derivatives/${data.id}`} className={'m-0 mx-2'}>{data[GL_NAME]}</Link>
            </td>
            {/*Сумма открытых позиций 24ч*/}
            <td>{data[GL_OP_INT_BTC] ? data[GL_OP_INT_BTC].toLocaleString("RU") + '(btc)' : '-'}</td>
            {/*Об. торгов 24ч*/}
            <td>{Number(data[GL_DEFI_TR_24H_BTC]) ? Number(data[GL_DEFI_TR_24H_BTC]).toLocaleString("RU") + '(btc)' : '-'}</td>
            {/*Бессрочные контр.*/}
            <td>{data[GL_PER_PAIRS] || '-'}</td>
            {/*Фьючерсы*/}
            <td>{data[GL_FUT_PAIRS] || '-'}</td>
            {/*Оф. сайт*/}
            <td>
                {
                    data[GL_URL] &&
                    <a
                        href={data[GL_URL]}
                        target={"_blank"}
                        rel={"noreferrer"}
                    >
                        {data[GL_URL].slice(8,30)}
                    </a>
                }
            </td>
        </tr>
    );
};

export default PaginateDerivativesTr;
