import React from 'react';
import {ListGroup} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const SearchResultInner = ({setShowRes,nfts,coins,exchanges,categories,handleSortName,theme}) => {

    const navigate = useNavigate();

    const handleNavigate = url => {
        navigate(url);
        setShowRes(false);
    }

    // console.log(nfts,'nfts')
    // console.log(coins,'coins')
    // console.log(exchanges,'exchanges')
    // console.log(categories,'categories')

    //для показа не более 10 рез-ов по результатам сортировки по именам
    const handleSortMaxName = value => value?value.length > 5 ? value.filter((elem,ids) => ids < 5) : value : false;

    //сортировка для показа не более 10 резульаттов
    const handleFilterMax = value => value?value[1].length > 5 ? value[1].filter((elem,ids) => ids < 5) : value[1] : false;

    //check value for show
    const checkValueWithoutName = arr => {
        return Boolean(handleSortName(arr).length)
    }

    //проверяем картинку
    const getImage = elem => {
        if (elem['thumb'] && elem['thumb'] !== 'missing_thumb.png'){
            return (
                <img
                    src={elem['thumb']}
                    alt={elem.name}
                />
            )
        }else return false;
    }

    return (
        <div className={`SearchResultInner ${theme}`}>
            {/*title for category in search*/}
            <p className={"show-value small"}>
                {(nfts && checkValueWithoutName(nfts)) && nfts[0].toUpperCase()}
                {(categories && checkValueWithoutName(categories)) && categories[0].toUpperCase()}
                {coins && coins[0].toUpperCase()}
                {exchanges && exchanges[0].toUpperCase()}
            </p>

            <ListGroup className={'small'}>

                {//coins
                    coins && handleFilterMax(coins).map(elem =>(
                        <ListGroup.Item
                            action
                            key={elem.id}
                            onClick={() => handleNavigate(`/coins/${elem.id}`)}
                        >
                            {/*image*/}
                            {getImage(elem)}
                            {/*name*/}
                            <strong>({elem.symbol})</strong> {elem.name}
                        </ListGroup.Item>
                    ))
                }

                {//nfts
                    nfts && handleSortMaxName(handleSortName(nfts)).map(elem =>(
                        <ListGroup.Item
                            action
                            key={elem.id}
                            onClick={() => handleNavigate(`/nft/${elem.id}`)}
                        >
                            {/*image*/}
                            {getImage(elem)}
                            <strong>({elem.symbol})</strong> {elem.name}
                        </ListGroup.Item>
                    ))
                }

                {//exchanges
                    exchanges && handleFilterMax(exchanges).map(elem =>(
                        <ListGroup.Item
                            action
                            key={elem.id}
                            onClick={() => handleNavigate(`/exchanges/${(elem.id)}`)}
                        >
                            {/*image*/}
                            {getImage(elem)}
                            {elem.name}
                        </ListGroup.Item>
                    ))
                }

                {//categories
                    categories && handleSortMaxName(handleSortName(categories)).map(elem =>(
                        <ListGroup.Item
                            action
                            key={elem.id}
                            //пробелы и слеши реплейсим
                            onClick={() => handleNavigate(`/categories/${(elem.name).replace(/[\s/]/g, '')}`)}
                        >
                            {elem.name}
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
        </div>
    );
};

export default SearchResultInner;