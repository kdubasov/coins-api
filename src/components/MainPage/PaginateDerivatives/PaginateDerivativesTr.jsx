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
        <tr>
            <td>#{id}</td>
            {/*name link and logo*/}
            <td className={'d-flex align-items-center'}>
                <img width={30} src={data[GL_IMAGE]} alt={data[GL_NAME]} />
                <Link to={`/derivatives/${data.id}`} className={'m-0 mx-2'}>{data[GL_NAME]}</Link>
            </td>
            <td>{data[GL_OP_INT_BTC]}</td>
            <td>{data[GL_DEFI_TR_24H_BTC]}</td>
            <td>{data[GL_PER_PAIRS]}</td>
            <td>{data[GL_FUT_PAIRS]}</td>
            <td>
                {
                    data[GL_URL] &&
                    <Link to={data[GL_URL]}>{data[GL_URL].slice(8,30)}</Link>
                }
            </td>
        </tr>
    );
};

export default PaginateDerivativesTr;
