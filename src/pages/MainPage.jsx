import React from 'react';
import PaginateCoins from "../general-components/PaginateCoins/PaginateCoins";
import SearchInput from "../general-components/SearchMain/SearchInput";

const MainPage = () => {

    return (
        <div>
            <h3 className="m-3">Главная страница</h3>
            <SearchInput />
            <PaginateCoins />
        </div>
    );
};

export default MainPage;