import React, {useEffect, useState} from 'react';
import {Alert, Button} from "react-bootstrap";
import SearchResultInner from "./SearchResultInner";
import {GL_NAME} from "../../constants/ApiConstants";

const SearchResult = ({show,setShowRes,query,data}) => {

    const [dataArrAll,setDataArrAll] = useState([])
    // console.log(data,'SearchResult');

    //data определенной категории
    const dataArrSomeCateg = (value) =>//там массив в массве ['coins', Array(25)] поэтому берем [0]
        dataArrAll.filter(elem => elem[0] === value)[0];

    //categories search res
    const coins = dataArrSomeCateg('coins');
    const nfts = dataArrSomeCateg('nfts');
    const exchanges = dataArrSomeCateg('exchanges');
    const categories = dataArrSomeCateg('categories');

    //проверить есть ли результат в категории поиска
    const checkValue = arr => {
        // if (!Object.values(arr[1]).length){return false}
        return Boolean(arr && Object.values(arr[1]).length)
    };

    //для того чтобы находились элементы только с именами из запроса (для категорий и нфт)
    const handleSortName = value => value && value[1].filter(elem => (elem[GL_NAME]?.toLowerCase())?.includes(query.toLowerCase()));

    //for check result for all queries
    const getFalseRes = () => {

        return Boolean(
            checkValue(coins) ||
            (nfts && handleSortName(nfts).length) ||
            (categories && handleSortName(categories).length) ||
            checkValue(exchanges)
        )
    }

    useEffect(() =>{
        setDataArrAll(Object.entries(data))
    },[data])

    return (
        <div
            className={`SearchResult`}
            style={{display:`${show?'block':'none'}`}}
        >
            {/*кнопка для закрытия результатов поиска*/}
            {show && <Button onClick={() =>setShowRes(false)} size={"sm"} className={'mb-1'}>Скрыть результаты поиска</Button>}

            <div className={'my-1 w-100 d-flex flex-wrap border'}>
                {
                    getFalseRes()?
                    <>
                        {(coins ? checkValue(coins) : false) && <SearchResultInner coins={coins} handleSortName={handleSortName} />}
                        {(nfts ? checkValue(nfts) : false)  && <SearchResultInner nfts={nfts} handleSortName={handleSortName} />}
                        {(exchanges ? checkValue(exchanges) : false)  && <SearchResultInner exchanges={exchanges} handleSortName={handleSortName} />}
                        {(categories ? checkValue(categories) : false)  && <SearchResultInner categories={categories} handleSortName={handleSortName} />}
                    </>:
                    <Alert className={"w-100 m-3 p-2 small"}>По вашему запросу результатов поиска нет</Alert>
                }
            </div>
        </div>
    );
};

export default SearchResult;