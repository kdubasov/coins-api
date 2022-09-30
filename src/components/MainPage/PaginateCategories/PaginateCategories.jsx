import React from 'react';
import {Badge, Spinner, Table} from "react-bootstrap";
import {useApi} from "../../../functions/useApi";
import {GLOBAL_API_CATEGORIES_LIST_ALL} from "../../../constants/ApiCommand";
import {GL_CAT_TOP_3, GL_MK, GL_MKCH_24H, GL_NAME, GL_VOL_24H} from "../../../constants/ApiConstants";
import {getNumRedAfterDoot} from "../../../functions/getNumRedAfterDoot";

const PaginateCategories = () => {

    const data = useApi(GLOBAL_API_CATEGORIES_LIST_ALL).data;
    console.log(data,'GLOBAL_API_CATEGORIES_LIST_ALL data')

    return (
        <div className={`Categories container`}>
            <h3><Badge>Категории</Badge></h3>
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
                    Object.values(data).length?
                        data.map((elem,ids) =>(
                            <tr key={elem.id}>
                                <td>{ids + 1}</td>
                                <td>{elem[GL_NAME]}</td>
                                <td>
                                    <img width={25} src={elem[GL_CAT_TOP_3][0]} alt=""/>
                                    <img width={25} className={'mx-2'} src={elem[GL_CAT_TOP_3][1]} alt=""/>
                                    <img width={25} src={elem[GL_CAT_TOP_3][2]} alt=""/>
                                </td>
                                <td style={String(elem[GL_MKCH_24H]).startsWith('-')?{color:"red"}:{color:"green"}}>
                                    {String(elem[GL_MKCH_24H]).startsWith('-')?"":"+"}
                                    {getNumRedAfterDoot(elem[GL_MKCH_24H],3)}%
                                </td>
                                <td>{getNumRedAfterDoot(elem[GL_MK])}$</td>
                                <td>{getNumRedAfterDoot(elem[GL_VOL_24H])}$</td>
                            </tr>
                        )):
                        <Spinner animation={"border"} variant={"primary"} />
                }
                </tbody>
            </Table>
        </div>
    );
};

export default PaginateCategories;
