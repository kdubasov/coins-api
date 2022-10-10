import React, {useState} from 'react';
import {useApi} from "../../../../functions/useApi";
import {GLOBAL_API_COINS_TICKERS} from "../../../../constants/ApiCommand";
import {GL_TICKERS} from "../../../../constants/ApiConstants";
import {Spinner, Table} from "react-bootstrap";
import TickersTableTr from "./TickersTableTr";
import TickersTableShowMore from "./TickersTableShowMore";

const TickersTable = ({id}) => {

    const data = useApi(GLOBAL_API_COINS_TICKERS(id)).data[GL_TICKERS];
    // console.log(data,'GLOBAL_API_COINS_TICKERS');

    const [showMore,setShowMore] = useState(false)

    return (
        <div className={'TickersTable'}>
            {
                data?
                    <>
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
                                <th>Последняя сделка</th>
                            </tr>
                            </thead>

                            <tbody>
                            {data.slice(0,(showMore?100:50)).map((elem,ids) => (
                                <TickersTableTr key={ids} data={elem} ids={ids} />
                            ))}
                            </tbody>
                        </Table>
                        <TickersTableShowMore showMore={showMore} setShowMore={setShowMore} />
                    </>:
                    <Spinner animation={"border"} variant={"primary"} />
            }
        </div>
    );
};

export default TickersTable;
