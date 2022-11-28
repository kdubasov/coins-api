import React from 'react';
import DeFiMainData from "./components/DeFiMainData";
import {getLang} from "../../../functions/Lang/getLang";

//css
import "./DeFi.css";
import FeedbackForm from "../../../general-components/FeedbackForm/FeedbackForm";

const DeFi = () => {

    return (
        <div className={`DeFi container`}>
            <h4 className={"m-0"}>DeFi</h4>
            <p className={`mb-3 small`}>
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

            {/*defi data*/}
            <DeFiMainData />
            {/*feedback form with main data*/}
            <FeedbackForm showInfo={true} />
        </div>
    );
};

export default DeFi;
