import React, {useEffect, useState} from 'react';
import {Alert, Button} from "react-bootstrap";
import SearchResultInner from "./SearchResultInner";
import {GL_NAME} from "../../constants/ApiConstants";
import {getLang} from "../../functions/Lang/getLang";

const SearchResult = ({show,setShowRes,query,data,theme}) => {

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
            className={`SearchResult ${theme}`}
            style={{display:`${show?'block':'none'}`}}
        >
            {/*кнопка для закрытия результатов поиска*/}
            {
                show &&
                <Button onClick={() =>setShowRes(false)} size={"sm"} className={'w-100 mb-2'}>
                    {getLang() === 'eng' && 'Hide search results'}
                    {getLang() === 'rus' && 'Скрыть результаты поиска'}
                </Button>
            }

            <div className={'search-inner-container'}>
                {
                    getFalseRes()?
                    <>
                        {(coins ? checkValue(coins) : false) && <SearchResultInner setShowRes={setShowRes} coins={coins} handleSortName={handleSortName} theme={theme} />}
                        {(nfts ? checkValue(nfts) : false)  && <SearchResultInner setShowRes={setShowRes} nfts={nfts} handleSortName={handleSortName} theme={theme}  />}
                        {(exchanges ? checkValue(exchanges) : false)  && <SearchResultInner setShowRes={setShowRes} exchanges={exchanges} handleSortName={handleSortName} theme={theme}  />}
                        {(categories ? checkValue(categories) : false)  && <SearchResultInner setShowRes={setShowRes} categories={categories} handleSortName={handleSortName} theme={theme}  />}
                    </>:
                    <Alert variant={"danger"} className={"w-100 mt-1 mb-0 p-2 small"}>
                        {getLang() === "eng" && "There are no search results for your query."}
                        {getLang() === "rus" && "По вашему запросу результатов поиска нет."}
                    </Alert>
                }
            </div>
        </div>
    );
};

export default SearchResult;