import React, {useState} from 'react';
import {FloatingLabel,Form} from "react-bootstrap";
import {useApi} from "../../functions/useApi";
import {GLOBAL_API_SEARCH} from "../../constants/ApiCommand";
import SearchResult from "./SearchResult";

const SearchInput = () => {

    //запрос
    const [query,setQuery] = useState('')

    //показ результатов поиска
    const [showRes,setShowRes] = useState(false)

    const data = useApi(GLOBAL_API_SEARCH(query)).data
    // console.log(data,'SEARCH DATA')

    return (
        <div className={`SearchInput m-3`}>
            <FloatingLabel
                controlId="floatingInput"
                label="Search something"
                className="mb-3"
            >
                <Form.Control
                    value={query}
                    onChange={event => setQuery(event.target.value)}
                    onFocus={() => setShowRes(true)}
                    onBlur={() => setShowRes(false)}
                    placeholder="Search something"
                />
            </FloatingLabel>

            <SearchResult
                show={showRes}
                query={query}
                data={data?data:{}}
            />

        </div>
    );
};

export default SearchInput;