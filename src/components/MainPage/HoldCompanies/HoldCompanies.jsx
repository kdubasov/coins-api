import React, {useState} from 'react';
import {useApi} from "../../../hooks/useApi";
import {GLOBAL_API_HOLD_COMPANIES} from "../../../constants/ApiCommand";
import {Container, Form} from "react-bootstrap";
import InfoHoldCompanies from "./InfoHoldCompanies";
import TableHoldCompanies from "./TableHoldCompanies";
import {GL_COMP, GL_HOLD_TT_VAL} from "../../../constants/ApiConstants";
import {getLang} from "../../../functions/Lang/getLang";
import SpinnerAlert from "../../../general-components/Alerts/SpinnerAlert/SpinnerAlert";
import {getTheme} from "../../../functions/Theme/getTheme";

//css
import "./HoldCompanies.css";

const HoldCompanies = () => {

    const coinsArr = ['bitcoin', 'ethereum'];
    const [selectCoin,setSelectCoin] = useState(coinsArr[0]);

    const data = useApi(GLOBAL_API_HOLD_COMPANIES(selectCoin)).data;
    // console.log(data,'HoldCompanies');

    return (
        <Container className={`HoldCompanies ${getTheme(true)}`}>
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
                        <h5 className={"select-value"}>
                            <Form.Select
                                value={selectCoin}
                                onChange={e => setSelectCoin(e.target.value)}
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
                        </h5>

                        {/*main data of hold*/}
                        <InfoHoldCompanies info={data} />

                        {//Table with companies
                            Object.values(data[GL_COMP]).length &&
                            <>
                                <h4 className={'mb-2'}>
                                    {getLang() === 'rus' && `Лучшие холдинговые компании ${selectCoin.toUpperCase()}`}
                                    {getLang() === 'eng' && `Best holding companies for ${selectCoin.toUpperCase()}`}
                                </h4>
                                <TableHoldCompanies value={data[GL_HOLD_TT_VAL]} data={data[GL_COMP]} />
                            </>
                        }
                    </>:
                    <SpinnerAlert />
            }

        </Container>
    );
};

export default HoldCompanies;
