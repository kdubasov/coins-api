import React from 'react';
import {Form} from "react-bootstrap";

const ExchangesGraphSelect = ({daysShow,setDaysShow}) => {

    //array with data what we can check in graph
    const daysArr = [
        {num:1,text:'1 день'},
        {num:7,text:'1 неделя'},
        {num:14,text:'2 недели'},
        {num:30,text:'1 месяц'},
        {num:60,text:'2 месяца'},
        {num:150,text:'150 дней'},
        {num:365,text:'1 год'},
        ];

    return (
        <Form.Select value={daysShow} onChange={e => setDaysShow(e.target.value)} size={"sm"} className={'mx-2 w-25'}>
            {
                daysArr.map(day => (
                    <option key={day.num} value={day.num}>{day.text}</option>
                ))
            }
        </Form.Select>
    );
};

export default ExchangesGraphSelect;
