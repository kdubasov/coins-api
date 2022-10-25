import React from 'react';
import {Badge, ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";

const SearchResultInner = ({nfts,coins,exchanges,categories,handleSortName}) => {

    // console.log(nfts,'nfts')
    // console.log(coins,'coins')
    // console.log(exchanges,'exchanges')
    // console.log(categories,'categories')

    //для показа не более 10 рез-ов по результатам сортировки по именам
    const handleSortMaxName = value => value?value.length>10?value.filter((elem,ids) => ids<10):value:false;

    //сортировка для показа не более 10 резульаттов
    const handleFilterMax = value => value?value[1].length>10?value[1].filter((elem,ids) => ids<10):value[1]:false;

    //check value for show
    const checkValueWithoutName = arr => {
        return Boolean(handleSortName(arr).length)
    }

    return (
        <div className={'w-50 p-2'}>
            {/*title for category in search*/}
            <h5>
                <Badge bg={"secondary"} className={"fw-light p-1 px-3"}>
                    {(nfts && checkValueWithoutName(nfts)) && nfts[0]}
                    {(categories && checkValueWithoutName(categories)) && categories[0]}
                    {coins && coins[0]}
                    {exchanges && exchanges[0]}
                </Badge>
            </h5>

            <ListGroup className={'small'}>

                {//coins
                    coins && handleFilterMax(coins).map(elem =>(
                        <Link
                            key={elem.id}
                            to={nfts?`/nft/${elem.id}`:`/coins/${elem.id}`}
                            style={{textDecoration:"none",borderRadius:'.5em'}}
                        >
                            <ListGroup.Item action>
                                <img src={elem['thumb']} style={{marginRight:5}} alt=""/>
                                <strong>({elem.symbol})</strong> {elem.name}
                            </ListGroup.Item>
                        </Link>
                        ))
                }

                {//nfts
                    nfts && handleSortMaxName(handleSortName(nfts)).map(elem =>(
                        <Link
                            key={elem.id}
                            to={nfts?`/nft/${elem.id}`:`/coins/${elem.id}`}
                            style={{textDecoration:"none",borderRadius:'.5em'}}
                        >
                            <ListGroup.Item action>
                                <img src={elem['thumb']} style={{marginRight:5}} alt=""/>
                                <strong>({elem.symbol})</strong> {elem.name}
                            </ListGroup.Item>
                        </Link>
                    ))
                }

                {//exchanges
                    exchanges && handleFilterMax(exchanges).map(elem =>(
                        <Link
                            key={elem.id}
                            to={`/exchanges/${(elem.id)}`}
                            style={{textDecoration:"none",borderRadius:'.5em'}}
                        >
                            <ListGroup.Item action>
                                <img
                                    src={
                                        elem['thumb']==='missing_thumb.png'?//если картинки нет там файл missing_thumb.png
                                            '/images/general-svg/quest.svg':elem['thumb']
                                    }
                                    style={{marginRight:5,maxWidth:25}}
                                    alt={elem.name}
                                />
                                {elem.name}
                            </ListGroup.Item>
                        </Link>
                    ))
                }

                {//categories
                    categories && handleSortMaxName(handleSortName(categories)).map(elem =>(
                        <Link
                            key={elem.id}
                            to={`/categories/${(elem.name).replace(/[\s/]/g, '')}`}//пробелы и слеши реплейсим
                            style={{textDecoration:"none",borderRadius:'.5em'}}
                        >
                            <ListGroup.Item action>
                                <img
                                    style={{marginRight:5,maxWidth:25}}
                                    src='/images/general-svg/folder.svg'
                                    alt={elem.name}
                                />
                                {elem.name}
                            </ListGroup.Item>
                        </Link>
                    ))
                }
            </ListGroup>
        </div>
    );
};

export default SearchResultInner;