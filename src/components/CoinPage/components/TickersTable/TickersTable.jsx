import React, {useState} from 'react';
import {useApi} from "../../../../hooks/useApi";
import {GLOBAL_API_COINS_TICKERS} from "../../../../constants/ApiCommand";
import {GL_TICKERS} from "../../../../constants/ApiConstants";
import {Alert, Badge, Spinner, Table} from "react-bootstrap";
import TickersTableTr from "./TickersTableTr";
import TickersTableShowMore from "./TickersTableShowMore";
import {getTheme} from "../../../../functions/Theme/getTheme";

const TickersTable = ({id}) => {

    const data = useApi(GLOBAL_API_COINS_TICKERS(id)).data[GL_TICKERS];
    // console.log(data,'GLOBAL_API_COINS_TICKERS');

    const [showMore,setShowMore] = useState(false)

    return (
        <div className={'TickersTable'}>
            <h4><Badge>Рынки:</Badge></h4>

            {
                data && !Object.values(data).length &&
                <Alert className={'small p-2'}>
                    Не удалось найти рынки для данной монеты, попробуйте позже.
                </Alert>
            }

            {
                data?
                    <>
                        <Table striped bordered hover variant={getTheme(true)}>
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
                            {data.slice(0,(showMore?100:20)).map((elem,ids) => (
                                <TickersTableTr key={ids} data={elem} ids={ids} />
                            ))}
                            </tbody>
                        </Table>
                        {Object.values(data).length>=20 && <TickersTableShowMore showMore={showMore} setShowMore={setShowMore} />}
                    </>:
                    <Spinner animation={"border"} variant={"primary"} />
            }
        </div>
    );
};

export default TickersTable;
