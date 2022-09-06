import React, {useEffect, useState} from 'react';
import {ListGroup} from "react-bootstrap";
import Coins from "./SerachResultCategoryes/Coins";
import Nfts from "./SerachResultCategoryes/Nfts";

const SearchResult = ({show,query,data}) => {

    const [dataArrAll,setDataArrAll] = useState([])

    const dataArrSomeCateg = (value) => dataArrAll.filter(elem => elem[0] === value)[0];

    //categories search res
    const coins = dataArrSomeCateg('coins');//там массив в массве ['coins', Array(25)]
    const nfts = dataArrSomeCateg('nfts');
    console.log(nfts,'nfts')

    useEffect(() =>{
        setDataArrAll(Object.entries(data))
    },[data])

    return (
        <div
            className={`SearchResult`}
            style={{display:`${show?'block':'none'}`}}
        >
            <ListGroup>
                {
                    !coins?'':
                        <Coins coins={coins} />
                }
                {
                    !nfts?'':
                        <Nfts query={query} nfts={nfts} />
                }
            </ListGroup>
        </div>
    );
};

export default SearchResult;