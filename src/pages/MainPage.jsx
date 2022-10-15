import React, {useState} from 'react';
import PaginateCoins from "../components/MainPage/PaginateCoins/PaginateCoins";
import SearchInput from "../general-components/SearchMain/SearchInput";
import NavbarPaginate from "../components/MainPage/NavbarPaginate/NavbarPaginate";
import DeFi from "../components/MainPage/DeFi/DeFi";
import PaginateCategories from "../components/MainPage/PaginateCategories/PaginateCategories";
import Nft from "../components/MainPage/PaginateNft/PaginateNft";
import TrendCoins from "../components/MainPage/TrendCoins/TrendCoins";
import ExchangesPaginate from "../components/MainPage/Exchanges/ExchangesPaginate";
import TopLoseCoins from "../components/MainPage/TableTopLoseCoins/TopLoseCoins";
import GeneralInfo from "../general-components/GeneralInfo/GeneralInfo";
import PaginateDerivatives from "../components/MainPage/PaginateDerivatives/PaginateDerivatives";

const MainPage = () => {

    const [navPaginate,setNavPaginate] = useState("coins");

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
            {navPaginate === "exchanges" && <ExchangesPaginate />}
            {navPaginate === "topLoseCoins" && <TopLoseCoins />}
            {navPaginate === "derivatives" && <PaginateDerivatives />}
        </>
    );
};

export default MainPage;