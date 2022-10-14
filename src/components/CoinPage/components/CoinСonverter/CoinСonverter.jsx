import React, {useState} from 'react';
import {Badge, InputGroup} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {getNumRedAfterDoot} from "../../../../functions/getNumRedAfterDoot";

const CoinConverter = ({symbol,data}) => {

    // console.log(data,'CoinConverter')

    const [nowCoinValue,setNowCoinValue] = useState('')
    const [selectValue,setSelectValue] = useState('usd')

    return (
        <div className={`CoinConverter w-100 p-3 my-3 border`}>
            <h4><Badge>Конвертировать</Badge></h4>

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
        </div>
    );
};

export default CoinConverter;