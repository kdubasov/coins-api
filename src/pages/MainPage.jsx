import React, {useState} from 'react';
import PaginateCoins from "../components/MainPage/PaginateCoins/PaginateCoins";
import SearchInput from "../general-components/SearchMain/SearchInput";
import NavbarPaginate from "../components/MainPage/NavbarPaginate/NavbarPaginate";
import DeFi from "../components/MainPage/DeFi/DeFi";
import PaginateCategories from "../components/MainPage/PaginateCategories/PaginateCategories";
import TrendCoins from "../components/MainPage/TrendCoins/TrendCoins";
import ExchangesPaginate from "../components/MainPage/ExchangesPaginate/ExchangesPaginate";
import TopLoseCoins from "../components/MainPage/TableTopLoseCoins/TopLoseCoins";
import GeneralInfo from "../general-components/GeneralInfo/GeneralInfo";
import PaginateDerivatives from "../components/MainPage/PaginateDerivatives/PaginateDerivatives";
import PaginateNft from "../components/MainPage/PaginateNft/PaginateNft";

const MainPage = () => {

    const [navPaginate,setNavPaginate] = useState("coins");

    return (
        <>
            <GeneralInfo />
            <SearchInput />

            <NavbarPaginate
                navPaginate={navPaginate}
                setNavPaginate={setNavPaginate}
            />

            {navPaginate === "coins" && <PaginateCoins />}
            {navPaginate === "nft" && <PaginateNft />}
            {navPaginate === "defi" && <DeFi />}
            {navPaginate === "categories" && <PaginateCategories />}
            {navPaginate === "trendCoins" && <TrendCoins />}
            {navPaginate === "exchanges" && <ExchangesPaginate />}
            {navPaginate === "topLoseCoins" && <TopLoseCoins />}
            {navPaginate === "derivatives" && <PaginateDerivatives />}
        </>
    );
};

export default MainPage;