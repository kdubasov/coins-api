import React from 'react';
import {
    GL_DEFI_TR_24H_BTC, GL_EXC_YEAR,
    GL_FUT_PAIRS,
    GL_IMAGE,
    GL_NAME,
    GL_OP_INT_BTC,
    GL_PER_PAIRS,
    GL_URL
} from "../../constants/ApiConstants";
import {Link} from "react-router-dom";
import {ListGroup, ListGroupItem} from "react-bootstrap";

const MainData = ({data}) => {

    // console.log(data,'for derivative')

    const getListGroupItem = (text,value,priceValue = false) => {
        if(data[value] || data[value] === 0){
            return (
                <ListGroupItem>
                    <h5 className={'m-0 fw-bold'}>{data[value]}{priceValue}</h5>
                    <p className={'small m-0'}>{text}</p>
                </ListGroupItem>
            )
        }
        return false
    }

    return (
        <div className={'w-100 p-3 mt-4 border'}>
            <div className={'w-100 d-flex justify-content-between align-items-center'}>
                <span className={'d-flex align-items-center'}>
                    <img width={50} src={data[GL_IMAGE]} alt={data[GL_NAME]} style={{borderRadius:'.25em'}}/>
                    <p className={'m-0 mx-2'}>{data[GL_NAME]}</p>
                </span>
                <Link to={data[GL_URL]}>Перейти на оф.сайт</Link>
            </div>

            <ListGroup className={'mt-3'} horizontal>
                {getListGroupItem('Объем торгов за 24 часа',GL_DEFI_TR_24H_BTC,'(btc)')}
                {getListGroupItem('Бессрочные контракты',GL_FUT_PAIRS,)}
                {getListGroupItem('Сумма открытых позиций за 24 часа',GL_OP_INT_BTC,'(btc)')}
                {getListGroupItem('Пары',GL_PER_PAIRS,)}
                {getListGroupItem('Год основания',GL_EXC_YEAR,)}
            </ListGroup>
        </div>
    );
};

export default MainData;
