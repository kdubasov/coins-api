import React from 'react';
import {Badge, ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";

const SearchResultInner = ({query,nfts,coins,exchanges,categories}) => {

    //для того чтобы находились элементы только с именами из запроса
    const handleSortName = value => value?value[1].filter(elem => (elem.name.toLowerCase()).includes(query.toLowerCase())):false;
    //для показа не более 10 рез-ов по результатам сортировки по именам
    const handleSortMaxName = value => value?value.length>10?value.filter((elem,ids) => ids<10):value:false;

    //сортировка для показа не более 10 резульаттов
    const handleFilterMax = value => value?value[1].length>10?value[1].filter((elem,ids) => ids<10):value[1]:false;

    //проерка на вход данных про монеты или нфт
    const resCoinNfts = coins||nfts;

    return (
        <div className={'w-50 p-2'}>
            {/*title for category in search*/}
            <h4>
                <Badge bg={"secondary"}>
                    {
                        resCoinNfts?
                            (nfts?nfts[0]:coins[0]).toUpperCase() :
                            (exchanges?exchanges[0]:categories[0]).toUpperCase()
                    }
                </Badge>
            </h4>

            <ListGroup className={'small'}>
                {
                    //nft or coin show
                    resCoinNfts?
                        (nfts?handleSortMaxName(handleSortName(nfts)):handleFilterMax(coins)).map(elem =>(
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
                    :
                        ''
                }

                {
                    //exchanges show
                    exchanges?handleFilterMax(exchanges).map(elem =>(
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
                    )):''
                }

                {
                    //categories show
                    categories?handleSortMaxName(handleSortName(categories)).map(elem =>(
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
                        :
                    ''
                }
            </ListGroup>
        </div>
    );
};

export default SearchResultInner;