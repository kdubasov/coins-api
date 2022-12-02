import React from 'react';
import {useApi} from "../../../hooks/useApi";
import {GLOBAL_API_DERIVATIVES} from "../../../constants/ApiCommand";
import PaginateDerivativesTable from "./PaginateDerivativesTable";
import {getLang} from "../../../functions/Lang/getLang";
import SpinnerAlert from "../../../general-components/Alerts/SpinnerAlert/SpinnerAlert";


const PaginateDerivatives = () => {

    //main data for Derivatives
    const data = useApi(GLOBAL_API_DERIVATIVES(250,1)).data;
    // console.log(data);

    return (
        <div className={`PaginateDerivatives container`}>
            <h4 className={'m-0'}>
                {getLang() === 'eng' && 'Derivatives'}
                {getLang() === 'rus' && 'Деривативы'}
            </h4>

            <p className={"small mb-3"}>
                {
                    getLang() === 'rus' &&
                    "Деривативы - производный финансовый инструмент, стоимость которого определяется ценой базового актива. " +
                    "Обычно, в случае с криптовалютами, в качестве базового актива выступает Bitcoin, " +
                    "однако деривативы могут быть и на другие цифровые валюты, такие как Ethereum, EOS и т."
                }
                {
                    getLang() === 'eng' &&
                    'Derivatives are a derivative financial instrument, the value of which is determined by the price of' +
                    ' the underlying asset. Usually, in the case of cryptocurrencies, Bitcoin acts as the underlying asset,' +
                    ' however, derivatives can also be for other digital currencies, such as Ethereum, EOS, etc.'
                }
            </p>

            {
                Object.values(data).length?
                    <PaginateDerivativesTable data={data} />:
                    <SpinnerAlert />
            }
        </div>
    );
};

export default PaginateDerivatives;
