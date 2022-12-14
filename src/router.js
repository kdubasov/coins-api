import React, {useState} from 'react';
import {Routes,Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import NavbarTop from "./general-components/NavbarTop/NavbarTop";
import CoinPage from "./pages/CoinPage";
import NftPage from "./pages/NftPage";
import CategoriesPage from "./pages/CategoriesPage";
import ExchangesPage from "./pages/ExchangesPage";
import CheckConnectApi from "./general-components/Alerts/CheckConnectApi";
import DerivativePage from "./pages/DerivativePage";
import {UserAuthContextProvider} from "./contexts/UserAuthContext";
import ProtectedAuthRoute from "./general-components/AuthComponents/ProtectedAuthRoute";
import UserProfile from "./general-components/AuthComponents/UserProfile/UserProfile";
import Login from "./general-components/AuthComponents/LoginComponents/Login";
import PhoneLogin from "./general-components/AuthComponents/LoginComponents/PhoneLogin";
import Briefcase from "./general-components/Briefcase/Briefcase";
import MessageAlert from "./general-components/Alerts/MessageAlert/MessageAlert";
import NavbarInfo from "./general-components/NavbarInfo/NavbarInfo";
import AdminPage from "./pages/AdminPage";
import NotFoundPage from "./pages/NotFoundPage";
import {getTheme} from "./functions/Theme/getTheme";
import FooterBottom from "./general-components/FooterBottom/FooterBottom";
import ButtonToTop from "./general-components/ButtonToTop/ButtonToTop";
import ScrollToTop from "./hooks/ScrollToTop";
import SearchInput from "./general-components/SearchMain/SearchInput";

const Router = () => {

    //path from url
    const path = window.location.pathname;

    //theme
    const theme = getTheme(true);

    // for show/hide alert
    const [showAlert, setShowAlert] = useState({show:false,text:'',variant:''})

    //для того чтобы страница поднималась к верху после перехода по ссылке
    ScrollToTop();

    return (
        <div className={`general-container ${theme}`}>

            {/*кнопка к верху*/}
            <ButtonToTop />

            {/*alert with text*/}
            {showAlert.show && <MessageAlert text={showAlert.text} variant={showAlert.variant} />}

            <UserAuthContextProvider>

                <div className={"nav-info-top"}>
                    <NavbarInfo theme={theme} />
                </div>

                <NavbarTop theme={theme} />

                {/*general search*/}
                {
                    path === "/" &&
                    <div className="container search-mobile">
                        <SearchInput theme={theme} />
                    </div>
                }

                {/*проверяем коннект с апи*/}
                <CheckConnectApi />

                {/*auth provider*/}
                    <Routes>
                        <Route path={'/'} element={<MainPage theme={theme} setShowAlert={setShowAlert} />} />
                        <Route path={'/coins/:coinId'} element={<CoinPage setShowAlert={setShowAlert} />} />
                        <Route path={'/nft/:nftId'} element={<NftPage setShowAlert={setShowAlert} />} />
                        <Route path={'/categories/:categoryId'} element={<CategoriesPage  setShowAlert={setShowAlert} />} />
                        <Route path={'/exchanges/:exchangeId'} element={<ExchangesPage setShowAlert={setShowAlert} />} />
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

                <FooterBottom />
            </UserAuthContextProvider>
        </div>
    );
};

export default Router;
