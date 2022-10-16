import React from 'react';
import {useApi} from "../../../hooks/useApi";
import {GLOBAL_API_DERIVATIVES} from "../../../constants/ApiCommand";
import {Badge, Spinner} from "react-bootstrap";
import PaginateDerivativesTable from "./PaginateDerivativesTable";


const PaginateDerivatives = () => {

    //main data for Derivatives
    const data = useApi(GLOBAL_API_DERIVATIVES(250,1)).data;
    // console.log(data);

    return (
        <div className={`PaginateDerivatives container`}>
            <h3 className={'m-0'}><Badge>Деривативы</Badge></h3>
            <p>
                Деривативы - производный финансовый инструмент, стоимость которого определяется ценой базового актива.
                Обычно, в случае с криптовалютами, в качестве базового актива выступает Bitcoin,
                однако деривативы могут быть и на другие цифровые валюты, такие как Ethereum, EOS и т.
            </p>

            {
                Object.values(data).length?
                    <PaginateDerivativesTable data={data} />:
                    <Spinner animation={"border"} variant={"primary"} />
            }
        </div>
    );
};

export default PaginateDerivatives;
