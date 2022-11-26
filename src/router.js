import React, {useState} from 'react';
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
import UserProfile from "./general-components/AuthComponents/UserProfile/UserProfile";
import Login from "./general-components/AuthComponents/LoginComponents/Login";
import PhoneLogin from "./general-components/AuthComponents/LoginComponents/PhoneLogin";
import Briefcase from "./general-components/Briefcase/Briefcase";
import MessageAlert from "./general-components/Alerts/MessageAlert";
import NavbarInfo from "./general-components/NavbarInfo/NavbarInfo";
import AdminPage from "./pages/AdminPage";
import NotFoundPage from "./pages/NotFoundPage";
import {getTheme} from "./functions/Theme/getTheme";

const Router = () => {

    const theme = getTheme(true);

    // for show/hide alert
    const [showAlert, setShowAlert] = useState({show:false,text:'',variant:''})

    return (
        <div className={`general-container ${theme}`}>

            {/*alert with text*/}
            {showAlert.show && <MessageAlert text={showAlert.text} variant={showAlert.variant} />}

            <UserAuthContextProvider>
                <NavbarInfo theme={theme} />
                <NavbarTop theme={theme} />

                <CheckConnectApi />

                {/*auth provider*/}
                    <Routes>
                        <Route path={`/`} element={<MainPage setShowAlert={setShowAlert} />} />
                        <Route path={'/coins/:coinId'} element={<CoinPage setShowAlert={setShowAlert} />} />
                        <Route path={'/nft/:nftId'} element={<NftPage setShowAlert={setShowAlert} />} />
                        <Route path={'/categories/:categoryId'} element={<CategoriesPage  setShowAlert={setShowAlert} />} />
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

                        {/* (BriefcaseDB) save values routes*/}
                        <Route
                            path="/briefcase"
                            element={
                                <ProtectedAuthRoute>
                                    <Briefcase />
                                </ProtectedAuthRoute>
                        }
                        />

                        {/*admin page*/}
                        <Route
                            path="/admin"
                            element={
                                <ProtectedAuthRoute>
                                    <AdminPage setShowAlert={setShowAlert} />
                                </ProtectedAuthRoute>
                            }
                        />

                        {/*404 page*/}
                        <Route path={"*"} element={<NotFoundPage />} />
                    </Routes>
            </UserAuthContextProvider>
        </div>
    );
};

export default Router;
