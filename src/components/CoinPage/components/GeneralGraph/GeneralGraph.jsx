import React, {useEffect, useState} from 'react';
import {useApi} from "../../../../hooks/useApi";
import {GLOBAL_API_COIN_MARKET_CHART} from "../../../../constants/ApiCommand";
import {Alert, Badge} from "react-bootstrap";
import {
    Brush,
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import {getGraphDate} from "../../../../functions/getGraphDate";
import GeneralGraphHeader from "./GeneralGraphHeader";
import {GL_MKS, GL_PRICES, GL_TT_VOLS} from "../../../../constants/ApiConstants";


const GeneralGraph = ({id}) => {

    // 1 day from current time = 5 minute interval data
    // 1 - 90 days from current time = hourly data
    // above 90 days from current time = daily data (00:00 UTC)

    const [showValue,setShowValue] = useState([])
    // console.log(showValue)

    //interval for fetch from api (default = 1day)
    const [timeInterval,setTimeInterval] = useState(1)

    //main data
    const data = useApi(GLOBAL_API_COIN_MARKET_CHART(id,timeInterval)).data;
    // console.log(data,'GLOBAL_API_COIN_MARKET_CHART');

    //categories for data
    const dataMarketCaps = data[GL_MKS];
    const dataVolumes = data[GL_TT_VOLS];
    const dataPrices = data[GL_PRICES];

    //get redact num price
    const getRedactNum = num =>{
        if (String(num).indexOf('.') !== -1){
            if (Number(num) < 10){
                return String(num).slice(0,String(num).indexOf('.') + 5);
            }else {
                return String(num).slice(0,String(num).indexOf('.') + 3);
            }
        }else{
            return num
        }
    };

    //get arr with objects for graph
    const getObjectGraph = (arr) => {
        const newArr = [];
        for (let elem in arr){
            newArr.push({
                date:getGraphDate(arr[elem][0]),
                value:Number(getRedactNum(arr[elem][1])),
            })
        }
        setShowValue(newArr)
    }

    useEffect(() => {
        getObjectGraph(dataPrices)
        //eslint-disable-next-line
    }, [data]);



    return (
        <div className={`GeneralGraph mb-3 mt-5`}>
            <h4>
                <Badge bg={"secondary"} className={'fw-light'}>
                    График изменения рыночной капитализации/цены/объема торгов
                </Badge>
            </h4>

            <GeneralGraphHeader
                timeInterval={timeInterval}
                setTimeInterval={setTimeInterval}
                getObjectGraph={getObjectGraph}
                dataMarketCaps={dataMarketCaps}
                dataVolumes={dataVolumes}
                dataPrices={dataPrices}
            />

            {showValue.length <= 1 && <Alert>Информация пока не обновилась или отсутствует, попробуйте позже.</Alert>}

            <ResponsiveContainer className={'mt-3 mb-3'} width="100%" height={400}>
                <AreaChart
                    data={showValue}
                >
                    <defs>
                        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#0d6efd" stopOpacity={1}/>
                            <stop offset="95%" stopColor="#0d6efd" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="5 5" />
                    <YAxis
                        fontSize={12}
                        width={120}
                        orientation={"left"}
                        hide={false}
                        //тут показываем мин и макс значение рафика
                        domain={['dataMin', 'dataMax']}
                    />
                    <Tooltip cursor={{ stroke: 'red', strokeWidth: 1, }} />
                    <XAxis dataKey="date" fontSize={12} />
                    <Area dot={false} type="natural" strokeWidth={2} dataKey="value" fill="url(#gradient)" stroke="#0d6efd" />
                    <Brush height={15}/>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default GeneralGraph;
