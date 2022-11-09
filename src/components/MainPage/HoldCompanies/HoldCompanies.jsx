import React, {useState} from 'react';
import {useApi} from "../../../hooks/useApi";
import {GLOBAL_API_HOLD_COMPANIES} from "../../../constants/ApiCommand";
import {Alert, Badge, Form} from "react-bootstrap";
import InfoHoldCompanies from "./InfoHoldCompanies";
import TableHoldCompanies from "./TableHoldCompanies";
import {GL_COMP, GL_HOLD_TT_VAL} from "../../../constants/ApiConstants";

const HoldCompanies = () => {

    const coinsArr = ['bitcoin', 'ethereum'];
    const [selectCoin,setSelectCoin] = useState(coinsArr[0]);

    const data = useApi(GLOBAL_API_HOLD_COMPANIES(selectCoin)).data;
    // console.log(data,'HoldCompanies');

    return (
        <div className={'HoldCompanies container'}>
            <h3><Badge>Холдинговые компании</Badge></h3>
            <p>
                Холдинг - стратегия по покупке и хранению криптовалют.
                Менее рискованная, но и потенциально менее прибыльная, чем трейдинг.
                Холдом называют стратегию, при которой пользователь/компания покупает
                криптовалюту и «забывает» про нее, то есть не торгует, а просто ждет
                продолжительное время, пока его актив растет в цене.
            </p>

            {//check data
                Object.values(data).length?
                    <>
                        {/*select for coin with text*/}
                        <div className="box d-flex align-items-center my-5">
                            <h5 className={'m-0'}>
                                <Badge bg={'secondary'} className={'fw-light'}>
                                    Сейчас для отображения информации выбрана монета
                                </Badge>
                            </h5>

                            <Form.Select
                                value={selectCoin}
                                onChange={e => setSelectCoin(e.target.value)}
                                className={'w-25 mx-2'}
                                size={"sm"}
                            >
                                {coinsArr.map(coin => (
                                    <option value={coin} key={coin}>{coin}</option>
                                ))}
                            </Form.Select>
                        </div>

                        {/*main data of hold*/}
                        <InfoHoldCompanies info={data} />

                        {//Table with companies
                            Object.values(data[GL_COMP]).length &&
                            <>
                                <Badge className={'mb-2'}>Лучшие холдинговые компании данной монеты</Badge>
                                <TableHoldCompanies value={data[GL_HOLD_TT_VAL]} data={data[GL_COMP]} />
                            </>
                        }
                    </>:
                    <Alert>Информация пока недоступна или еще не загрузилась.</Alert>
            }

        </div>
    );
};

export default HoldCompanies;
