import React, {useState} from 'react';
import {useLastWordPath} from "../functions/useLastWordPath";
import {useApi} from "../functions/useApi";
import {GLOBAL_API_CATEGORIES_LIST_IDS, GLOBAL_API_COINS_SORT_CATEGORIES_LIST} from "../constants/ApiCommand";
import {Badge, Spinner, Table} from "react-bootstrap";
import PaginateCoinsSort from "../components/MainPage/PaginateCoins/PaginateCoinsSort";
import PaginateCoinsTr from "../components/MainPage/PaginateCoins/PaginateCoinsTr";
import {GL_NAME} from "../constants/ApiConstants";

const CategoriesPage = () => {

    //for sort data
    const [dataSort,setDataSort] = useState(null)

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
        )).data;

    // console.log(getIdAndName())
    // console.log(data,'GLOBAL_API_COINS_SORT_CATEGORIES_LIST')
    // console.log(dataIdsTitles,'GLOBAL_API_CATEGORIES_LIST_IDS')

    return (
        <div className={`CategoriesPage container`}>

            <h3 className={'mt-5 mb-0'}>
                Категория: <Badge>{getIdAndName() && getIdAndName()[GL_NAME]}</Badge>
            </h3>
            <p className={`w-75 mb-4`}>
                На данной странице показаны топ-100 монет категории
                <Badge className={'mx-1'} bg={"secondary"}>
                    {getIdAndName() && getIdAndName()[GL_NAME]}
                </Badge>.
                Если катеория содержит менее ста монет, то отображаются все монеты данной категории.
            </p>

            {/*TABLE FOR COINS*/}
            {
                //check result and show spinner or table with coins
                Object.keys(data).length && getIdAndName()?
                    <Table striped bordered hover>
                        <thead>
                            <PaginateCoinsSort data={data} setDataSort={setDataSort} />
                        </thead>

                        <tbody>
                        {
                            (dataSort ?? data).map(elem =>(
                                <PaginateCoinsTr key={elem.id} elem={elem} />
                            ))
                        }
                        </tbody>
                    </Table>
                    :
                    <Spinner animation={"border"} className={'mb-3'} variant={"primary"} />
            }

        </div>
    );
};

export default CategoriesPage;