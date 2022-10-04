import React from 'react';
import {Badge, Spinner, Table} from "react-bootstrap";
import {useApi} from "../../../functions/useApi";
import {GLOBAL_API_CATEGORIES_LIST_ALL} from "../../../constants/ApiCommand";
import PaginateCategoriesTr from "./PaginateCategoriesTr";

const PaginateCategories = () => {

    const data = useApi(GLOBAL_API_CATEGORIES_LIST_ALL).data;
    // console.log(data,'GLOBAL_API_CATEGORIES_LIST_ALL data')


    return (
        <div className={`Categories container`}>

            {/*header*/}
            <header>
                <h3 className={'m-0'}>
                    <Badge>Категории</Badge>
                </h3>
                <p className={'m-0 mb-3'}>
                    Рейтинг категорий криптовалют основан на рыночной капитализации.
                    Примечание. Некоторые криптовалюты могут пересекаться в нескольких категориях.
                </p>
            </header>

            {/*table categories*/}
            {
                Object.values(data).length?
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Категория</th>
                                <th>Топ монеты</th>
                                <th>Изм. 24ч</th>
                                <th>Рын. кап.</th>
                                <th>Об. торгов 24ч</th>
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
