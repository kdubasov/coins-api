import React from 'react';
import {Button, ButtonGroup} from "react-bootstrap";
import {getLang} from "../../../../functions/Lang/getLang";
import {getTheme} from "../../../../functions/Theme/getTheme";

const ExchangesGraphSelect = ({daysShow,setDaysShow}) => {

    //array with data what we can check in graph
    const daysArr = [
        {num:1,text:getLang() === "rus" ? "1 день" : "1 day"},
        {num:7,text:getLang() === "rus" ? "1нед" : "1 week"},
        {num:14,text:getLang() === "rus" ? "2нед" : "2 weeks"},
        {num:30,text:getLang() === "rus" ? "1мес" : "1 mon"},
        {num:60,text:getLang() === "rus" ? "2мес" : "2 mons"},
        {num:150,text:getLang() === "rus" ? "150дн" : "150 days"},
        {num:365,text:getLang() === "rus" ? "1 год" : "1 year"},
        ];

    return (
        <ButtonGroup size={"sm"}>
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
