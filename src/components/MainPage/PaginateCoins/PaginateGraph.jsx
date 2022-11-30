import React, {useEffect, useState} from 'react';
import {YAxis, LineChart, Line, ResponsiveContainer} from "recharts";

const PaginateGraph = ({data}) => {

    const [dataState,setDataState] = useState({})

    //for get arr with objects for graph
    const getObjectForGraph = (data) =>{
        let newArr = [];

        const startDelete = data.length - 72;
        const sortData = data.slice(startDelete, data.length + 1);
        for (let elem in sortData){
            newArr.push({x:sortData[elem]});
        }
        setDataState(newArr);
    }

    useEffect(() =>{
        getObjectForGraph(data);
    },[data])

    //check data for graph if this false return
    if (!dataState.length){
        return false
    }

    // console.log(dataState)

    return (
        <div className={`PaginateGraph`}>
            <ResponsiveContainer width="100%" height={50}>
                <LineChart data={dataState}>
                    <defs>
                        <linearGradient id="fill-red" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="red" stopOpacity={1}/>
                            <stop offset="95%" stopColor="red" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="fill-green" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="green" stopOpacity={1}/>
                            <stop offset="95%" stopColor="green" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <YAxis
                        hide={true}
                        //тут показываем мин и макс значение графика
                        domain={['dataMin', 'dataMax']}
                    />

                    <Line
                        dot={false}
                        type="natural"
                        dataKey="x"
                        stroke={(dataState[0]["x"]) >= (dataState[dataState.length - 1]["x"]) ? "red" : "green"}
                        strokeWidth={1.5}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PaginateGraph;
