import React from 'react';
import {getTheme} from "../../../functions/Theme/getTheme";
import {Badge, Table} from "react-bootstrap";
import {
    GL_ATH, GL_ATH_CH_PC, GL_ATH_DATE, GL_ATL, GL_ATL_CH_PC, GL_ATL_DATE,
    GL_CH_PR_CN_24H,
    GL_CUR_PRICE,
    GL_HIGH_24H,
    GL_LOW_24H,
    GL_MK, GL_MKCH_24H_PR, GL_TT_MK, GL_TT_VOL,
    GL_VS_OBR
} from "../../../constants/ApiConstants";
import {useApi} from "../../../hooks/useApi";
import {GLOBAL_API_GLOBAL_COMMAND} from "../../../constants/ApiCommand";
import {getNumRedAfterDoot} from "../../../functions/getNumRedAfterDoot";

const TableMarketDataMore = ({data,title}) => {

    // console.log(data,'TableMarketDataMore');

    //general data query
    const generalData = useApi(GLOBAL_API_GLOBAL_COMMAND).data.data;
    // console.log(generalData,"GLOBAL DATA IN TableMarketDataMore");

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
                <>
                    <strong>
                        {' ' + handleCheckValue(data[value]['usd']) + '$'}
                        {
                            data[valuePc]['usd'] &&
                            <i style={{color:String(data[valuePc]['usd']).startsWith('-') ? 'red' : 'green'}}>
                                {String(data[valuePc]['usd']).startsWith('-')?' ' : ' +'}
                                {data[valuePc]['usd'].toLocaleString() + '%'}
                            </i>
                        }
                    </strong>
                    <br />
                    <small>
                        {'Актуально на ' + handleCheckValue(data[valueDate]['usd'])}
                    </small>
                </>
            )
        }
        return '-'
    }

    return (
        <div className={"TableMarketDataMore w-100 p-2 border"}>
            <h4>
                <Badge>Статистика цены {title}</Badge>
            </h4>

            <Table className={getTheme(true)}>
                <tbody>
                    <tr className={"small"}>
                        <td>
                            Цена:
                            <strong>
                                {' ' + handleCheckValue(data[GL_CUR_PRICE]['usd']) + '$'}
                                {
                                    data[GL_CH_PR_CN_24H] &&
                                        <i style={{color:String(data[GL_CH_PR_CN_24H]).startsWith('-') ? 'red' : 'green'}}>
                                            {String(data[GL_CH_PR_CN_24H]).startsWith('-')?' ' : ' +'}
                                            {data[GL_CH_PR_CN_24H].toLocaleString() + '% (24ч)'}
                                        </i>
                                }
                            </strong>
                        </td>
                        <td>
                            Мин/Макс (24ч):
                            {
                                (data[GL_LOW_24H]["usd"] && data[GL_HIGH_24H]["usd"])?
                                    <strong> {data[GL_LOW_24H]["usd"].toLocaleString() + '$'} / {data[GL_HIGH_24H]["usd"].toLocaleString() + '$'}</strong>
                                    :
                                    <strong> -</strong>
                            }
                        </td>
                    </tr>

                    <tr className={"small"}>
                        <td>
                            Рыночная капитализация:
                            <strong>
                                {' ' + handleCheckValue(data[GL_MK]['usd']) + '$'}
                                {
                                    data[GL_MKCH_24H_PR] &&
                                    <i style={{color:String(data[GL_MKCH_24H_PR]).startsWith('-') ? 'red' : 'green'}}>
                                        {String(data[GL_MKCH_24H_PR]).startsWith('-')?' ' : ' +'}
                                        {data[GL_MKCH_24H_PR].toLocaleString() + '% (24ч)'}
                                    </i>
                                }
                            </strong>
                        </td>
                        <td>
                            Доминирование по рыночной капитализации:
                            <strong>
                                {
                                    getPercentOfTotalMk() ?
                                        (' ' + getNumRedAfterDoot(getPercentOfTotalMk(),3) + '%'):
                                        ' -'
                                }
                            </strong>
                        </td>
                    </tr>

                    <tr className={"small"}>
                        <td>
                            Объем торгов:
                            <strong>
                                {' ' + handleCheckValue(data[GL_TT_VOL]['usd']) + '$'}
                            </strong>
                        </td>
                        <td>
                            Всего в обращении:
                            <strong>
                                {' ' + handleCheckValue(data[GL_VS_OBR])}
                            </strong>
                        </td>
                    </tr>

                    <tr className={"small"}>
                        <td>
                            Абсолютный максимум:
                            {getAthAtlBlock(GL_ATH,GL_ATH_CH_PC,GL_ATH_DATE)}
                        </td>
                        <td>
                            Абсолютный минимум:
                            {getAthAtlBlock(GL_ATL,GL_ATL_CH_PC,GL_ATL_DATE)}
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default TableMarketDataMore;
