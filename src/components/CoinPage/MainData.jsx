import React from 'react';
import {
    GL_CUR_PRICE, GL_DEV_DATA,
    GL_LINKS, GL_MD,
    GL_NAME, GL_SYMBOL
} from "../../constants/ApiConstants";
import TableMarketData from "./components/TableMarketData/TableMarketData";
import TableChangePrice from "./components/TableChangePrice/TableChangePrice";
import Links from "./components/Links/Links";
import Developers from "./components/Developers/Developers";
import GeneralGraph from "./components/GeneralGraph/GeneralGraph";
import DateInfo from "./components/DateInfo/DateInfo";
import TickersTable from "./components/TickersTable/TickersTable";
import CoinConverter from "./components/CoinСonverter/CoinСonverter";
import PriceStatistic from "./components/PriceStatistic/PriceStatistic";
import DefaultInfo from "./components/DefaultInfo/DefaultInfo";
import {getTheme} from "../../functions/Theme/getTheme";

//css
import "./MainDataCoin.css";
import "./MainDataCoinMedia.css";

const MainData = ({dataMain,setShowAlert}) => {

    // console.log(dataMain,'data for one coin all');

    return (
        <div className={`MainData coin ${getTheme(true)}`}>

            <div className="top-block">
                <div className="left">
                    {/*top block with general info*/}
                    <DefaultInfo dataMain={dataMain} setShowAlert={setShowAlert} />

                    {/*market-data table*/}
                    <TableMarketData data={dataMain[GL_MD]} />
                </div>

                <div className="right">
                    {/*links*/}
                    <Links data={dataMain[GL_LINKS]} />
                </div>
            </div>

            {/*general graph*/}
            <GeneralGraph
                id={dataMain.id}
                name={dataMain[GL_NAME]}
                symbol={dataMain[GL_SYMBOL].toUpperCase()}
            />

            {/*change price table*/}
            <TableChangePrice data={dataMain[GL_MD]} />

            <div className="center-block">
                {/*market-data table*/}
                <PriceStatistic data={dataMain[GL_MD]} title={dataMain[GL_NAME]} />

                <div className="right">
                    {/*converter*/}
                    <CoinConverter symbol={dataMain[GL_SYMBOL].toUpperCase()} data={dataMain[GL_MD][GL_CUR_PRICE]} />
                    {/*date info about coin*/}
                    <DateInfo id={dataMain.id} name={dataMain[GL_NAME]} />
                </div>
            </div>

            {/*Developers data*/}
            <Developers data={dataMain[GL_DEV_DATA]} />

            {/*tickers*/}
            <TickersTable id={dataMain.id} name={dataMain[GL_NAME]} />

        </div>
    );
};

export default MainData;
