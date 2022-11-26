import React from 'react';
import {Spinner, Table} from "react-bootstrap";
import {useApi} from "../../../hooks/useApi";
import {GLOBAL_API_CATEGORIES_LIST_ALL} from "../../../constants/ApiCommand";
import PaginateCategoriesTr from "./PaginateCategoriesTr";
import {getTheme} from "../../../functions/Theme/getTheme";
import {getLang} from "../../../functions/Lang/getLang";

const PaginateCategories = () => {

    const data = useApi(GLOBAL_API_CATEGORIES_LIST_ALL).data;
    // console.log(data,'GLOBAL_API_CATEGORIES_LIST_ALL data');


    return (
        <div className={`Categories container`}>

            {/*header*/}
            <header>
                <h4 className={'m-0'}>
                    {getLang() === 'rus' && "Категории"}
                    {getLang() === 'eng' && "Categories"}
                </h4>
                <p className={'m-0 mb-3 small'}>
                    {
                        getLang() === 'rus' &&
                        "Рейтинг категорий криптовалют основан на рыночной капитализации. Криптовалюты могут пересекаться в нескольких категориях."
                    }
                    {
                        getLang() === 'eng' &&
                        "Cryptocurrency categories are ranked based on market capitalization. Cryptocurrencies can overlap in several categories."
                    }
                </p>
            </header>

            {/*table categories*/}
            {
                Object.values(data).length?
                    <Table striped bordered hover variant={getTheme(true)}>
                        <thead>
                            <tr className={"small"}>
                                <th>#</th>
                                <th>
                                    {getLang() === 'rus' && "Категория"}
                                    {getLang() === 'eng' && "Category"}
                                </th>
                                <th>
                                    {getLang() === 'rus' && "Топ монеты"}
                                    {getLang() === 'eng' && "Top coins"}
                                </th>
                                <th>
                                    {getLang() === 'rus' && "Изм. 24ч"}
                                    {getLang() === 'eng' && "Change 24h"}
                                </th>
                                <th>
                                    {getLang() === 'rus' && "Рын. кап."}
                                    {getLang() === 'eng' && "Market cap"}
                                </th>
                                <th>
                                    {getLang() === 'rus' && "Об. торгов 24ч"}
                                    {getLang() === 'eng' && "Volume 24h"}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((elem,ids) =>(
                                    <PaginateCategoriesTr key={elem.id} elem={elem} ids={ids} />
                                ))
                            }
                        </tbody>
                    </Table>:
                    <Spinner animation={"border"} variant={"primary"} />
            }
        </div>
    );
};

export default PaginateCategories;
