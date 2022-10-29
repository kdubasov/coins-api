import React from 'react';
import {getNumRedAfterDoot} from "../../../functions/getNumRedAfterDoot";

const PaginateChangeTd = ({value,text}) => {
    return (
        <td style={String(value).startsWith('-')?{color:'red'}:{color:'green'}}>
            {!String(value).startsWith('-') && '+'}
            {value ? getNumRedAfterDoot(value,3) : '?'}
            {text}
        </td>
    );
};

export default PaginateChangeTd;
