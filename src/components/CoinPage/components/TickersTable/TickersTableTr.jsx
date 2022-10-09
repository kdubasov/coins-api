import React from 'react';
import {
    FL_ECH_COIN_ID, FL_ECH_TG_COIN_ID,
    GL_EXC_BASE, GL_EXC_CONV_VOL,
    GL_EXC_TICK_SPR, GL_EXC_TRD_URL, GL_EXH_TR_SC,
    GL_IDENT,
    GL_LOGO,
    GL_MKT,
    GL_NAME,
    GL_TRG, GL_VOL
} from "../../../../constants/ApiConstants";
import {Link} from "react-router-dom";
import {getNumRedAfterDoot} from "../../../../functions/getNumRedAfterDoot";

const TickersTableTr = ({data,ids}) => {

    // console.log(data,'TickersTableTr')

    return (
        <tr>
            <td>{ids + 1}</td>
            <td className={'d-flex align-items-center'}>
                <img width={25} src={data[GL_MKT][GL_LOGO]} alt={data[GL_MKT][GL_NAME]}/>
                <Link className={'mx-2'} to={`/exchanges/${data[GL_MKT][GL_IDENT]}`}>
                    {data[GL_MKT][GL_NAME]} ({data[GL_MKT][GL_IDENT]})
                </Link>
            </td>
            <td style={{maxWidth:200}}>
                <Link to={`/coins/${data[FL_ECH_COIN_ID]}`}>
                    {data[GL_EXC_BASE]}
                </Link>
                /
                <Link to={`/coins/${data[FL_ECH_TG_COIN_ID]}`}>
                    {data[GL_TRG]}
                </Link>
            </td>
            <td>{getNumRedAfterDoot(data[GL_EXC_TICK_SPR],4) + '%'}</td>
            <td className={'d-flex justify-content-center'}>
                <div
                    style={{
                        width:15,
                        height:15,
                        background:`${data[GL_EXH_TR_SC]}`,
                        borderRadius:10,
                }}
                />
            </td>
            <td>
                {
                    Object.entries(data[GL_EXC_CONV_VOL]).map((elem,ids) => (
                        <p key={ids} className={"small m-0"}>
                            <strong>{elem[0]}</strong>: {elem[1]}
                        </p>
                    ))
                }
            </td>
            <td>
                {getNumRedAfterDoot(data[GL_VOL],3) + ' ' + data[GL_EXC_BASE]}
            </td>
            <td>
                <a
                    href={data[GL_EXC_TRD_URL]}
                    target={'_blank'}
                    rel={"noreferrer"}
                >
                    {data[GL_EXC_TRD_URL]}
                </a>
            </td>
        </tr>
    );
};

export default TickersTableTr;
