import React from 'react';
import {Button, ButtonGroup} from "react-bootstrap";

const GeneralGraphHeader = ({
    setTimeInterval,getObjectGraph,timeInterval,
    dataVolumes,dataPrices,dataMarketCaps
}) => {
    return (
        <header className={'my-3 w-100 d-flex justify-content-between'}>
            <ButtonGroup size={"sm"}>
                <Button onClick={() => getObjectGraph(dataPrices)}>Цена</Button>
                <Button onClick={() => getObjectGraph(dataMarketCaps)}>Рын. кап.</Button>
                <Button onClick={() => getObjectGraph(dataVolumes)}>Об. торгов.</Button>
            </ButtonGroup>

            <ButtonGroup size={"sm"}>
                <Button disabled={timeInterval===1/24} onClick={() => setTimeInterval(1/24)}>1h</Button>
                <Button disabled={timeInterval===6/24} onClick={() => setTimeInterval(6/24)}>6h</Button>
                <Button disabled={timeInterval===12/24} onClick={() => setTimeInterval(12/24)}>12h</Button>
                <Button disabled={timeInterval===24/24} onClick={() => setTimeInterval(24/24)}>24h</Button>
                <Button disabled={timeInterval===7} onClick={() => setTimeInterval(7)}>7d</Button>
                <Button disabled={timeInterval===30} onClick={() => setTimeInterval(30)}>30d</Button>
                <Button disabled={timeInterval===180} onClick={() => setTimeInterval(180)}>6m</Button>
                <Button disabled={timeInterval===365} onClick={() => setTimeInterval(365)}>1y</Button>
                <Button disabled={timeInterval>365} onClick={() => setTimeInterval('max')}>Max</Button>
            </ButtonGroup>
        </header>
    );
};

export default GeneralGraphHeader;
