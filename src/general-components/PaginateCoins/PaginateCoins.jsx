import React, {useState} from 'react';
import {useApi} from "../../functions/useApi";
import {GLOBAL_API_COIN_LIST_ALL} from "../../constants/ApiCommand";
import {Pagination, Table} from "react-bootstrap";
import PaginateCoinsTr from "./PaginateCoinsTr";


const PaginateCoins = () => {

    //paginate
    const [currentPage,setCurrentPage] = useState(1);
    const [sizePage] = useState(20);
    const [allPages] = useState(Math.ceil(12500/sizePage));

    //data (ADD ERROR CHECK)
    const data = useApi(GLOBAL_API_COIN_LIST_ALL(sizePage,currentPage)).data;
    // console.log(data,'Data for coins (PaginateCoins)');

    return (
        <div className="m-3">

            {/*TABLE FOR COINS*/}
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Название</th>
                    <th>Актуальная цена</th>
                    <th>За 1 час</th>
                    <th>За 24 часа</th>
                    <th>Мин/Макс 24ч</th>
                    <th>Объем торгов за 24 часа	</th>
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