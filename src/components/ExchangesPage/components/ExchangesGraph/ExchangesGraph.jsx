import React, {useEffect, useState} from 'react';
import {Alert} from "react-bootstrap";
import {useApi} from "../../../../hooks/useApi";
import {GlOBAL_API_EXCHANGES_ID_GRAPH} from "../../../../constants/ApiCommand";
import {Area, AreaChart, Brush, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {getGraphDate} from "../../../../functions/getGraphDate";
import ExchangesGraphSelect from "./ExchangesGraphSelect";
import {getNumRedAfterDoot} from "../../../../functions/getNumRedAfterDoot";

//css
import "./ExchangesGraph.css";
import {getLang} from "../../../../functions/Lang/getLang";
import {getTheme} from "../../../../functions/Theme/getTheme";

const ExchangesGraph = ({id}) => {

    const [dataObjGraph,setDataObjGraph] = useState([]);

    const [daysShow,setDaysShow] = useState(7);

    const data = useApi(GlOBAL_API_EXCHANGES_ID_GRAPH(id,daysShow)).data;
    // console.log(data,'EXCH GRAPH');

    //for get arr with objects for graph
    const getObject = () =>{
        let newArr = [];
        //без сортировок
        for (let elem in data){
            newArr.push({
                date:getGraphDate(data[elem][0]),
                value:getNumRedAfterDoot(data[elem][1],3),
            })
        }
        setDataObjGraph(newArr)
    }

    // console.log(dataObjGraph,'ExchangesGraph')

    useEffect(() =>{
        getObject()
        //eslint-disable-next-line
    },[data])

    return (
        <div className={`ExchangesGraph ${getTheme(true)}`}>
            <h5>
                {getLang() === "rus" && "График рыночной капитализации биржи. (BTC)"}
                {getLang() === "eng" && "Market cap graph of the exchange. (BTC)"}
                <ExchangesGraphSelect daysShow={daysShow} setDaysShow={setDaysShow} />
            </h5>

            {//check data for graph
                dataObjGraph.length &&
                (!dataObjGraph[0].value && !dataObjGraph[1].value) &&
                <Alert className={'small mt-3 p-2'}>
                    Данные об изменения рыночной капитализации для данной биржи не найдены, попробуйте позже.
                </Alert>
            }

            <ResponsiveContainer className={'mt-3 mb-3'} width="100%" height={350}>
                <AreaChart
                    data={dataObjGraph}
                >
                    <CartesianGrid
                        strokeDasharray="5 0"
                        stroke={getTheme(true) === "dark" ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.15)"}
                    />
                    <YAxis
                        fontSize={10}
                        width={80}
                        hide={false}
                        //тут показываем мин и макс значение рафика
                        domain={['dataMin', 'dataMax']}
                    />
                    <Tooltip cursor={{ stroke: "#326CF4", strokeWidth: 1, }} />
                    <XAxis dataKey="date" fontSize={10} />
                    <Area type="natural" strokeWidth={2} dataKey="value" stroke="#0d6efd" fill="#326CF4" />
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

export default ExchangesGraph;
