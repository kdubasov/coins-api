import React, {useState} from 'react';
import {useApi} from "../functions/useApi";
import {GLOBAL_API_COIN_LIST_ALL} from "../constants/ApiCommand";
import {Pagination, Table} from "react-bootstrap";
// import { LineChart, Line } from 'recharts';
import {
    GL_CH_PR_1H_PR,
    GL_CH_PR_24H_PR,
    GL_CUR_PRICE,
    GL_HIGH_24H, GL_IMAGE,
    GL_LOW_24H, GL_MC_RANK,
    GL_MK,
    GL_TT_VOL
} from "../constants/ApiConstants";


const PaginateCoins = () => {

    //paginate
    const [currentPage,setCurrentPage] = useState(1);
    const [sizePage] = useState(100);
    const [allPages] = useState(Math.ceil(13000/sizePage));

    //data
    const data = useApi(GLOBAL_API_COIN_LIST_ALL(sizePage,currentPage)).data;
    // console.log(data,'Data for coins (PaginateCoins)');

    //price chart
    // const getPriceChart = (arr) =>{
    //     let dataArrObj = [];
    //     if (arr){
    //         for (let elem in arr){
    //             dataArrObj.push({coord: arr[elem]})
    //         }
    //     }else {
    //         return []
    //     }
    //     console.log(dataArrObj,'getPriceChart')
    //     return dataArrObj
    // }

    //coins block with map
    const listCoinsOnePage = data.map((elem) =>(
        <tr key={elem.id}>
            {/*<th>*/}
            {/*    <LineChart width={200} height={100} data={getPriceChart(elem['sparkline_in_7d'].price)}>*/}
            {/*        <Line type="monotone" dot={false} dataKey="coord" stroke="#8884d8" strokeWidth={2} />*/}
            {/*    </LineChart>*/}
            {/*</th>*/}

            {/*id*/}
            <th>{elem[GL_MC_RANK]}</th>

            {/*img and name*/}
            <th><img style={{width:25,marginRight:5}} src={elem[GL_IMAGE]} alt=""/>
                {elem.name}
            </th>

            {/*current price*/}
            <th>{elem[GL_CUR_PRICE]}$</th>

            {/*price change 1 hour*/}
            <th style={String(elem[GL_CH_PR_1H_PR]).startsWith('-')?{color:'red'}:{color:'green'}}>
                {String(elem[GL_CH_PR_1H_PR]).slice(0,5)}%
            </th>

            {/*price change 24 hours*/}
            <th style={String(elem[GL_CH_PR_24H_PR]).startsWith('-')?{color:'red'}:{color:'green'}}>
                {String(elem[GL_CH_PR_24H_PR]).slice(0,5)}%
            </th>

            {/*min max price 24 hours*/}
            <th>{elem[GL_LOW_24H]}$ / {elem[GL_HIGH_24H]}$</th>

            {/*Объем торгов за 24 часа*/}
            <th>{elem[GL_TT_VOL]}$</th>

            {/*Рыночная кап-ция*/}
            <th>{elem[GL_MK]}$</th>
        </tr>
    ));

    return (
        <div className="m-3">

            {/*TABLE FOR COINS*/}
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