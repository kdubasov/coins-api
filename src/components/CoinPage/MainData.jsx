import React from 'react';
import {Badge} from "react-bootstrap";
import {
    GL_CUR_PRICE, GL_DESCRIPT, GL_DEV_DATA,
    GL_IMAGE, GL_LINKS,
    GL_MC_RANK,
    GL_MD,
    GL_NAME,
    GL_SYMBOL
} from "../../constants/ApiConstants";
import TableMarketData from "./components/TableMarketData";
import TableChangePrice from "./components/TableChangePrice";
import Links from "./components/Links";
import Developers from "./components/Developers/Developers";
import GeneralGraph from "./components/GeneralGraph/GeneralGraph";
import DateInfo from "./components/DateInfo/DateInfo";
import TickersTable from "./components/TickersTable/TickersTable";
import CoinConverter from "./components/CoinСonverter/CoinСonverter";
import MainButtons from "./components/MainButtons";
import TableMarketDataMore from "./components/TableMarketDataMore";

const MainData = ({dataMain,setShowAlert}) => {

    // console.log(dataMain,'data for one coin all');

    return (
        <div className={`MainData coin`}>

            <h5 className={'mt-2 mb-2'}>
                <Badge>Номер #{dataMain[GL_MC_RANK] ?? '?'}</Badge>
            </h5>

            {/*кнопка для добавление в избранное и поделиться*/}
            <MainButtons coinId={dataMain['id']} setShowAlert={setShowAlert} table={'coins'} title={'Монета'} />

            <h4 className={'mt-3 mb-3'}>
                {/* name symbol logo act.price */}
                <img width={50} style={{marginRight:5}} src={dataMain[GL_IMAGE]['large']} alt={dataMain[GL_NAME]} />
                {/*символ и название*/}
                ({dataMain[GL_SYMBOL].toUpperCase()}) {dataMain[GL_NAME]}
                <br/>
                <strong>
                    Актуальная цена:
                    {
                        dataMain[GL_MD][GL_CUR_PRICE]["usd"]?
                            ' ' + dataMain[GL_MD][GL_CUR_PRICE]["usd"].toLocaleString() + "$":
                            ' Нет информации о цене'
                    }
                </strong>
                <i style={{fontSize:14,marginLeft:10}}>
                    {
                        dataMain[GL_MD][GL_CUR_PRICE]["btc"] &&
                        dataMain[GL_MD][GL_CUR_PRICE]["btc"].toLocaleString() + 'BTC'
                    }
                </i>
            </h4>

            {/*description*/}
            <p className="small">
                {
                    dataMain[GL_DESCRIPT]['en']?
                        dataMain[GL_DESCRIPT]['en'].slice(0,800) + ' ...':
                        'Описание отсутствует'
                }
            </p>

            {/*market-data table*/}
            <TableMarketData data={dataMain[GL_MD]} />

            {/*general graph*/}
            <GeneralGraph id={dataMain.id} />

            {/*change price table*/}
            <TableChangePrice data={dataMain[GL_MD]} />

            {/*market-data table*/}
            <TableMarketDataMore data={dataMain[GL_MD]} title={dataMain[GL_NAME]} />

            {/*date info about coin*/}
            <DateInfo id={dataMain.id} />

            {/*links*/}
            <Links data={dataMain[GL_LINKS]} />

            {/*Developers data*/}
            <Developers data={dataMain[GL_DEV_DATA]} />

            <CoinConverter symbol={dataMain[GL_SYMBOL].toUpperCase()} data={dataMain[GL_MD][GL_CUR_PRICE]} />

            <TickersTable id={dataMain.id} />

        </div>
    );
};

export default MainData;
