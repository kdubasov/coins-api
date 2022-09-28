import React from 'react';
import {
    GL_DESCRIPT,
    GL_FL_PR,
    GL_IMAGE,
    GL_MK,
    GL_NAME, GL_NFT_NAT_CUR,
    GL_NFT_OWN,
    GL_TT_CNS,
    GL_VOL_24H
} from "../../constants/ApiConstants";
import {ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";

const MainData = ({dataMain}) => {

    const getListItem = (title,value) => {
        return (
            <ListGroup.Item>
                {title}: <strong>{value || '?'}</strong>
            </ListGroup.Item>
        )
    }

    return (
        <div className={`MainData nft`}>
            <h4 className={'mt-3 mb-3'}>
                <img
                    width={100}
                    style={{marginRight:15,borderRadius:5}}
                    src={dataMain[GL_IMAGE]['small' || 'large']}
                    alt={dataMain[GL_NAME]}
                />
                {dataMain[GL_NAME]}
            </h4>
            {/*description*/}
            <p className="small">
                {dataMain[GL_DESCRIPT] || '?'}
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
                            <Link to={`/coins/${dataMain[GL_NFT_NAT_CUR]}`}>
                                <strong>{dataMain[GL_NFT_NAT_CUR]}</strong>
                            </Link>:'?'
                    }
                </ListGroup.Item>
            </ListGroup>

        </div>
    );
};

export default MainData;
