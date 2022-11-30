import React from 'react';
import {GL_CUR_PRICE, GL_MK, GL_TT_VOL} from "../../../../constants/ApiConstants";
import {getNumRedAfterDoot} from "../../../../functions/getNumRedAfterDoot";
import {getTheme} from "../../../../functions/Theme/getTheme";
import {getLang} from "../../../../functions/Lang/getLang";

const DateInfoResult = ({data,date}) => {

    // console.log(data,'DateInfoResult');

    return (
        <div className={`DateInfoResult ${getTheme(true)}`}>
            <div className={"inner"}>
                <p className="small">
                    {getLang() === "eng" && "Date"}
                    {getLang() === "rus" && "Дата"}
                </p>
                <h5>{date}</h5>
            </div>

            <div className={"inner"}>
                <p className="small">
                    {getLang() === "eng" && "Price"}
                    {getLang() === "rus" && "Цена"}
                </p>
                <h5>
                    {
                        data[GL_CUR_PRICE]['usd'] &&
                        Number(getNumRedAfterDoot(data[GL_CUR_PRICE]['usd'])).toLocaleString("RU") + '$'
                    }
                </h5>
            </div>

            <div className={"inner"}>
                <p className="small">
                    {getLang() === "eng" && "Mkt cap"}
                    {getLang() === "rus" && "Рын. кап-ция"}
                </p>
                <h5>
                    {
                        data[GL_MK]['usd'] &&
                        Number(getNumRedAfterDoot(data[GL_MK]['usd'])).toLocaleString("RU") + '$'
                    }
                </h5>
            </div>

            <div className={"inner"}>
                <p className="small">
                    {getLang() === "eng" && "24h Volume"}
                    {getLang() === "rus" && "Объем торгов"}
                </p>
                <h5>
                    {
                        data[GL_TT_VOL]['usd'] &&
                        Number(getNumRedAfterDoot(data[GL_TT_VOL]['usd'])).toLocaleString("RU") + '$'
                    }
                </h5>
            </div>
        </div>
    );
};

export default DateInfoResult;
