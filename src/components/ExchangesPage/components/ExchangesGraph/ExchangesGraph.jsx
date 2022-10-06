import React, {useEffect, useState} from 'react';
import {Badge} from "react-bootstrap";
import {useApi} from "../../../../functions/useApi";
import {GlOBAL_API_EXCHANGES_ID_GRAPH} from "../../../../constants/ApiCommand";
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

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
                date:
                    new Date(data[elem][0]).getDate() + '.' +
                    new Date(data[elem][0]).getMonth()+ '.' +
                    new Date(data[elem][0]).getFullYear(),
                value:Number(data[elem][1])
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
                        hide={true}
                        //тут показываем мин и макс значение рафика
                        domain={['dataMin', 'dataMax']}
                    />
                    <Tooltip />
                    <XAxis dataKey="date" />
                    <Area type="natural" strokeWidth={3} dataKey="value" stroke="#0d6efd" fill="rgba(13, 110, 253, 0.5)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ExchangesGraph;