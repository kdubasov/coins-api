import React, {useState} from 'react';
import {Button, ButtonGroup} from "react-bootstrap";
import {getTheme} from "../../../../functions/Theme/getTheme";
import {getLang} from "../../../../functions/Lang/getLang";

const GeneralGraphHeader = ({
    setTimeInterval,getObjectGraph,timeInterval,
    dataVolumes,dataPrices,dataMarketCaps
}) => {

    //theme
    const theme = getTheme(true);

    //for disable button with select data
    const [selectData,setSelectData] = useState(1);

    //set other data for graph
    const handleChangeData = (dataNum,dataValue) => {
        setSelectData(dataNum)
        getObjectGraph(dataValue)
    }

    return (
        <header className={`GeneralGraphHeader`}>
            <ButtonGroup size={"sm"}>
                <Button className={`but-${theme} border`} disabled={selectData === 1} onClick={() => handleChangeData(1,dataPrices)}>
                    {getLang() === "eng" && "Price"}
                    {getLang() === "rus" && "Цена"}
                </Button>

                <Button className={`but-${theme} border`} disabled={selectData === 2} onClick={() => handleChangeData(2,dataMarketCaps)}>
                    {getLang() === "eng" && "Market cap"}
                    {getLang() === "rus" && "Рын. кап."}
                </Button>

                <Button className={`but-${theme} border`} disabled={selectData === 3} onClick={() => handleChangeData(3,dataVolumes)}>
                    {getLang() === "eng" && "Volume"}
                    {getLang() === "rus" && "Об. торг."}
                </Button>
            </ButtonGroup>

            <ButtonGroup size={"sm"}>
                <Button className={`but-${theme} border`} disabled={timeInterval===1/24} onClick={() => setTimeInterval(1/24)}>
                    {getLang() === "eng" && "1h"}
                    {getLang() === "rus" && "1ч"}
                </Button>

                <Button className={`but-${theme} border`} disabled={timeInterval===6/24} onClick={() => setTimeInterval(6/24)}>
                    {getLang() === "eng" && "6h"}
                    {getLang() === "rus" && "6ч"}
                </Button>

                <Button className={`but-${theme} border`} disabled={timeInterval===12/24} onClick={() => setTimeInterval(12/24)}>
                    {getLang() === "eng" && "12h"}
                    {getLang() === "rus" && "12ч"}
                </Button>

                <Button className={`but-${theme} border`} disabled={timeInterval===24/24} onClick={() => setTimeInterval(24/24)}>
                    {getLang() === "eng" && "24h"}
                    {getLang() === "rus" && "24ч"}
                </Button>

                <Button className={`but-${theme} border`} disabled={timeInterval===7} onClick={() => setTimeInterval(7)}>
                    {getLang() === "eng" && "7d"}
                    {getLang() === "rus" && "7дн"}
                </Button>

                <Button className={`but-${theme} border`} disabled={timeInterval===30} onClick={() => setTimeInterval(30)}>
                    {getLang() === "eng" && "30d"}
                    {getLang() === "rus" && "30дн"}
                </Button>

                <Button className={`but-${theme} border`} disabled={timeInterval===180} onClick={() => setTimeInterval(180)}>
                    {getLang() === "eng" && "6m"}
                    {getLang() === "rus" && "6мес"}
                </Button>

                <Button className={`but-${theme} border`} disabled={timeInterval===365} onClick={() => setTimeInterval(365)}>
                    {getLang() === "eng" && "1y"}
                    {getLang() === "rus" && "1год"}
                </Button>

                <Button className={`but-${theme} border`} disabled={timeInterval==='max'} onClick={() => setTimeInterval('max')}>
                    {getLang() === "eng" && "Max"}
                    {getLang() === "rus" && "Макс."}
                </Button>
            </ButtonGroup>
        </header>
    );
};

export default GeneralGraphHeader;
