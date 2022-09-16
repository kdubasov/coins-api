import React from 'react';
import PaginateCoins from "../general-components/PaginateCoins/PaginateCoins";
import SearchInput from "../general-components/SearchMain/SearchInput";
import GeneralInfo from "../general-components/GeneralInfo/GeneralInfo";

const MainPage = () => {

    return (
        <div>
            <SearchInput />
            <GeneralInfo />
            <PaginateCoins />
        </div>
    );
};

export default MainPage;