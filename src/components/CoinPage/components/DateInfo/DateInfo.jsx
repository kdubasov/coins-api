import React, {useRef, useState} from 'react';
import {Badge, Button, FormControl} from "react-bootstrap";
import DateInfoResult from "./DateInfoResult";
import {useApi} from "../../../../functions/useApi";
import {GLOBAL_API_COINS_HISTORY} from "../../../../constants/ApiCommand";
import {GL_MD} from "../../../../constants/ApiConstants";

const DateInfo = ({id}) => {

    //get date with format what we need
    const getDate = (reverse = false) => {
        const date = new Date();
        if (reverse){
            return (`${date.getFullYear()}-${(date.getMonth() + 1)<10?('0' + (date.getMonth() + 1)):(date.getMonth() + 1)}-${(date.getDate())<10?('0' + (date.getDate())):(date.getDate())}`)
        }else {
            return (`${(date.getDate())<10?('0' + (date.getDate())):(date.getDate())}-${(date.getMonth() + 1)<10?('0' + (date.getMonth() + 1)):(date.getMonth() + 1)}-${date.getFullYear()}`)
        }
    }

    //state for date
    const [date,setDate] = useState(getDate())

    //data from api
    const data = useApi(GLOBAL_API_COINS_HISTORY(id,date)).data;
    console.log(data,'GLOBAL_API_COINS_HISTORY');

    //ref for input with date
    const inpurRef = useRef();

    //redact date from input and get fetch to api
    const handleSendDate = () => {
        const date = inpurRef.current['value'];
        setDate(date.slice(8,10) + '-' + date.slice(5,7) + '-' + date.slice(0,4));
    }

    // console.log(data)

    return (
        <div className={`DateInfo p-3 my-3 border`}>
            <h4>
                <Badge>Узнать основную информацю о монете за любую дату</Badge>
            </h4>

            {/*input with button*/}
            <FormControl
                max={getDate('reverse')}
                ref={inpurRef}
                type={'date'}
            />
            <Button onClick={handleSendDate} size={'sm mt-1'}>Отправить</Button>

            {/*blcok with search result*/}
            <DateInfoResult data={data[GL_MD]} date={date} />
        </div>
    );
};

export default DateInfo;
