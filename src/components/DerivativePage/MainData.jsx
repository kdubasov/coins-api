import React from 'react';
import {
    GL_DEFI_TR_24H_BTC, GL_EXC_YEAR,
    GL_FUT_PAIRS,
    GL_IMAGE,
    GL_NAME,
    GL_OP_INT_BTC,
    GL_PER_PAIRS,
    GL_URL
} from "../../constants/ApiConstants";
import {getLang} from "../../functions/Lang/getLang";

//css
import "./MainDataDerivatives.css";
import {getTheme} from "../../functions/Theme/getTheme";

const MainData = ({data}) => {

    // console.log(data,'for derivative');

    const getInnerBlock = (text,value,priceValue = false) => {
        if(data[value] || data[value] === 0){
            return (
                <div className={"inner"}>
                    <h5 className={'m-0'}>
                        {Number(data[value]).toLocaleString("RU")}
                        {priceValue}
                    </h5>
                    <p className={'m-0 small'}>{text}</p>
                </div>
            )
        }
        return false
    }

    return (
        <div className={`MainData derivatives ${getTheme(true)}`}>
            <header>
                <span className={'logo-cont'}>
                    <img className={"logo"} src={data[GL_IMAGE]} alt={data[GL_NAME]} />
                    <h4>{data[GL_NAME]}</h4>
                </span>

                <h5 className={"m-0"}>
                    <a href={data[GL_URL]} target={"_blank"} rel={"noreferrer"}>
                        {getLang() === "eng" && "Go official website"}
                        {getLang() === "rus" && "Перейти на оф.сайт"}
                    </a>
                </h5>
            </header>

            <div className={'deriv-blocks-container'}>
                {getInnerBlock(getLang() === "eng" ? '24h Volume' : 'Объем трогов 24ч',GL_DEFI_TR_24H_BTC,'BTC')}
                {getInnerBlock(getLang() === "eng" ? 'Perpetual Contracts' : 'Бессрочные контракты',GL_FUT_PAIRS,)}
                {getInnerBlock(
                    getLang() === "eng" ? 'Amount of open positions in 24 hours' : 'Сумма открытых позиций за 24 часа',
                    GL_OP_INT_BTC,
                    'BTC'
                )}
                {getInnerBlock(getLang() === "eng" ? 'Pairs' : 'Пары',GL_PER_PAIRS,)}
                {getInnerBlock(getLang() === "eng" ? 'Year of foundation' : 'Год основания',GL_EXC_YEAR,)}
            </div>
        </div>
    );
};

export default MainData;
