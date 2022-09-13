import React from 'react';
import PaginateCoins from "../general-components/PaginateCoins/PaginateCoins";
import SearchInput from "../general-components/SearchMain/SearchInput";

const MainPage = () => {

    return (
        <div>
            <SearchInput />
            <PaginateCoins />
        </div>
    );
};

export default MainPage;