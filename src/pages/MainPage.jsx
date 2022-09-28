import React, {useState} from 'react';
import PaginateCoins from "../components/MainPage/PaginateCoins/PaginateCoins";
import SearchInput from "../general-components/SearchMain/SearchInput";
import GeneralInfo from "../general-components/GeneralInfo/GeneralInfo";
import NavbarPaginate from "../components/MainPage/NavbarPaginate/NavbarPaginate";
import DeFi from "../components/MainPage/DeFi/DeFi";
import Categories from "../components/MainPage/Categories/Categories";
import Nft from "../components/MainPage/PaginateNft/Nft";
import TrendCoins from "../components/TrendCoins/TrendCoins";

const MainPage = () => {

    const [navPaginate,setNavPaginate] = useState("coins")

    return (
        <>
            <SearchInput />
            <GeneralInfo />

            <NavbarPaginate
                navPaginate={navPaginate}
                setNavPaginate={setNavPaginate}
            />
            {navPaginate === "coins" && <PaginateCoins />}
            {navPaginate === "nft" && <Nft />}
            {navPaginate === "defi" && <DeFi />}
            {navPaginate === "categories" && <Categories />}
            {navPaginate === "trendCoins" && <TrendCoins />}
        </>
    );
};

export default MainPage;