import React from 'react';
import DeFiMainData from "./components/DeFiMainData";
import {Badge} from "react-bootstrap";
import {getLang} from "../../../functions/Lang/getLang";

const DeFi = () => {

    return (
        <div className={`DeFi container`}>
            <div className={'border p-3 mb-2'}>
                <h4><Badge>DeFi</Badge></h4>
                <p className={`m-0`}>
                    {
                        getLang() === 'eng' &&
                            "DeFi or decentralized finance are financial services that are built on top" +
                            " of distributed networks without centralized intermediaries."
                    }
                    {
                        getLang() === 'rus' &&
                        "DeFi или децентрализованные финансы это финансовые сервисы," +
                        " которые построены поверх распределенных сетей без централизованных посредников."
                    }
                </p>
            </div>
            <DeFiMainData />
        </div>
    );
};

export default DeFi;
