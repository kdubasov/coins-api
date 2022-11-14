import React from 'react';
import {Alert, Table} from "react-bootstrap";
import {GL_CUR_PRICE, GL_MK, GL_TT_VOL} from "../../../../constants/ApiConstants";
import {getNumRedAfterDoot} from "../../../../functions/getNumRedAfterDoot";
import {getTheme} from "../../../../functions/Theme/getTheme";

const DateInfoResult = ({data,date}) => {

    return (
        <div className={'DateInfoResult mt-2'}>
            {
                data?
                    <Table striped bordered hover variant={getTheme(true)}>
                        <thead>
                        <tr>
                            <th>Дата</th>
                            <th>Цена</th>
                            <th>Рыночная капит.</th>
                            <th>Объем торгов</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>{date}</td>
                            <td>
                                {
                                    data[GL_CUR_PRICE]['usd'] &&
                                        getNumRedAfterDoot(data[GL_CUR_PRICE]['usd']).toLocaleString("RU") + '$'
                                }
                            </td>
                            <td>
                                {
                                    data[GL_MK]['usd'] &&
                                        getNumRedAfterDoot(data[GL_MK]['usd']).toLocaleString("RU") + '$'
                                }
                            </td>
                            <td>
                                {
                                    data[GL_TT_VOL]['usd'] &&
                                        getNumRedAfterDoot(data[GL_TT_VOL]['usd']).toLocaleString("RU") + '$'
                                }
                            </td>
                        </tr>
                        </tbody>
                    </Table>:
                    <Alert>
                        Информация за <strong>{date}</strong> не найдена, попробуйте другую дату.
                    </Alert>
            }
        </div>
    );
};

export default DateInfoResult;
