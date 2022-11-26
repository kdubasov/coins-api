import React, {useState} from 'react';
import {useApi} from "../../../hooks/useApi";
import {GLOBAL_API_HOLD_COMPANIES} from "../../../constants/ApiCommand";
import {Badge, Form} from "react-bootstrap";
import InfoHoldCompanies from "./InfoHoldCompanies";
import TableHoldCompanies from "./TableHoldCompanies";
import {GL_COMP, GL_HOLD_TT_VAL} from "../../../constants/ApiConstants";
import {getLang} from "../../../functions/Lang/getLang";
import SpinnerAlert from "../../../general-components/Alerts/SpinnerAlert";

const HoldCompanies = () => {

    const coinsArr = ['bitcoin', 'ethereum'];
    const [selectCoin,setSelectCoin] = useState(coinsArr[0]);

    const data = useApi(GLOBAL_API_HOLD_COMPANIES(selectCoin)).data;
    // console.log(data,'HoldCompanies');

    return (
        <div className={'HoldCompanies container'}>
            <h4 className={"m-0"}>
                {getLang() === 'rus' && "Холдинговые компании"}
                {getLang() === 'eng' && "Holding companies"}
            </h4>

            <p className={"mb-3 small"}>
                {
                    getLang() === 'rus' &&
                    "Холдинг - стратегия по покупке и хранению криптовалют. Менее рискованная," +
                    " но и потенциально менее прибыльная, чем трейдинг. Холдом называют стратегию," +
                    " при которой пользователь/компания покупает криптовалюту и «забывает» про нее," +
                    " то есть не торгует, а просто ждет продолжительное время, пока его актив растет в цене."
                }
                {
                    getLang() === 'eng' &&
                    "Holding is a strategy for buying and storing cryptocurrencies. Less risky, but also potentially" +
                    " less profitable than trading. A hold is a strategy in which a user/company buys a cryptocurrency" +
                    " and “forgets” about it, that is, does not trade, but simply waits for a long time until" +
                    " its asset grows in price."
                }
            </p>

            {//check data
                Object.values(data).length?
                    <>
                        {/*select for coin with text*/}
                        <div className="box d-flex align-items-center my-5">
                            <h5 className={'m-0'}>
                                <Badge bg={'secondary'} className={'fw-light d-flex align-items-center'}>
                                    <Form.Select
                                        value={selectCoin}
                                        onChange={e => setSelectCoin(e.target.value)}
                                        className={'w-25 mx-2'}
                                        size={"sm"}
                                    >
                                        {coinsArr.map(coin => (
                                            <option value={coin} key={coin}>{coin.toUpperCase()}</option>
                                        ))}
                                    </Form.Select>
                                    <p className={"m-0"}>
                                        {getLang() === 'rus' && "выбран для отображения информации."}
                                        {getLang() === 'eng' && "is currently selected for displaying information."}
                                    </p>
                                </Badge>
                            </h5>
                        </div>

                        {/*main data of hold*/}
                        <InfoHoldCompanies info={data} />

                        {//Table with companies
                            Object.values(data[GL_COMP]).length &&
                            <>
                                <h4 className={'mb-2'}>
                                    {getLang() === 'rus' && "Лучшие холдинговые компании для данной монеты"}
                                    {getLang() === 'eng' && "Best holding companies for this coin"}
                                </h4>
                                <TableHoldCompanies value={data[GL_HOLD_TT_VAL]} data={data[GL_COMP]} />
                            </>
                        }
                    </>:
                    <SpinnerAlert />
            }

        </div>
    );
};

export default HoldCompanies;
