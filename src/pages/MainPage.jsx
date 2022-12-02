import React, {useState} from 'react';
import PaginateCoins from "../components/MainPage/PaginateCoins/PaginateCoins";
import NavbarPaginate from "../components/MainPage/NavbarPaginate/NavbarPaginate";
import DeFi from "../components/MainPage/DeFi/DeFi";
import PaginateCategories from "../components/MainPage/PaginateCategories/PaginateCategories";
import TrendCoins from "../components/MainPage/TrendCoins/TrendCoins";
import ExchangesPaginate from "../components/MainPage/ExchangesPaginate/ExchangesPaginate";
import TopLoseCoins from "../components/MainPage/TableTopLoseCoins/TopLoseCoins";
import PaginateDerivatives from "../components/MainPage/PaginateDerivatives/PaginateDerivatives";
import PaginateNft from "../components/MainPage/PaginateNft/PaginateNft";
import HoldCompanies from "../components/MainPage/HoldCompanies/HoldCompanies";
import FeedbackForm from "../general-components/FeedbackForm/FeedbackForm";
import BannerTop from "../static-components/MainPage/BannerTop/BannerTop";


const MainPage = ({setShowAlert,theme}) => {

    const [navPaginate,setNavPaginate] = useState("coins");

    return (
        <>

            {/*static banner*/}
            <BannerTop theme={theme} />

            <NavbarPaginate
                theme={theme}
                navPaginate={navPaginate}
                setNavPaginate={setNavPaginate}
            />

            {navPaginate === "coins" && <PaginateCoins />}
            {navPaginate === "nft" && <PaginateNft setShowAlert={setShowAlert} />}
            {navPaginate === "defi" && <DeFi />}
            {navPaginate === "categories" && <PaginateCategories />}
            {navPaginate === "trendCoins" && <TrendCoins setShowAlert={setShowAlert} />}
            {navPaginate === "exchanges" && <ExchangesPaginate setShowAlert={setShowAlert} />}
            {navPaginate === "topLoseCoins" && <TopLoseCoins />}
            {navPaginate === "derivatives" && <PaginateDerivatives />}
            {navPaginate === "holdCompanies" && <HoldCompanies />}

            {//форму и generalInfo отображаем только на главной
                navPaginate === "coins" &&
                <FeedbackForm showInfo={true} />
            }
        </>
    );
};

export default MainPage;
