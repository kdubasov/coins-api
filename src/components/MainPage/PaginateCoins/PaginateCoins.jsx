import React, {useEffect, useState} from 'react';
import {useApi} from "../../../functions/useApi";
import {
    GLOBAL_API_COIN_LIST_ALL,
    GLOBAL_API_GLOBAL_COMMAND
} from "../../../constants/ApiCommand";
import {Badge, Spinner, Table} from "react-bootstrap";
import PaginateCoinsTr from "./PaginateCoinsTr";
import {GL_ACT_COINS} from "../../../constants/ApiConstants";
import PaginateCoinsSort from "./PaginateCoinsSort";
import PaginationButtons from "./PaginationButtons";


//table with coins
const PaginateCoins = () => {

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

        // console.log(dataSort)

        //for set paginate pages count
        if (globalData){
            const dataSort = Math.ceil(globalData[GL_ACT_COINS]/sizePage)
            setAllPages(dataSort)
        }

    },[globalData,sizePage,dataSort])


    return (
        <div className="container">

            <h3 className={'mb-0'}><Badge>Цены криптовалют.</Badge></h3>
            <p>
                Ниже представлены все существующие на мировом рынке монеты,
                ранжированныe по рыночной капитализации.
            </p>

            {/*TABLE FOR COINS*/}
            {
                //check result and show spinner or table with coins
                Object.keys(data).length?
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
                    <Spinner animation={"border"} variant={"primary"} className={'mb-3'} />
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