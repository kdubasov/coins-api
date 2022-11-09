import React from 'react';
import {getNumRedAfterDoot} from "../../../functions/getNumRedAfterDoot";
import {Badge} from "react-bootstrap";

const PaginateChangeTd = ({value,text}) => {
    return (
        <td>
            <Badge bg={String(value).startsWith('-')?"danger":"success"} pill>
                {!String(value).startsWith('-') && '+'}
                {value ? getNumRedAfterDoot(value,3) : '?'}
                {text}
            </Badge>
        </td>
    );
};

export default PaginateChangeTd;
