import React from 'react';
import {BarChart, CartesianGrid, ResponsiveContainer, YAxis, Legend, Bar} from "recharts";
import {getTheme} from "../../../../functions/Theme/getTheme";
import {getLang} from "../../../../functions/Lang/getLang";

const DevGraph = ({data}) => {

    // console.log(data,'DevGraph');

    return (
        <div className={'DevGraph'}>
            <h4>
                {getLang() === "eng" && "Graph of commits for the last 4 weeks"}
                {getLang() === "rus" && "График коммитов за последние 4 недели"}
            </h4>

            <ResponsiveContainer width="100%" height={250}>
                <BarChart
                    data={data.map(elem =>({commits:elem}))}
                >
                    <CartesianGrid
                        strokeDasharray="3 0"
                        stroke={getTheme(true) === "dark" ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.15)"}
                        vertical={false}
                    />
                    <YAxis
                        fontSize={12}
                        width={20}
                        orientation={"left"}
                        hide={false}
                        //тут показываем мин и макс значение рафика
                        domain={['dataMin', 'dataMax']}
                    />
                    <Legend />
                    <Bar
                        dataKey="commits"
                        fill={getTheme(true) === "dark" ? "#DCDCDC" : "#373737"}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DevGraph;
