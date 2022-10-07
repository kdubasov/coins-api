import React, {useEffect, useState} from 'react';
import {Area, CartesianGrid, AreaChart, Tooltip, YAxis, ResponsiveContainer} from "recharts";
import {Button, ButtonGroup} from "react-bootstrap";
import {getNumRedAfterDoot} from "../../../functions/getNumRedAfterDoot";

const PriceGraph = ({data}) => {

    //main data for graph
    const [dataObj,setDataObj] = useState(null)

    //get num (price) for graph
    const getRedactNum = num =>{
        if (num < 3){
            return getNumRedAfterDoot(num,6).replace(',','')
        }else {
            return getNumRedAfterDoot(num,3).replace(',','')
        }
    }

    //for get arr with objects for graph
    const getObjectGraph = (data,hoursSort) => {
        let newArr = [];
        if (hoursSort){//для сортировки по времени
            const startDelete = data.length - hoursSort;
            const sortData = data.slice(startDelete,data.length+1);
            for (let elem in sortData){
                newArr.push({price:getRedactNum(sortData[elem])})
            }
        }else {//без сортировок
            for (let elem in data){
                newArr.push({price:getRedactNum(data[elem])})
            }
        }
        setDataObj(newArr)
    }

    //for get button for sort graph (days/hours)
    const getButtonTimeInterval = (text,hours) => {
        return (
            <Button
                onClick={() => getObjectGraph(data["price"],hours)}
            >
                {text}
            </Button>
        )
    }

    useEffect(() =>{

        getObjectGraph(data["price"])
        //eslint-disable-next-line
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
                <ButtonGroup>
                    {getButtonTimeInterval('7д',data["price"].length)}
                    {getButtonTimeInterval('3д',24*3)}
                    {getButtonTimeInterval('24ч',24)}
                    {getButtonTimeInterval('12ч',12)}
                    {getButtonTimeInterval('6ч',6)}
                </ButtonGroup>
            </header>

            <ResponsiveContainer className={'mt-3 mb-3'} width="100%" height={250}>
                <AreaChart
                    data={dataObj}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <YAxis
                        width={80}
                        orientation={"right"}
                        hide={false}
                        //тут показываем мин и макс значение рафика
                        domain={['dataMin', 'dataMax']}
                    />
                    <Tooltip />
                    <Area type="natural" strokeWidth={3} dataKey="price" stroke="#0d6efd" fill="rgba(13, 110, 253, 0.5)" />
                </AreaChart>
            </ResponsiveContainer>
        </>
    );
};

export default PriceGraph;