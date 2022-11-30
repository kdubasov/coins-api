import React, {useRef, useState} from 'react';
import {Alert, FormControl} from "react-bootstrap";
import DateInfoResult from "./DateInfoResult";
import {useApi} from "../../../../hooks/useApi";
import {GLOBAL_API_COINS_HISTORY} from "../../../../constants/ApiCommand";
import {GL_MD} from "../../../../constants/ApiConstants";
import {getTheme} from "../../../../functions/Theme/getTheme";

//css
import "./DateInfo.css";
import {getLang} from "../../../../functions/Lang/getLang";

const DateInfo = ({id,name}) => {

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
    // console.log(data,'GLOBAL_API_COINS_HISTORY');

    //ref for input with date
    const inpurRef = useRef();

    //redact date from input and get fetch to api
    const handleSendDate = () => {
        const date = inpurRef.current['value'];
        setDate(date.slice(8,10) + '-' + date.slice(5,7) + '-' + date.slice(0,4));
    }

    // console.log(data)

    return (
        <div className={`DateInfo ${getTheme(true)}`}>
            <h4>
                {getLang() === "eng" && `${name} USD (Historical Data)`}
                {getLang() === "rus" && `${name} USD (Исторические данные)`}
            </h4>
            <p className="small">
                {getLang() === "rus" && "Поиск основной информации о монете за любую дату."}
                {getLang() === "eng" && "Search for basic information about a coin for any date."}
            </p>

            {/*input with button*/}
            <FormControl
                max={getDate('reverse')}
                ref={inpurRef}
                type={'date'}
                onChange={handleSendDate}
            />

            {/*blcok with search result*/}
            {
                (data[GL_MD] && Object.values(data[GL_MD]).length) ?
                    <DateInfoResult data={data[GL_MD]} date={date} />:
                    <Alert className={"mt-2 p-2 small"}>
                        {getLang() === "eng" && `No information found for ${date}, please try another date.`}
                        {getLang() === "rus" && `Информация за ${date} не найдена, попробуйте другую дату.`}
                    </Alert>
            }
        </div>
    );
};

export default DateInfo;
