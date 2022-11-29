import React from 'react';
import {getTheme} from "../../../../functions/Theme/getTheme";
import {
    GL_ATH, GL_ATH_CH_PC, GL_ATH_DATE, GL_ATL, GL_ATL_CH_PC, GL_ATL_DATE,
    GL_CH_PR_CN_24H, GL_CUR_PRICE, GL_MK, GL_MKCH_24H_PR, GL_TT_MK, GL_TT_VOL,
    GL_VS_OBR
} from "../../../../constants/ApiConstants";
import {useApi} from "../../../../hooks/useApi";
import {GLOBAL_API_GLOBAL_COMMAND} from "../../../../constants/ApiCommand";
import {getNumRedAfterDoot} from "../../../../functions/getNumRedAfterDoot";
import {getLang} from "../../../../functions/Lang/getLang";

//css
import "./PriceStatistic.css";
import {Badge} from "react-bootstrap";

const PriceStatistic = ({data,title}) => {

    // console.log(data,'PriceStatistic');

    //general data query
    const generalData = useApi(GLOBAL_API_GLOBAL_COMMAND).data.data;
    // console.log(generalData,"GLOBAL DATA IN PriceStatistic");

    //check value if this false return "-"
    const handleCheckValue = (value,nolocalStr) => {
        if (value){
            return nolocalStr?value:value.toLocaleString()
        }
        return '-'
    }

    //percentage of total market cup
    const getPercentOfTotalMk = () => {
        if (
            generalData &&
            data[GL_MK]['usd'] &&
            generalData[GL_TT_MK]['usd']
        ){
            const dividerTTMK = data[GL_MK]['usd']/generalData[GL_TT_MK]['usd'];
            return dividerTTMK * 100;
        }
        return false;
    }

    //get blocks with absolute max and min
    const getAthAtlBlock = (value,valuePc,valueDate) =>{
        if (value && valuePc && valueDate){
            return (
                <p className={"right abs"}>
                    <strong>
                        {handleCheckValue(data[value]['usd']) + '$'}
                        {
                            data[valuePc]['usd'] &&
                            <Badge bg={String(data[valuePc]['usd']).startsWith('-') ? 'danger' : 'success'}>
                                {String(data[valuePc]['usd']).startsWith('-')?' ' : ' +'}
                                {data[valuePc]['usd'].toLocaleString() + '%'}
                            </Badge>
                        }
                    </strong>
                    <small style={{textAlign:"right"}}>
                        {getLang() === "eng" && "Relevant on "}
                        {getLang() === "rus" && "Актуально на "}
                        {handleCheckValue(data[valueDate]['usd'])?.slice(0,10)}
                    </small>
                </p>
            )
        }
        return '-'
    }

    return (
        <div className={`PriceStatistic ${getTheme(true)}`}>
            <h4>
                {getLang() === "eng" && `${title} Price Statistics`}
                {getLang() === "rus" && `Статистика цены ${title}`}
            </h4>
            <p className={"small"}>
                {getLang() === "eng" && "Basic information about the price of this coin."}
                {getLang() === "rus" && "Основная ифнормация о цене данной монете."}
            </p>

            <div className={`cont-blocks-ps ${getTheme(true)}`}>
                <div className={"inner"}>
                    <p className="small">
                        {getLang() === "eng" && "Price:"}
                        {getLang() === "rus" && "Цена:"}
                    </p>

                    <p className={"right"}>
                        <strong>
                            {handleCheckValue(data[GL_CUR_PRICE]['usd']) + '$'}
                        </strong>
                        {
                            data[GL_CH_PR_CN_24H] &&
                            <Badge bg={String(data[GL_CH_PR_CN_24H]).startsWith('-') ? 'danger' : 'success'}>
                                {!String(data[GL_CH_PR_CN_24H]).startsWith('-') && '+'}
                                {data[GL_CH_PR_CN_24H].toLocaleString() + '% (24ч)'}
                            </Badge>
                        }
                    </p>
                </div>

                <div className={"inner"}>
                    <p className="small">
                        {getLang() === "eng" && "Market cap:"}
                        {getLang() === "rus" && "Рыночная капитализация:"}
                    </p>
                    <p className="right">
                        <strong>
                            {handleCheckValue(data[GL_MK]['usd']) + '$'}
                        </strong>
                        {
                            data[GL_MKCH_24H_PR] &&
                            <Badge bg={String(data[GL_MKCH_24H_PR]).startsWith('-') ? 'danger' : 'success'}>
                                {!String(data[GL_MKCH_24H_PR]).startsWith('-') && '+'}
                                {data[GL_MKCH_24H_PR].toLocaleString() + '% (24ч)'}
                            </Badge>
                        }
                    </p>
                </div>

                <div className={"inner"}>
                    <p className="small">
                        {getLang() === "eng" && "Domination by mkt cap:"}
                        {getLang() === "rus" && "Доминирование по рын. кап:"}
                    </p>
                    <p className="right">
                        <strong>
                            {getPercentOfTotalMk() ? (getNumRedAfterDoot(getPercentOfTotalMk(),3) + '%') : '-'}
                        </strong>
                    </p>
                </div>

                <div className={"inner"}>
                    <p className="small">
                        {getLang() === "eng" && "24h Volume:"}
                        {getLang() === "rus" && "Объем торгов:"}
                    </p>
                    <p className={"right"}>
                        <strong>
                            {handleCheckValue(data[GL_TT_VOL]['usd']) + '$'}
                        </strong>
                    </p>
                </div>

                <div className={"inner"}>
                    <p className="small">
                        {getLang() === "eng" && "Total in circulation:"}
                        {getLang() === "rus" && "Всего в обращении:"}
                    </p>
                    <p className={"right"}>
                       <strong>
                           {handleCheckValue(data[GL_VS_OBR])}
                       </strong>
                    </p>
                </div>

                <div className={"inner"}>
                    <p className="small">
                        {getLang() === "eng" && "Abs. maximum:"}
                        {getLang() === "rus" && "Абс. максимум:"}
                    </p>
                    {getAthAtlBlock(GL_ATH,GL_ATH_CH_PC,GL_ATH_DATE)}
                </div>

                <div className={"inner"}>
                    <p className="small">
                        {getLang() === "eng" && "Abs. minimum:"}
                        {getLang() === "rus" && "Абс. минимум:"}
                    </p>
                    {getAthAtlBlock(GL_ATL,GL_ATL_CH_PC,GL_ATL_DATE)}
                </div>
            </div>
        </div>
    );
};

export default PriceStatistic;
