import React, {useEffect, useState} from 'react';
import {YAxis, LineChart, Line, ResponsiveContainer} from "recharts";

const PaginateGraph = ({data}) => {

    const [dataState,setDataState] = useState({})

    //for get arr with objects for graph
    const getObjectForGraph = (data) =>{
        let newArr = [];

        const startDelete = data.length - 72;
        const sortData = data.slice(startDelete,data.length+1);
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