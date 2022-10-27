import React, {useState} from 'react';
import {Alert, Badge, InputGroup} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {getNumRedAfterDoot} from "../../../../functions/getNumRedAfterDoot";

const CoinConverter = ({symbol,data}) => {

    // console.log(data,'CoinConverter');

    const [nowCoinValue,setNowCoinValue] = useState('');
    const [selectValue,setSelectValue] = useState('usd');

    return (
        <div className={`CoinConverter w-100 p-3 my-3 border`}>
            <h4 className={'mb-0'}>
                <Badge>Конвертировать</Badge>
            </h4>

            {//планка с ценой одной монеты
                (Object.values(data).length && data['usd']) &&
                <Badge className={'mb-2'}>1{symbol} = ${data['usd']}</Badge>
            }

            {
                Object.keys(data).length?
                    <div className="box d-flex align-items-center mx-3">
                        <div className="inner w-50">
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
                        </div>

                        <div className="inner w-50 d-flex mx-3">
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
                        </div>
                    </div>
                    :
                    <Alert className={'mt-2 small p-2'}>
                        Информация для конвертирования неоступна для данной монеты.
                    </Alert>
            }
        </div>
    );
};

export default CoinConverter;