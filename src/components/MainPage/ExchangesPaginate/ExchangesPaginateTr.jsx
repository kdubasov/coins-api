import React from 'react';
import {GL_EXC_TR_SC_RANK, GL_EXC_YEAR, GL_EXH_24H_VOL, GL_EXH_TR_SC} from "../../../constants/ApiConstants";
import {Link} from "react-router-dom";
import {ProgressBar} from "react-bootstrap";
import {getNumRedAfterDoot} from "../../../functions/getNumRedAfterDoot";

const MyComponent = ({elem}) => {
    return (
        <tr key={elem.id}>
            <td>
                #{elem[GL_EXC_TR_SC_RANK]}
            </td>
            <td>
                {/*name and logo img*/}
                <img width={35} src={elem.image} alt={elem.name}/>
                <Link className={'mx-2'} to={`/exchanges/${elem.id}`}>{elem.name}</Link>
            </td>
            <td style={{minWidth:100}}>
                <ProgressBar
                    animated
                    now={elem[GL_EXH_TR_SC] * 10}
                    label={`${elem[GL_EXH_TR_SC] * 10}%`}
                />
            </td>
            <td>
                {/*24h value*/}
                {getNumRedAfterDoot(elem[GL_EXH_24H_VOL],2).toLocaleString('RU')}
                (btc)
            </td>
            <td>
                {/*official website link*/}
                <a
                    href={elem.url}
                    rel={"noreferrer"}
                    target={"_blank"}>
                    {elem.url.slice(8,25)+'...'}
                </a>
            </td>
            <td>
                {/*year*/}
                {elem[GL_EXC_YEAR]}
            </td>
        </tr>
    );
};

export default MyComponent;
