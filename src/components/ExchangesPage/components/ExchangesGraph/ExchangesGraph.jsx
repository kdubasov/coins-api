import React, {useEffect, useState} from 'react';
import {Badge} from "react-bootstrap";
import {useApi} from "../../../../functions/useApi";
import {GlOBAL_API_EXCHANGES_ID_GRAPH} from "../../../../constants/ApiCommand";
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {getGraphDate} from "../../../../functions/getGraphDate";

const ExchangesGraph = ({id}) => {

    const [dataObjGraph,setDataObjGraph] = useState([])

    const data = useApi(GlOBAL_API_EXCHANGES_ID_GRAPH(id)).data;
    // console.log(data,'EXCH GRAPH')

    //for get arr with objects for graph
    const getObject = () =>{
        let newArr = [];
        //без сортировок
        for (let elem in data){
            newArr.push({
                date:getGraphDate(data[elem][0]),
                value:Number(String(data[elem][1]).slice(0,String(data[elem][1]).indexOf('.') + 2)),
            })
        }
        setDataObjGraph(newArr)
    }

    // console.log(dataObjGraph)

    useEffect(() =>{
        getObject()
        //eslint-disable-next-line
    },[data])

    return (
        <div className={`ExchangesGraph pt-4 pb-5`}>
            <Badge>График изменения рыночной капитализации биржи</Badge>

            <ResponsiveContainer className={'mt-3 mb-3'} width="100%" height={250}>
                <AreaChart
                    data={dataObjGraph}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <YAxis
                        fontSize={10}
                        width={80}
                        hide={false}
                        //тут показываем мин и макс значение рафика
                        domain={['dataMin', 'dataMax']}
                    />
                    <Tooltip />
                    <XAxis dataKey="date" fontSize={12} />
                    <Area type="natural" strokeWidth={3} dataKey="value" stroke="#0d6efd" fill="rgba(13, 110, 253, 0.5)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ExchangesGraph;