import React, {useState} from 'react';
import {FormControl} from "react-bootstrap";
import {useApi} from "../../hooks/useApi";
import {GLOBAL_API_SEARCH} from "../../constants/ApiCommand";
import SearchResult from "./SearchResult";

const SearchInput = () => {

    //запрос
    const [query,setQuery] = useState('')

    //показ результатов поиска (да или нет)
    const [showRes,setShowRes] = useState(false)

    const data = useApi(GLOBAL_API_SEARCH(query)).data
    // console.log(data,'SEARCH DATA')

    return (
        <div className={`SearchInput container`}>

            <FormControl
                className="mb-3 mt-3"
                // size={"sm"}
                value={query}
                onChange={event => setQuery(event.target.value)}
                onFocus={() => setShowRes(true)}
                placeholder="Поиск по сайту"
            />

            <SearchResult
                show={showRes}
                setShowRes={setShowRes}
                query={query}
                data={data?data:{}}
            />

        </div>
    );
};

export default SearchInput;