import React, {useEffect, useState} from 'react';
import {useApi} from "../../../../hooks/useApi";
import {GLOBAL_API_COIN_MARKET_CHART} from "../../../../constants/ApiCommand";
import {Alert} from "react-bootstrap";
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
import {getTheme} from "../../../../functions/Theme/getTheme";
import {getLang} from "../../../../functions/Lang/getLang";

//css
import "./GeneralGraph.css";
import "./GeneralGraphMedia.css";

const GeneralGraph = ({id,name,symbol}) => {

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
        if (Number(num) < 10){
            return Number(num).toFixed(5)
        }else {
            return Number(num).toFixed(2)
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
        <div className={`GeneralGraph ${getTheme(true)}`}>

            <h4>
                {getLang() === "eng" && `${name} Price Chart (${symbol}/USD)`}
                {getLang() === "rus" && ``}
            </h4>
            <p className="small">
                {getLang() === "rus" && "Послднее обновление "}
                {getLang() === "eng" && "Last updated at "}
                <strong>{getGraphDate(Date.now())}</strong>
                {getLang() === "rus" && ". Валюта для перевода USD."}
                {getLang() === "eng" && ". Currency in USD."}
            </p>

            {/*sort header*/}
            <div className="gen-graph-cont">
                <GeneralGraphHeader
                    timeInterval={timeInterval}
                    setTimeInterval={setTimeInterval}
                    getObjectGraph={getObjectGraph}
                    dataMarketCaps={dataMarketCaps}
                    dataVolumes={dataVolumes}
                    dataPrices={dataPrices}
                />
            </div>

            {//alert if value for graph false
                showValue.length <= 1 &&
                <Alert className={"p-2 small"}>
                    {getLang() === "eng" && "Information not yet updated or missing, please try again later."}
                    {getLang() === "rus" && "Информация пока не обновилась или отсутствует, попробуйте позже."}
                </Alert>
            }

            <div className="gen-graph-cont-mobile">
                <h6 className={"m-0"}>
                    {
                        getLang() === "rus" &&
                        "Для отображения графика вы должны открыть приложение " +
                        "на компбютере или планшете."
                    }
                    {
                        getLang() === "eng" &&
                        "To display the graph, you must open the application " +
                        "on your computer or tablet."
                    }
                </h6>
            </div>

            <ResponsiveContainer className={'gen-graph-cont mt-3 mb-3'} width="100%" height={400}>
                <AreaChart
                    //----------GRAPH----------
                    className={`graph-coin ${getTheme(true)}`}
                    data={showValue}
                >
                    <defs>
                        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="rgba(50, 108, 244, 0.75)" stopOpacity={1}/>
                            <stop offset="95%" stopColor="#326CF4" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid
                        strokeDasharray="5 0"
                        stroke={getTheme(true) === "dark" ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.15)"}
                    />
                    <YAxis
                        fontSize={12}
                        width={100}
                        orientation={"left"}
                        hide={false}
                        //тут показываем мин и макс значение рафика
                        domain={['dataMin', 'dataMax']}
                    />
                    <Tooltip cursor={{ stroke: "#326CF4", strokeWidth: 2, }} />
                    <XAxis dataKey="date" fontSize={12} />
                    <Area dot={false} type="natural" strokeWidth={2} dataKey="value" fill="url(#gradient)" stroke="#326CF4" />
                    <Brush
                        height={12}
                        fill={getTheme(true) === "dark" ? "#1A1A1A" : "#FFFFFF"}
                        stroke={"#326CF4"}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default GeneralGraph;
