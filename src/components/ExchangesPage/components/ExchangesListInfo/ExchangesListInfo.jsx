import React from 'react';
import {GL_COUNTR, GL_EXC_YEAR, GL_EXH_24H_VOL, GL_EXH_TR_SC, GL_TWIT_NAND} from "../../../../constants/ApiConstants";
import {getNumRedAfterDoot} from "../../../../functions/getNumRedAfterDoot";
import {getLang} from "../../../../functions/Lang/getLang";

//css
import "./ExchangesListInfo.css";
import {getTheme} from "../../../../functions/Theme/getTheme";


const ExchangesListInfo = ({data}) => {

    return (
        <div className={`ExchangesListInfo ${getTheme(true)}`}>
            {
                data[GL_EXH_24H_VOL] &&
                <div className={"inner"}>
                    <h5>
                        {
                            data[GL_EXH_24H_VOL] ?
                            Number(getNumRedAfterDoot(data[GL_EXH_24H_VOL],2)).toLocaleString("RU") + 'BTC':'-'
                        }
                    </h5>
                    <p className="small">
                        {getLang() === "rus" && "Объем торгов за 24 часа"}
                        {getLang() === "eng" && "24h Volume"}
                    </p>
                </div>
            }

            <div className={"inner"}>
                <h5>{data[GL_COUNTR] ? data[GL_COUNTR] : '-'}</h5>
                <p className="small">
                    {getLang() === "rus" && "Страна основания"}
                    {getLang() === "eng" && "Country"}
                </p>
            </div>

            <div className={"inner"}>
                <h5>{data[GL_EXC_YEAR] ? data[GL_EXC_YEAR] : '-'}</h5>
                <p className="small">
                    {getLang() === "rus" && "Год основания"}
                    {getLang() === "eng" && "Year of foundation"}
                </p>
            </div>

            <div className={"inner"}>
                <h5>{data[GL_EXH_TR_SC] ? data[GL_EXH_TR_SC] : '-'}</h5>
                <p className="small">
                    {getLang() === "rus" && "Очки доверия"}
                    {getLang() === "eng" && "Trust score"}
                </p>
            </div>

            <div className={"inner"}>
                <h5>{data[GL_TWIT_NAND] ? data[GL_TWIT_NAND] : '-'}</h5>
                <p className="small">
                    {getLang() === "rus" && "Твиттер никнейм"}
                    {getLang() === "eng" && "Twitter nickname"}
                </p>
            </div>
        </div>
    );
};

export default ExchangesListInfo;
