import React, {useEffect, useState} from 'react';
import {useApi} from "../../functions/useApi";
import {
    GLOBAL_API_COIN_LIST_ALL,
    GLOBAL_API_GLOBAL_COMMAND
} from "../../constants/ApiCommand";
import {Pagination, Table} from "react-bootstrap";
import PaginateCoinsTr from "./PaginateCoinsTr";
import {GL_ACT_COINS} from "../../constants/ApiConstants";


//table with coins
const PaginateCoins = () => {

    //global data about main changes (ADD ERROR CHECK)
    const globalData = useApi(GLOBAL_API_GLOBAL_COMMAND).data.data;

    //paginate
    const [currentPage,setCurrentPage] = useState(1);
    const [sizePage] = useState(20);

    //all paginate pages count
    const [allPages,setAllPages] = useState(100);

    //data (ADD ERROR CHECK)
    const data = useApi(GLOBAL_API_COIN_LIST_ALL(sizePage,currentPage)).data;
    // console.log(data,'Data for coins (PaginateCoins)');


    useEffect(() =>{

        //for set paginate pages count
        if (globalData){
            setAllPages(Math.ceil(globalData[GL_ACT_COINS]/sizePage))
        }

    },[globalData,sizePage])


    return (
        <div className="container">

            {/*TABLE FOR COINS*/}
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Название</th>
                    <th>Акт. цена</th>
                    <th>За 1 час</th>
                    <th>За 24 часа</th>
                    <th>За 7 дней</th>
                    <th>Мин/Макс 24ч</th>
                    <th>Об. торг. 24 часа	</th>
                    <th>Рыночная кап-ция</th>
                </tr>
                </thead>

                <tbody>
                    {
                        data.map(elem =>(
                            <PaginateCoinsTr key={elem.id} elem={elem} />
                        ))
                    }
                </tbody>
            </Table>

            {/*PAGINATION*/}
            <Pagination>
                <Pagination.Prev
                    disabled={currentPage===1}
                    onClick={() => setCurrentPage(currentPage -1)}
                />

                {//if currentPage===1 not show dots in start
                    currentPage===1? '' :
                    <>
                        <Pagination.Item onClick={() => setCurrentPage(1)}>{1}</Pagination.Item>
                        <Pagination.Ellipsis />
                    </>
                }

                <Pagination.Item active>{currentPage}</Pagination.Item>

                {//if currentPage===allPages not show dots in end
                    currentPage===allPages?'':
                    <>
                        <Pagination.Ellipsis />
                        <Pagination.Item onClick={() => setCurrentPage(allPages)}>{allPages}</Pagination.Item>
                    </>
                }

                <Pagination.Next
                    disabled={currentPage===allPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                />
            </Pagination>
        </div>
    );
};

export default PaginateCoins;