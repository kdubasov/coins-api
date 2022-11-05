import React from 'react';
import {
    GL_DESCRIPT, GL_FL_PR, GL_IMAGE,
    GL_MK, GL_NAME, GL_NFT_PERSENT_24H,
    GL_NFT_NAT_CUR, GL_NFT_OWN, GL_TT_CNS,
    GL_VOL_24H
} from "../../constants/ApiConstants";
import {Badge, ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";
import MainButtons from "../CoinPage/components/MainButtons";

const MainData = ({dataMain,setShowAlert}) => {

    // console.log(dataMain,'data for one nft');

    const getListItem = (title,value) => {
        return (
            <ListGroup.Item>
                {title}: <strong>{value || '?'}</strong>
            </ListGroup.Item>
        )
    }

    return (
        <div className={`MainData nft`}>

            {/*кнопка для добавление в избранное и поделиться*/}
            <MainButtons coinId={dataMain['id']} setShowAlert={setShowAlert} table={'nfts'} title={'Nft'} />

            <p className={'mt-3 mb-3 small d-flex align-items-center'}>
                <img
                    width={100}
                    style={{marginRight:15,borderRadius:5}}
                    src={dataMain[GL_IMAGE]['large'] || dataMain[GL_IMAGE]['small']}
                    alt={dataMain[GL_NAME]}
                />
                <span className={'d-flex flex-column'}>
                    <Badge style={{fontSize:18}}>{dataMain[GL_NAME]}</Badge>
                    {
                        dataMain[GL_NFT_PERSENT_24H] &&
                        <span
                            style={String(dataMain[GL_NFT_PERSENT_24H]).startsWith('-')?{color:'red'}:{color:'green'}}
                            className={'m-0 fw-bold'}
                        >
                            {String(dataMain[GL_NFT_PERSENT_24H]).startsWith('-')?'':'+'}
                            {dataMain[GL_NFT_PERSENT_24H] + '% (24ч)'}
                        </span>
                    }
                </span>
            </p>
            {/*description*/}
            <p className="small">
                {dataMain[GL_DESCRIPT] || 'Описание отсутствует'}
            </p>

            <ListGroup>
                {getListItem('24-часовой объем',dataMain[GL_VOL_24H]['usd']+'$')}
                {getListItem('Рыночная капитализация',dataMain[GL_MK]['usd']+'$')}
                {getListItem('Минимальная цена',dataMain[GL_FL_PR]['usd']+'$')}
                {getListItem('Общее предложение',dataMain[GL_TT_CNS])}
                {getListItem('Владельцы',dataMain[GL_NFT_OWN])}

                {/*with link to coin*/}
                <ListGroup.Item>
                    Валюта:
                    {
                        dataMain[GL_NFT_NAT_CUR]?
                            <Link className={'mx-1'} to={`/coins/${dataMain[GL_NFT_NAT_CUR]}`}>
                                <Badge>{dataMain[GL_NFT_NAT_CUR]}</Badge>
                            </Link>:'?'
                    }
                </ListGroup.Item>
            </ListGroup>

        </div>
    );
};

export default MainData;
