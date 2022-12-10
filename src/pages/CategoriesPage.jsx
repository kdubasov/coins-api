import React, {useState} from 'react';
import {useLastWordPath} from "../hooks/useLastWordPath";
import {useApi} from "../hooks/useApi";
import {GLOBAL_API_CATEGORIES_LIST_IDS, GLOBAL_API_COINS_SORT_CATEGORIES_LIST} from "../constants/ApiCommand";
import {Table} from "react-bootstrap";
import PaginateCoinsSort from "../components/MainPage/PaginateCoins/PaginateCoinsSort";
import PaginateCoinsTr from "../components/MainPage/PaginateCoins/PaginateCoinsTr";
import {GL_NAME} from "../constants/ApiConstants";
import ErrorGetInfoAlert from "../general-components/Alerts/ErrorGetInfoAlert/ErrorGetInfoAlert";
import SpinnerAlert from "../general-components/Alerts/SpinnerAlert/SpinnerAlert";
import {getTheme} from "../functions/Theme/getTheme";
import {getLang} from "../functions/Lang/getLang";
import CategoriesDataList from "../components/CategoriesPage/CategoriesDataList/CategoriesDataList";

//css
import "../components/CategoriesPage/CategoriesPage.css";
import "../components/CategoriesPage/CategoriesPageMedia.css";
import SeoCategoriesPage from "../SEO/SeoCategoriesPage";


const CategoriesPage = ({setShowAlert}) => {

    //for sort data
    const [dataSort,setDataSort] = useState(null);

    //get category id and name
    const categoriesName = useLastWordPath();

    //data with all categories ids and names
    const dataIdsTitles = useApi(GLOBAL_API_CATEGORIES_LIST_IDS).data;

    //get name and id of the category
    const getIdAndName = () =>{
        let x;
        const title = [...categoriesName]
            .map(i=>{
                if(x===0 && i.toUpperCase() ===i ){x++; return i}
                else if(i.toUpperCase() === i){return " " + i}
                else{return i}
            }, x = 0).join("")
        if(Object.values(dataIdsTitles).length){
            return dataIdsTitles.find(categ => categ.name === title)
        }
    }

    //main data
    const data = useApi(
        GLOBAL_API_COINS_SORT_CATEGORIES_LIST(
            getIdAndName()?getIdAndName()['category_id']:'ethereum-ecosystem',100,1
        ));

    // console.log(getIdAndName())
    // console.log(data,'GLOBAL_API_COINS_SORT_CATEGORIES_LIST')
    // console.log(dataIdsTitles,'GLOBAL_API_CATEGORIES_LIST_IDS')

    return (
        <div className={`CategoriesPage container`}>

            {/*проверяет ошибки запроса*/}
            <ErrorGetInfoAlert data={data} />

            {
                getIdAndName() &&
                <>
                    <h4 className={'mt-5 mb-0'}>
                        {getLang() === "eng" && "Category: "}
                        {getLang() === "rus" && "Категория: "}
                        <strong>
                            {getIdAndName() && getIdAndName()[GL_NAME]}
                        </strong>
                    </h4>

                    <p className={`small mb-4`}>
                        {getLang() === "eng" && "This page shows the top 100 coins of the category"}
                        {getLang() === "rus" && "На данной странице показаны топ-100 монет категории"}
                        <strong className={"mx-1"}>
                            {getIdAndName() && getIdAndName()[GL_NAME]}
                        </strong>.<br />
                        {
                            getLang() === "eng" &&
                            "If the category contains less than one hundred coins, then all coins of this category are displayed."
                        }
                        {
                            getLang() === "rus" &&
                            "Если катеория содержит менее ста монет, то отображаются все монеты данной категории."
                        }
                    </p>
                </>
            }

            {/*SEO*/}
            {
                (getIdAndName() && getIdAndName()[GL_NAME]) &&
                <SeoCategoriesPage data={getIdAndName()[GL_NAME]} />
            }

            {
                (getIdAndName() && getIdAndName()[GL_NAME]) &&
                <CategoriesDataList name={getIdAndName()[GL_NAME]} />
            }

            {/*TABLE FOR COINS*/}
            {
                //check result and show spinner or table with coins
                Object.keys(data.data).length && getIdAndName()?
                    <>
                        <h4>
                            {getLang() === "eng" && "Top coins for this category."}
                            {getLang() === "rus" && "Лучшие монеты данной категории."}
                        </h4>
                        <Table className={getTheme(true)}>
                            <thead>
                                <PaginateCoinsSort data={data.data} setDataSort={setDataSort} />
                            </thead>

                            <tbody>
                            {
                                (dataSort ?? data.data).map(elem =>(
                                    <PaginateCoinsTr setShowAlert={setShowAlert} key={elem.id} elem={elem} />
                                ))
                            }
                            </tbody>
                        </Table>
                    </>
                    :
                    <SpinnerAlert />
            }

        </div>
    );
};

export default CategoriesPage;
