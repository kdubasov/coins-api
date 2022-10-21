import React from 'react';
import {Routes,Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import NavbarTop from "./general-components/NavbarTop/NavbarTop";
import CoinPage from "./pages/CoinPage";
import NftPage from "./pages/NftPage";
import CategoriesPage from "./pages/CategoriesPage";
import ExchangesPage from "./pages/ExchangesPage";
import CheckConnectApi from "./general-components/CheckConnectApi/CheckConnectApi";
import DerivativePage from "./pages/DerivativePage";
import {UserAuthContextProvider} from "./contexts/UserAuthContext";
import ProtectedAuthRoute from "./general-components/AuthComponents/ProtectedAuthRoute";
import UserProfile from "./general-components/AuthComponents/UserProfile";
import Login from "./general-components/AuthComponents/Login";
import PhoneLogin from "./general-components/AuthComponents/PhoneLogin";

const Router = () => {

    return (
        <UserAuthContextProvider>
            <NavbarTop />

            <CheckConnectApi />

            {/*auth provider*/}
                <Routes>
                    <Route path={`/`} element={<MainPage />} />
                    <Route path={'/coins/:coinId'} element={<CoinPage />} />
                    <Route path={'/nft/:nftId'} element={<NftPage />} />
                    <Route path={'/categories/:categoryId'} element={<CategoriesPage />} />
                    <Route path={'/exchanges/:exchangeId'} element={<ExchangesPage />} />
                    <Route path={'/derivatives/:exchangeId'} element={<DerivativePage />} />

                    {/*auth routs*/}
                    <Route
                        path="/userProfile"
                        element={
                            <ProtectedAuthRoute>
                                <UserProfile />
                            </ProtectedAuthRoute>
                        }
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/phoneLogin" element={<PhoneLogin />} />
                </Routes>
        </UserAuthContextProvider>
    );
};

export default Router;