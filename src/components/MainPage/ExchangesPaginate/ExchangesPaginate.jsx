import React, {useState} from 'react';
import {Table} from "react-bootstrap";
import {useApi} from "../../../hooks/useApi";
import {GLOBAL_API_EXCHANGES, GLOBAL_API_EXCHANGES_LIST, GLOBAL_API_SIMPLE_PRICE} from "../../../constants/ApiCommand"
import PaginationButtons from "../../../general-components/PaginationButtons/PaginationButtons";
import ExchangesPaginateTr from "./ExchangesPaginateTr";
import {getTheme} from "../../../functions/Theme/getTheme";
import {getLang} from "../../../functions/Lang/getLang";
import SpinnerAlert from "../../../general-components/Alerts/SpinnerAlert";

const ExchangesPaginate = ({setShowAlert}) => {

    //all pages
    const exchangesAllIds = useApi(GLOBAL_API_EXCHANGES_LIST).data.length;

    //paginate
    const [currentPage,setCurrentPage] = useState(1);//now page
    const [sizePage] = useState(50);

    //main data
    const data = useApi(GLOBAL_API_EXCHANGES(sizePage,currentPage)).data;
    // console.log(data,'GLOBAL_API_EXCHANGES');

    //цена btc в $
    const btcPrice = useApi(GLOBAL_API_SIMPLE_PRICE('bitcoin','usd')).data;

    return (
        <div className={`ExchangesPaginate container`}>
            <h4 className={"m-0"}>
                {getLang() === 'rus' && "Биржи"}
                {getLang() === 'eng' && "Exchanges"}
            </h4>

            <p className={"small mb-3"}>
                {getLang() === 'rus' && 'Список бирж отсортированных по объему торгов за 24 часа.'}
                {getLang() === 'eng' && 'List of exchanges sorted by 24 hour trading volume.'}
            </p>

            {
                //check result and show spinner or table with coins
                Object.keys(data).length?
                    <Table className={getTheme(true)}>
                        <thead>
                        <tr className={"small"}>
                            <th>#</th>
                            <th>
                                {getLang() === 'rus' && "Название"}
                                {getLang() === 'eng' && "Name"}
                            </th>
                            <th>
                                {getLang() === 'rus' && "Очки доверия"}
                                {getLang() === 'eng' && "Trust Points"}
                            </th>
                            <th>
                                {getLang() === 'rus' && "Об. торгов 24ч"}
                                {getLang() === 'eng' && "Volume 24h"}
                            </th>
                            <th>
                                {getLang() === 'rus' && "Оф. сайт"}
                                {getLang() === 'eng' && "Official website"}
                            </th>
                            <th>
                                {getLang() === 'rus' && "Год основания"}
                                {getLang() === 'eng' && "Year of foundation"}
                            </th>
                            <th>
                                {getLang() === 'rus' && "Страна основания"}
                                {getLang() === 'eng' && "Country of foundation"}
                            </th>
                        </tr>
                        </thead>

                        <tbody>
                        {
                            data.map(elem =>(
                               <ExchangesPaginateTr elem={elem} key={elem.id} setShowAlert={setShowAlert} btcPrice={btcPrice} />
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
                allPages={exchangesAllIds?Math.ceil(exchangesAllIds/sizePage):0}
            />
        </div>
    );
};

export default ExchangesPaginate;
