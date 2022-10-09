import React from 'react';
import {useApi} from "../../../../functions/useApi";
import {GLOBAL_API_COINS_TICKERS} from "../../../../constants/ApiCommand";
import {GL_TICKERS} from "../../../../constants/ApiConstants";
import {Spinner, Table} from "react-bootstrap";
import TickersTableTr from "./TickersTableTr";

const TickersTable = ({id}) => {

    const data = useApi(GLOBAL_API_COINS_TICKERS(id)).data[GL_TICKERS];
    // console.log(data,'GLOBAL_API_COINS_TICKERS');

    return (
        <div className={'TickersTable'}>
            {
                data?
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Название</th>
                            <th>Монеты</th>
                            <th>Спред</th>
                            <th>Доверие</th>
                            <th>Преобразованный объем</th>
                            <th>Об. торгов (24ч)</th>
                            <th>Ссылка</th>
                            <th>#</th>
                        </tr>
                        </thead>

                        <tbody>
                        {data.map((elem,ids) => (
                            <TickersTableTr key={ids} data={elem} ids={ids} />
                        ))}
                        </tbody>
                    </Table>:
                    <Spinner animation={"border"} variant={"primary"} />
            }
        </div>
    );
};

export default TickersTable;
