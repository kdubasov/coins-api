import React, {useState} from 'react';
import {useApi} from "../functions/useApi";
import {GLOBAL_API_COIN_LIST_ALL_30D} from "../constants/ApiCommand";
import {Pagination, Table} from "react-bootstrap";

const PaginateCoins = () => {

    //paginate
    const [currentPage,setCurrentPage] = useState(1);
    const [sizePage] = useState(10);
    const [allPages] = useState(Math.ceil(10000/sizePage));

    //data
    const data = useApi(GLOBAL_API_COIN_LIST_ALL_30D(sizePage,currentPage)).data;
    console.log(data,'Data for coins (PaginateCoins)');

    //coins block with map
    const listCoinsOnePage = data.map((elem) =>(
        <tr key={elem.id}>
            <th>{elem['market_cap_rank']}</th>
            <th><img style={{width:25,marginRight:5}} src={elem.image} alt=""/>
                {elem.name}
            </th>
            <th>{elem['current_price']}$</th>
            <th>{String(elem['price_change_percentage_1h_in_currency']).slice(0,5)}%</th>
            <th>{String(elem['price_change_percentage_24h']).slice(0,5)}%</th>
            <th>{elem['low_24h']}$ / {elem['high_24h']}$</th>
            <th>{elem['total_volume']}$</th>
            <th>{elem['market_cap']}$</th>
        </tr>
    ));

    return (
        <div className="p-3 m-3" style={{border:"1px solid #555"}}>

            <Table striped bordered hover>
                <thead>
                <tr>
                    <th></th>
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
                    {listCoinsOnePage}
                </tbody>
            </Table>

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