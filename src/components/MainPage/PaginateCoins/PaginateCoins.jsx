import React, {useEffect, useState} from 'react';
import {useApi} from "../../../hooks/useApi";
import {
    GLOBAL_API_COIN_LIST_ALL, GLOBAL_API_GLOBAL_COMMAND
} from "../../../constants/ApiCommand";
import {Table} from "react-bootstrap";
import PaginateCoinsTr from "./PaginateCoinsTr";
import {GL_ACT_COINS} from "../../../constants/ApiConstants";
import PaginateCoinsSort from "./PaginateCoinsSort";
import PaginationButtons from "./PaginationButtons";
import {getTheme} from "../../../functions/Theme/getTheme";
import MessageAlert from "../../../general-components/Alerts/MessageAlert";
import {getLang} from "../../../functions/Lang/getLang";
import SpinnerAlert from "../../../general-components/Alerts/SpinnerAlert";


//table with coins
const PaginateCoins = () => {

    const theme = getTheme(true);

    // for show/hide alert
    const [showAlert, setShowAlert] = useState({show:false,text:'',variant:''})

    //global data about main changes (ADD ERROR CHECK)
    const globalData = useApi(GLOBAL_API_GLOBAL_COMMAND).data.data;
    // console.log(globalData,"GLOBAL DATA DATA")

    //paginate
    const [currentPage,setCurrentPage] = useState(1);//now page
    const [sizePage] = useState(50);

    //all paginate pages count
    const [allPages,setAllPages] = useState(10000/sizePage);

    //data (ADD ERROR CHECK)
    const data = useApi(GLOBAL_API_COIN_LIST_ALL(sizePage,currentPage)).data;
    // console.log(data,'Data for coins (PaginateCoins)');

    //for sort data
    const [dataSort,setDataSort] = useState(null)


    useEffect(() =>{
        //for set paginate pages count
        if (globalData){
            const dataSort = Math.ceil(globalData[GL_ACT_COINS]/sizePage)
            setAllPages(dataSort)
        }

    },[globalData,sizePage,dataSort])


    return (
        <div className="container">

            {/*alert with text*/}
            {showAlert.show && <MessageAlert text={showAlert.text} variant={showAlert.variant} />}

            <h4 className={'m-0'}>
                {getLang() === 'eng' && 'Prices and basic information about cryptocurrency.'}
                {getLang() === 'rus' && 'Цены и основная информация о криптовалюте.'}
            </h4>

            <p className={"small mb-3"}>
                {getLang() === 'eng' && 'Below are all the coins that exist on the world market, ranked by market capitalization.'}
                {getLang() === 'rus' && 'Ниже представлены все существующие на мировом рынке монеты, ранжированныe по рыночной капитализации.'}
            </p>

            {/*TABLE FOR COINS*/}
            {
                //check result and show spinner or table with coins
                Object.keys(data).length?
                    <Table className={theme}>
                        <thead>
                            <PaginateCoinsSort data={data} setDataSort={setDataSort} />
                        </thead>

                        <tbody>
                        {
                            (dataSort ?? data).map(elem =>(
                                <PaginateCoinsTr key={elem.id} elem={elem} setShowAlert={setShowAlert} theme={theme} />
                            ))
                        }
                        </tbody>
                    </Table>
                    :
                    <SpinnerAlert />
            }

            {/*PAGINATION*/}
            <PaginationButtons
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                allPages={allPages}
            />
        </div>
    );
};

export default PaginateCoins;