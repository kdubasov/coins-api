import React, {useState} from 'react';
import {Badge, Spinner, Table} from "react-bootstrap";
import {useApi} from "../../../hooks/useApi";
import {GLOBAL_API_EXCHANGES, GLOBAL_API_EXCHANGES_LIST} from "../../../constants/ApiCommand"
import PaginationButtons from "../PaginateCoins/PaginationButtons";
import ExchangesPaginateTr from "./ExchangesPaginateTr";
import {getTheme} from "../../../functions/Theme/getTheme";

const ExchangesPaginate = () => {

    //all pages
    const exchangesAllIds = useApi(GLOBAL_API_EXCHANGES_LIST).data.length;

    //paginate
    const [currentPage,setCurrentPage] = useState(1);//now page
    const [sizePage] = useState(50);

    //main data
    const data = useApi(GLOBAL_API_EXCHANGES(sizePage,currentPage)).data;
    // console.log(data,'GLOBAL_API_EXCHANGES');


    return (
        <div className={`ExchangesPaginate container`}>
            <h3><Badge>Список бирж</Badge></h3>

            {
                //check result and show spinner or table with coins
                Object.keys(data).length?
                    <Table striped bordered hover variant={getTheme(true)}>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Биржа</th>
                            <th>Очки доверия</th>
                            <th>Об. торгов 24ч</th>
                            <th>Оф. сайт</th>
                            <th>Год осн.</th>
                            <th>Страна осн.</th>
                        </tr>
                        </thead>

                        <tbody>
                        {
                            data.map(elem =>(
                               <ExchangesPaginateTr elem={elem} key={elem.id} />
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
                allPages={exchangesAllIds?Math.ceil(exchangesAllIds/sizePage):0}
            />
        </div>
    );
};

export default ExchangesPaginate;
