import React from 'react';
import {Routes,Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import NavbarTop from "./general-components/NavbarTop/NavbarTop";
import CoinPage from "./pages/CoinPage";
import NftPage from "./pages/NftPage";
import CategoriesPage from "./pages/CategoriesPage";
import ExchangesPage from "./pages/ExchangesPage";
import CheckConnectApi from "./general-components/CheckConnectApi/CheckConnectApi";

const Router = () => {

    return (
        <>
            <NavbarTop />

            <CheckConnectApi />

            <Routes>
                <Route path={`/`} element={<MainPage />} />
                <Route path={'/coins/:coinId'} element={<CoinPage />} />
                <Route path={'/nft/:nftId'} element={<NftPage />} />
                <Route path={'/categories/:categoryId'} element={<CategoriesPage />} />
                <Route path={'/exchanges/:exchangeId'} element={<ExchangesPage />} />
            </Routes>
        </>
    );
};

export default Router;