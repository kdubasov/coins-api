import React from 'react';
import DeFiMainData from "./components/DeFiMainData";

const DeFi = () => {

    return (
        <div className={`DeFi container`}>
            <div className={'border p-3 mb-2'}>
                <h4 className={`m-0`}>DeFi</h4>
                <p className={`m-0`}>
                    DeFi или децентрализованные финансы это финансовые сервисы,
                    которые построены поверх распределенных сетей без централизованных посредников.
                </p>
            </div>
            <DeFiMainData />
        </div>
    );
};

export default DeFi;
