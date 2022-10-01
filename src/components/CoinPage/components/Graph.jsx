import React, {useEffect, useState} from 'react';
import {Area, CartesianGrid, AreaChart, Tooltip, YAxis, ResponsiveContainer} from "recharts";
import {Button} from "react-bootstrap";

const Graph = ({data}) => {

    //main data for graph
    const [dataObj,setDataObj] = useState(null)

    //for get arr with objects for graph
    const getObject = (data,hoursSort) =>{
        let newArr = [];
        if (hoursSort){//для сортировки по времени
            const startDelete = data.length - hoursSort;
            const sortData = data.slice(startDelete,data.length+1);
            for (let elem in sortData){
                newArr.push({x:sortData[elem]})
            }
        }else {//без сортировок
            for (let elem in data){
                newArr.push({x:data[elem]})
            }
        }
        setDataObj(newArr)
    }

    useEffect(() =>{

        getObject(data["price"])

    },[data])

    // console.log(dataObj,'graph value')

    return (
        <>
            <header className={"mt-4 mb-2"} style={{display:"flex",justifyContent:"space-between"}}>
                <Button disabled={true}>
                    График изменения цены за
                    {' ' + Math.round((dataObj ?? data).length/24) + 'дн '}
                    /
                    {' ' + (dataObj ?? data).length + 'ч'}
                </Button>
                <span>
                    <Button onClick={() => getObject(data["price"],data["price"].length)}>7д</Button>
                    <Button onClick={() => getObject(data["price"],24 * 3)}>3д</Button>
                    <Button onClick={() => getObject(data["price"],24)}>24ч</Button>
                    <Button onClick={() => getObject(data["price"],12)}>12ч</Button>
                    <Button onClick={() => getObject(data["price"],6)}>6ч</Button>
                </span>
            </header>

            <ResponsiveContainer className={'mt-3 mb-3'} width="100%" height={250}>
                <AreaChart
                    data={dataObj}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <YAxis
                        hide={true}
                        //тут показываем мин и макс значение рафика
                        domain={['dataMin', 'dataMax']}
                    />
                    <Tooltip />
                    <Area type="natural" strokeWidth={3} dataKey="x" stroke="#0d6efd" fill="rgba(13, 110, 253, 0.5)" />
                </AreaChart>
            </ResponsiveContainer>
        </>
    );
};

export default Graph;