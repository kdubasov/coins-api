import React, {useEffect, useState} from 'react';
import {Area, CartesianGrid, AreaChart, Tooltip, YAxis, ResponsiveContainer} from "recharts";

const Graph = ({data}) => {

    const [dataObj,setDataObj] = useState(null)

    useEffect(() =>{

        //for get arr with objects for graph
        const getObject = data =>{
            let newArr = [];
            for (let elem in data){
                newArr.push({x:data[elem]})
            }
            setDataObj(newArr)
        }
        getObject(data["price"])

    },[data])

    // console.log(dataObj,'graph value')

    return (
        <ResponsiveContainer width="100%" height={300}>
            <AreaChart
                data={dataObj}
            >
                <CartesianGrid strokeDasharray="1 1" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="x" stroke="#0d6efd" fill="rgba(13, 110, 253, 0.5)" />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default Graph;