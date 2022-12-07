import React, {useState} from 'react';
import {Alert, InputGroup} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {getNumRedAfterDoot} from "../../../../functions/getNumRedAfterDoot";
import {getTheme} from "../../../../functions/Theme/getTheme";
import {getLang} from "../../../../functions/Lang/getLang";

//css
import "./CoinConverter.css";
import "./CoinConverterMedia.css";

const CoinConverter = ({symbol,data}) => {

    // console.log(data,'CoinConverter');

    const [nowCoinValue,setNowCoinValue] = useState('');
    const [selectValue,setSelectValue] = useState('usd');

    return (
        <div className={`CoinConverter ${getTheme(true)}`}>
            <h4 className={'mb-0'}>
                {getLang() === "eng" && `Convert ${symbol} to other currencies.`}
                {getLang() === "rus" && `Конвертировать ${symbol} в другие валюты.`}
            </h4>
            <p className="small">
                {getLang() === "eng" && "Currently "}
                {getLang() === "rus" && "В данный момент "}
                {//планка с ценой одной монеты
                    (Object.values(data).length && data['usd']) &&
                    `1${symbol} = $${data['usd'] && data['usd'].toLocaleString()}`
                }
            </p>

            {
                Object.keys(data).length?
                    <div className="converter-container">

                        <InputGroup>
                            <InputGroup.Text id="inputGroup-sizing-default">
                                {symbol}
                            </InputGroup.Text>
                            <Form.Control
                                value={nowCoinValue}
                                onChange={e => setNowCoinValue(Number(e.target.value))}
                                type={"number"}
                                placeholder={'Enter value'}
                            />
                        </InputGroup>

                        <img src={`/images/CoinConverter/arrow-circle-${getTheme(true)}.svg`} alt=""/>

                        <InputGroup>
                            <Form.Select className={'w-25'} value={selectValue} onChange={e => setSelectValue(e.target.value)}>
                                {Object.keys(data).map(elem => (
                                    <option key={elem} value={elem}>{elem.toUpperCase()}</option>
                                ))}
                            </Form.Select>
                            <Form.Control
                                disabled
                                className={'w-75'}
                                value={getNumRedAfterDoot(nowCoinValue * data[selectValue],3)}
                            />
                        </InputGroup>

                    </div>
                    :
                    <Alert className={'mt-2 small p-2'}>
                        {getLang() === "eng" && "The conversion information is not available for this coin."}
                        {getLang() === "rus" && "Информация для конвертирования неоступна для данной монеты."}
                    </Alert>
            }
        </div>
    );
};

export default CoinConverter;
