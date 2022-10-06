import React from 'react';
import {Badge, ListGroup} from "react-bootstrap";
import {
    GL_COUNTR,
    GL_DESCRIPT,
    GL_EXC_CENTR, GL_EXC_YEAR,
    GL_EXH_24H_VOL,
    GL_EXH_TR_SC,
    GL_IMAGE,
    GL_NAME
} from "../../constants/ApiConstants";
import {getNumRedAfterDoot} from "../../functions/getNumRedAfterDoot";

const MainData = ({data}) => {

    console.log(data,'MAIN DATA FOR EXCHANGE')

    return (
        <div className={`MainData exch`}>
            {/*header*/}
            <header className={`d-flex align-items-center justify-content-between`}>
                <div className="box d-flex align-items-center">
                    <img width={75} style={{borderRadius:5}} src={data[GL_IMAGE]} alt={data[GL_NAME]}/>
                    <div className={'mx-2 d-flex align-items-center flex-wrap'}>
                        <h3 className={'m-0 w-100'}><Badge>{data[GL_NAME]}</Badge></h3>
                        <p className="small m-0">
                            {data[GL_EXC_CENTR]?'Centralized':'Not centralized'}
                        </p>
                    </div>
                </div>

                <div className="box d-flex justify-content-center flex-wrap">
                    <h2 className={`m-0`}>
                        <Badge bg={"success"}>{data[GL_EXH_TR_SC]}</Badge>
                    </h2>

                    <p className={`small m-0 w-100 text-center`}>Очков доверия</p>

                    <a href={data["url"]}>
                        Перейти на оф. сайт
                    </a>
                </div>
            </header>

            {/*description*/}
            <p className={'small mt-3 mb-3'}>
                {data[GL_DESCRIPT] || `No description available`}
            </p>

            <ListGroup horizontal className={'w-100 mb-3'}>
                <ListGroup.Item>
                    <h5 className="m-0 w-100 text-center">
                        {
                            data[GL_EXH_24H_VOL] &&
                            getNumRedAfterDoot(data[GL_EXH_24H_VOL],2) + '(btc)'
                        }
                    </h5>
                    <p className="small m-0 w-100 text-center">Объем торгов за 24 часа</p>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h5 className="m-0 w-100 text-center">{data[GL_COUNTR]}</h5>
                    <p className="small m-0 w-100 text-center">Страна основания</p>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h5 className="m-0 w-100 text-center">{data[GL_EXC_YEAR]}</h5>
                    <p className="small m-0 w-100 text-center">Год основания</p>
                </ListGroup.Item>
            </ListGroup>

        </div>
    );
};

export default MainData;
