import React from 'react';
import {Badge} from "react-bootstrap";
import {
    GL_CH_PR_CN_24H,
    GL_CUR_PRICE, GL_DESCRIPT, GL_DEV_DATA,
    GL_IMAGE, GL_LINKS,
    GL_MC_RANK,
    GL_MD, GL_MD_SPL_7D,
    GL_NAME,
    GL_SYMBOL
} from "../../constants/ApiConstants";
import TableMarketData from "./components/TableMarketData";
import TableChangePrice from "./components/TableChangePrice";
import Graph from "./components/Graph";
import Links from "./components/Links";
import Developers from "./components/Developers/Developers";
import {getNumRedAfterDoot} from "../../functions/getNumRedAfterDoot";

const MainData = ({dataMain}) => {

    // console.log(dataMain,'data for one coin all')

    return (
        <div className={`MainData coin`}>

            <h5 className={'mt-2 mb-2'}>
                <Badge>Номер #{dataMain[GL_MC_RANK] ?? '?'}</Badge>
            </h5>

            <h4 className={'mt-3 mb-3'}>
                {/* name symbol logo act.price */}
                <img width={50} style={{marginRight:5}} src={dataMain[GL_IMAGE]['large']} alt={dataMain[GL_NAME]}/>
                ({dataMain[GL_SYMBOL].toUpperCase()}) {dataMain[GL_NAME]}
                <br/>
                <strong>
                    {
                        dataMain[GL_MD][GL_CUR_PRICE]["usd"]?
                            dataMain[GL_MD][GL_CUR_PRICE]["usd"].toLocaleString():
                            '?'
                    }$
                    <span style={{fontSize:15,marginLeft:10,color:String(dataMain[GL_MD][GL_CH_PR_CN_24H]).startsWith('-')?'red':'green'}}>
                        ({String(dataMain[GL_MD][GL_CH_PR_CN_24H]).startsWith('-')?'':'+' + getNumRedAfterDoot(dataMain[GL_MD][GL_CH_PR_CN_24H],3) + '%/24ч'})
                    </span>
                </strong>
            </h4>

            {/*description*/}
            <p className="small">
                {
                    dataMain[GL_DESCRIPT]['en']?
                        dataMain[GL_DESCRIPT]['en'].slice(0,800) + ' ...':
                        'No description available'
                }
            </p>

            {/*market-data table*/}
            <TableMarketData data={dataMain[GL_MD]} />

            {/*change price table*/}
            <TableChangePrice data={dataMain[GL_MD]} />

            {/*graph for one coin (проверим на наличие информации для графика)*/}
            {
                dataMain[GL_MD][GL_MD_SPL_7D]["price"].length?
                    <Graph data={dataMain[GL_MD][GL_MD_SPL_7D]} />
                    :""
            }

            {/*links*/}
            <Links data={dataMain[GL_LINKS]} />

            {/*Developers data*/}
            <Developers data={dataMain[GL_DEV_DATA]} />

        </div>
    );
};

export default MainData;