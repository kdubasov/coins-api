import React from 'react';
import {Badge} from "react-bootstrap";
import {
    GL_CUR_PRICE,
    GL_IMAGE,
    GL_MC_RANK,
    GL_MD, GL_MD_SPL_7D,
    GL_NAME,
    GL_SYMBOL
} from "../../constants/ApiConstants";
import TableMarketData from "./components/TableMarketData";
import TableChangePrice from "./components/TableChangePrice";
import Graph from "./components/Graph";

const MainData = ({dataMain}) => {

    // console.log(dataMain,'data for one coin all')

    return (
        <div className={`MainData`}>

            <h5 className={'mt-2 mb-2'}>
                <Badge>Номер #{dataMain[GL_MC_RANK] ?? '?'}</Badge>
            </h5>

            <h4 className={'mt-3 mb-3'}>
                {/* name symbol logo act.price */}
                <img width={50} style={{marginRight:5}} src={dataMain[GL_IMAGE]['large']} alt=""/>
                ({dataMain[GL_SYMBOL].toUpperCase()}) {dataMain[GL_NAME]}
                <br/>
                Акт. цена:
                <strong>
                    {
                        dataMain[GL_MD][GL_CUR_PRICE]["usd"]?
                            dataMain[GL_MD][GL_CUR_PRICE]["usd"].toLocaleString():
                            '?'
                    }$
                </strong>
            </h4>

            {/*market-data table*/}
            <TableMarketData data={dataMain[GL_MD]} />

            {/*change price table*/}
            <TableChangePrice data={dataMain[GL_MD]} />

            {/*graph for one coin*/}
            <Graph data={dataMain[GL_MD][GL_MD_SPL_7D]} />

        </div>
    );
};

export default MainData;