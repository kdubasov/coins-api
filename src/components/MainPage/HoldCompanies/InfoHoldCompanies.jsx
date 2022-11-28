import React from 'react';
import {GL_COMP, GL_HOLD_MC_DOM, GL_HOLD_TT, GL_HOLD_TT_VAL} from "../../../constants/ApiConstants";
import {getNumRedAfterDoot} from "../../../functions/getNumRedAfterDoot";
import {getLang} from "../../../functions/Lang/getLang";
import {getTheme} from "../../../functions/Theme/getTheme";

const InfoHoldCompanies = ({info}) => {

    // console.log(info,'InfoHoldCompanies');

    return (
        <div className={`InfoHoldCompanies ${getTheme(true)} mb-5`}>
            <div className={"inner"}>
                <h4>{info[GL_HOLD_MC_DOM] && info[GL_HOLD_MC_DOM] + '%'}</h4>
                <p>
                    {getLang() === 'rus' && "Доминирование холдинговых сбережений на рынке"}
                    {getLang() === 'eng' && "Dominance of holding savings in the market"}
                </p>
            </div>
            <div className={"inner"}>
                <h4>
                    {info[GL_HOLD_TT] && getNumRedAfterDoot(info[GL_HOLD_TT],0).toLocaleString()}
                </h4>
                <p>
                    {getLang() === 'rus' && "Монет на удержании"}
                    {getLang() === 'eng' && "Coins on hold"}
                </p>
            </div>
            <div className={"inner"}>
                <h4>
                    {info[GL_HOLD_TT_VAL] && getNumRedAfterDoot(info[GL_HOLD_TT_VAL],3).toLocaleString() + '$'}
                </h4>
                <p>
                    {getLang() === 'rus' && "Общая сумма активов"}
                    {getLang() === 'eng' && "Total assets"}
                </p>
            </div>
            <div className={"inner"}>
                <h4>{info[GL_COMP] && info[GL_COMP].length}</h4>
                <p>
                    {getLang() === 'rus' && "Холдиновых компании"}
                    {getLang() === 'eng' && "Holding companies"}
                </p>
            </div>
        </div>
    );
};

export default InfoHoldCompanies;
