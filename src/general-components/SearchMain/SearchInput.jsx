import React, {useState} from 'react';
import {FormControl} from "react-bootstrap";
import {useApi} from "../../hooks/useApi";
import {GLOBAL_API_SEARCH} from "../../constants/ApiCommand";
import SearchResult from "./SearchResult";
import {getLang} from "../../functions/Lang/getLang";

//css
import "./SearchMain.css";

const SearchInput = ({theme}) => {

    //запрос
    const [query,setQuery] = useState('')

    //показ результатов поиска (да или нет)
    const [showRes,setShowRes] = useState(false)

    const data = useApi(GLOBAL_API_SEARCH(query)).data
    // console.log(data,'SEARCH DATA')

    return (
        <div className={`SearchInput-container`}>

            <FormControl
                className={`search-input ${theme}`}
                size={"sm"}
                value={query}
                onChange={event => setQuery(event.target.value)}
                onFocus={() => setShowRes(true)}
                placeholder={getLang() === "rus" ? "Поиск по сайту" : "Search..."}
            />

            <SearchResult
                theme={theme}
                show={showRes}
                setShowRes={setShowRes}
                query={query}
                data={data?data:{}}
            />

        </div>
    );
};

export default SearchInput;