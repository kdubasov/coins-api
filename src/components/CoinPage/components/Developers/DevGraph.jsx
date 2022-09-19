import React from 'react';
import {BarChart, CartesianGrid, ResponsiveContainer, YAxis, Legend, Bar} from "recharts";

const DevGraph = ({data}) => {

    return (
        <ResponsiveContainer className={'mt-3 mb-3'} width="100%" height={200}>
            <BarChart
                data={data.map(elem =>({commits:elem}))}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis
                    //тут показываем мин и макс значение рафика
                    domain={['dataMin', 'dataMax']}
                />
                <Legend />
                <Bar dataKey="commits" fill="#0d6efd" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default DevGraph;