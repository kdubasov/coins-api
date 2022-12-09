import React from 'react';
import {Badge, Table} from "react-bootstrap";
import {useGetDBItems} from "../../../functions/AdminPage/useGetDBItems";
import FeedbackTr from "./FeedbackTr";
import {getTheme} from "../../../functions/Theme/getTheme";

const FeedbackTable = ({setShowAlert}) => {

    const data = useGetDBItems('/forms/feedbackForm');
    // console.log(data,'FeedbackTable');

    if (Boolean(data && data.length)){
        return (
            <div className={"FeedbackTable"}>
                <h5>
                    Заявки с формы обратной связи
                </h5>

                <Table className={getTheme(true)}>
                    <thead>
                    <tr className={"small"}>
                        <th>Дата</th>
                        <th>Email</th>
                        <th>Сообщение</th>
                        <th>Сотруд.</th>
                        <th>-</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        data.map((item, index) => (
                            <FeedbackTr data={item} key={index} setShowAlert={setShowAlert} />
                        ))
                    }
                    </tbody>
                </Table>
            </div>
        );
    }else {
        return (
            <h5>
                <Badge bg={"secondary"} className={"fw-light"}>
                    Сообщений с формы обратной связи пока нет.
                </Badge>
            </h5>
        )
    }
};

export default FeedbackTable;
