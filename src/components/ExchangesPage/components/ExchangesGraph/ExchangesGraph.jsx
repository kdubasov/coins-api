import React, {useEffect, useState} from 'react';
import {Alert} from "react-bootstrap";
import {useApi} from "../../../../hooks/useApi";
import {GlOBAL_API_EXCHANGES_ID_GRAPH} from "../../../../constants/ApiCommand";
import {
    Brush,
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import {getGraphDate} from "../../../../functions/getGraphDate";
import ExchangesGraphSelect from "./ExchangesGraphSelect";
import {getNumRedAfterDoot} from "../../../../functions/getNumRedAfterDoot";
import {getLang} from "../../../../functions/Lang/getLang";
import {getTheme} from "../../../../functions/Theme/getTheme";

//css
import "./ExchangesGraph.css";
import "./ExchangesGraphMedia.css";

const ExchangesGraph = ({id}) => {

    //sort grapg object
    const [dataObjGraph,setDataObjGraph] = useState([]);

    //how day show
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
                value:Number(getNumRedAfterDoot(data[elem][1],3)),
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
                <strong>
                    {getLang() === "rus" && "График рыночной капитализации биржи. (BTC)"}
                    {getLang() === "eng" && "Market cap graph of the exchange. (BTC)"}
                </strong>
                <div className={'exch-select-container'}>
                    <ExchangesGraphSelect daysShow={daysShow} setDaysShow={setDaysShow} />
                </div>
            </h5>

            {//check data for graph
                dataObjGraph.length &&
                (!dataObjGraph[0].value && !dataObjGraph[1].value) &&
                <Alert className={'small mt-3 p-2'}>
                    Данные об изменения рыночной капитализации для данной биржи не найдены, попробуйте позже.
                </Alert>
            }

            <div className="mobile-block-exch">
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

            <ResponsiveContainer className={'exch-graph-container'} width="100%" height={300}>
                <LineChart
                    data={dataObjGraph}
                >
                    <CartesianGrid
                        strokeDasharray="5 0"
                        stroke={getTheme(true) === "dark" ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.15)"}
                    />
                    <YAxis
                        fontSize={10}
                        width={70}
                        hide={false}
                        //тут показываем мин и макс значение рафика
                        domain={['dataMin', 'dataMax']}
                    />
                    <Tooltip cursor={{ stroke: "#326CF4", strokeWidth: 1, }} />
                    <XAxis dataKey="date" fontSize={10} />
                    <Line type="natural" strokeWidth={3} dataKey="value" stroke="#0d6efd" />
                    <Brush
                        height={12}
                        fill={getTheme(true) === "dark" ? "#1A1A1A" : "#FFFFFF"}
                        stroke={"#326CF4"}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ExchangesGraph;
