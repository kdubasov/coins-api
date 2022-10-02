import React, {useState} from 'react';
import PaginateCoins from "../components/MainPage/PaginateCoins/PaginateCoins";
import SearchInput from "../general-components/SearchMain/SearchInput";
import GeneralInfo from "../general-components/GeneralInfo/GeneralInfo";
import NavbarPaginate from "../components/MainPage/NavbarPaginate/NavbarPaginate";
import DeFi from "../components/MainPage/DeFi/DeFi";
import PaginateCategories from "../components/MainPage/PaginateCategories/PaginateCategories";
import Nft from "../components/MainPage/PaginateNft/PaginateNft";
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
            {navPaginate === "categories" && <PaginateCategories />}
            {navPaginate === "trendCoins" && <TrendCoins />}
        </>
    );
};

export default MainPage;