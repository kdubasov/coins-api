import React from 'react';
import {
    GL_CH_PR_CN_14D, GL_CH_PR_CN_1H, GL_CH_PR_CN_1Y, GL_CH_PR_CN_200D,
    GL_CH_PR_CN_24H, GL_CH_PR_CN_30D, GL_CH_PR_CN_60D, GL_CH_PR_CN_7D,
} from "../../../../constants/ApiConstants";
import {getTheme} from "../../../../functions/Theme/getTheme";
import {getLang} from "../../../../functions/Lang/getLang";

//css
import "./TableChangePrice.css";
import "./TableChangePriceMedia.css";

const TableChangePrice = ({data}) => {

    // console.log(data)

    const tdValue = (command,currency = false) =>{
        if (currency){
            return(
                data[command][currency]?
                    <h5 style={{color:String(data[command][currency]).startsWith('-')?'red':'green'}}>
                        {String(data[command][currency]).startsWith('-')?'':'+'}
                        {data[command][currency].toLocaleString() + '%'}
                    </h5>:
                    <h5>?</h5>
            )
        }else {
            return(
                data[command]?
                    <h5 style={{color:String(data[command]).startsWith('-')?'red':'green'}}>
                        {String(data[command]).startsWith('-')?'':'+'}
                        {data[command].toLocaleString() + '%'}
                    </h5>:
                    <h5>?</h5>
            )
        }
    }

    return (
        <div className={`TableChangePrice ${getTheme(true)}`}>

            <h4>
                {getLang() === "rus" && "Изменение цены валюты за определенные прмежутки времени"}
                {getLang() === "eng" && "Change in the price of a currency over a certain period of time"}
            </h4>
            <p className="small">
                {getLang() === "rus" && "Точную цену монеты за определенную дату вы можете узнать в следующем блоке."}
                {getLang() === "eng" && "You can find out the exact price of the coin for a certain date in the next block."}
            </p>

            <div className="blocks-container">
                <div className={"inner"}>
                    <p className={"small"}>
                        {getLang() === "rus" && "1 час"}
                        {getLang() === "eng" && "1 hour"}
                    </p>
                    {tdValue(GL_CH_PR_CN_1H,'usd')}
                </div>

                <div className={"inner"}>
                    <p className={"small"}>
                        {getLang() === "rus" && "24 часа"}
                        {getLang() === "eng" && "24 hours"}
                    </p>
                    {tdValue(GL_CH_PR_CN_24H)}
                </div>

                <div className={"inner"}>
                    <p className={"small"}>
                        {getLang() === "rus" && "7 дней"}
                        {getLang() === "eng" && "7 days"}
                    </p>
                    {tdValue(GL_CH_PR_CN_7D)}
                </div>

                <div className={"inner"}>
                    <p className={"small"}>
                        {getLang() === "rus" && "14 дней"}
                        {getLang() === "eng" && "14 days"}
                    </p>
                    {tdValue(GL_CH_PR_CN_14D)}
                </div>

                <div className={"inner"}>
                    <p className={"small"}>
                        {getLang() === "rus" && "30 дней"}
                        {getLang() === "eng" && "30 days"}
                    </p>
                    {tdValue(GL_CH_PR_CN_30D)}
                </div>

                <div className={"inner"}>
                    <p className={"small"}>
                        {getLang() === "rus" && "60 дней"}
                        {getLang() === "eng" && "60 days"}
                    </p>
                    {tdValue(GL_CH_PR_CN_60D)}
                </div>

                <div className={"inner"}>
                    <p className={"small"}>
                        {getLang() === "rus" && "200 дней"}
                        {getLang() === "eng" && "200 days"}
                    </p>
                    {tdValue(GL_CH_PR_CN_200D)}
                </div>

                <div className={"inner"}>
                    <p className={"small"}>
                        {getLang() === "rus" && "1 год"}
                        {getLang() === "eng" && "1 year"}
                    </p>
                    {tdValue(GL_CH_PR_CN_1Y)}
                </div>
            </div>
        </div>
    );
};

export default TableChangePrice;
