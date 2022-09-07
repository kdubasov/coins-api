import React, {useEffect, useState} from 'react';
import {ListGroup} from "react-bootstrap";
import SearchResultInner from "./SearchResultInner";

const SearchResult = ({show,query,data}) => {

    const [dataArrAll,setDataArrAll] = useState([])
    // console.log(data)

    //data определенной категории
    const dataArrSomeCateg = (value) =>//там массив в массве ['coins', Array(25)] поэтому берем [0]
        dataArrAll.filter(elem => elem[0] === value)[0];

    //categories search res
    const coins = dataArrSomeCateg('coins');
    const nfts = dataArrSomeCateg('nfts');
    const exchanges = dataArrSomeCateg('exchanges');
    const categories = dataArrSomeCateg('categories')

    useEffect(() =>{
        setDataArrAll(Object.entries(data))
    },[data])

    return (
        <div
            className={`SearchResult`}
            style={{display:`${show?'block':'none'}`}}
        >
            <ListGroup>
                {!coins?'': <SearchResultInner coins={coins} />}
                {!nfts?'': <SearchResultInner query={query} nfts={nfts} />}
                {!exchanges?'': <SearchResultInner exchanges={exchanges} />}
                {!categories?'': <SearchResultInner query={query} categories={categories} />}
            </ListGroup>
        </div>
    );
};

export default SearchResult;