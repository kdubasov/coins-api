import React, {useEffect, useState} from 'react';
import {useApi} from "../../../functions/useApi";
import {GLOBAL_API_COIN_MARKET_CHART} from "../../../constants/ApiCommand";
import {getNumRedAfterDoot} from "../../../functions/getNumRedAfterDoot";
import {Badge} from "react-bootstrap";
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

const GeneralGraph = ({id}) => {

    // 1 day from current time = 5 minute interval data
    // 1 - 90 days from current time = hourly data
    // above 90 days from current time = daily data (00:00 UTC)

    const [showValue,setShowValue] = useState([])
    //eslint-disable-next-line
    const [timeInterval,setTimeInterval] = useState(30)

    const data = useApi(GLOBAL_API_COIN_MARKET_CHART(id,timeInterval)).data;
    const dataMarketCaps = data['market_caps'];
    const dataVolumes = data['total_volumes'];
    const dataPrices = data['prices'];

    //get redact num price
    const getRedactNum = num =>{
        if (num < 3){
            return getNumRedAfterDoot(num,6).replace(',','')
        }else {
            return getNumRedAfterDoot(num,3).replace(',','')
        }
    };

    //get arr with objects for graph
    const getObjectGraph = (arr) => {
        const newArr = [];
        for (let elem in arr){
            newArr.push({
                date:
                    new Date(arr[elem][0]).getDate() + '.' +
                    new Date(arr[elem][0]).getMonth()+ '.' +
                    new Date(arr[elem][0]).getFullYear(),
                value:getRedactNum(arr[elem][1])
            })
        }
        setShowValue(newArr)
    }

    console.log(showValue)

    useEffect(() => {
        getObjectGraph(dataPrices)
        //eslint-disable-next-line
    }, [dataMarketCaps,dataVolumes,dataPrices]);

    // console.log(newArr)

    // console.log(data,'GLOBAL_API_COIN_MARKET_CHART')

    return (
        <div className={`GeneralGraph mb-3 mt-5`}>
            <Badge>График изменения рыночной капитализации/цены/объем торгов</Badge>

            <ResponsiveContainer className={'mt-3 mb-3'} width="100%" height={400}>
                <AreaChart
                    data={showValue}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <YAxis
                        width={80}
                        orientation={"right"}
                        hide={false}
                        //тут показываем мин и макс значение рафика
                        domain={['dataMin', 'dataMax']}
                    />
                    <Tooltip />
                    <XAxis dataKey="date" />
                    <Area type="natural" strokeWidth={2} dataKey="value" stroke="#0d6efd" fill="rgba(13, 110, 253, 0.5)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default GeneralGraph;
