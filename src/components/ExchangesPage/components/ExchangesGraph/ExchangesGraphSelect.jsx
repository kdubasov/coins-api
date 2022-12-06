import React from 'react';
import {Button, ButtonGroup} from "react-bootstrap";
import {getLang} from "../../../../functions/Lang/getLang";
import {getTheme} from "../../../../functions/Theme/getTheme";

const ExchangesGraphSelect = ({daysShow,setDaysShow}) => {

    //array with data what we can check in graph
    const daysArr = [
        {num:1,text:getLang() === "rus" ? "1д" : "1d"},
        {num:7,text:getLang() === "rus" ? "1н" : "1w"},
        {num:14,text:getLang() === "rus" ? "2н" : "2ws"},
        {num:30,text:getLang() === "rus" ? "1м" : "1m"},
        {num:60,text:getLang() === "rus" ? "2м" : "2ms"},
        {num:180,text:getLang() === "rus" ? "150д" : "6ms"},
        {num:365,text:getLang() === "rus" ? "1г" : "1y"},
        ];

    return (
        <ButtonGroup className={"ExchangesGraphSelect"} size={"sm"}>
            {
                daysArr.map(elem => (
                    <Button
                        disabled={daysShow === elem.num}
                        key={elem.num}
                        onClick={() => setDaysShow(elem.num)}
                        className={`but-${getTheme(true)} border`}
                    >
                        {elem.text}
                    </Button>
                ))
            }
        </ButtonGroup>
    );
};

export default ExchangesGraphSelect;
