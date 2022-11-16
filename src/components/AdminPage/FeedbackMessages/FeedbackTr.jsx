import React from 'react';
import {Badge, Button} from "react-bootstrap";
import {deleteFromBriefcase} from "../../../functions/AdminPage/deleteFromForms";

const FeedbackTr = ({data,setShowAlert}) => {

    const handleDeleteItem = () => {
        deleteFromBriefcase('feedbackForm',data.id)
            .then(() => setShowAlert({show:true,text:"Сообщение успешно удалено.",variant:"success"}))
            .catch(() => setShowAlert({show:true,text:"Сообщение не удалено. Ошибка!",variant:"danger"}))
            .finally(() => setTimeout(() => setShowAlert({show:false,text:"",variant:""}),3000))
    }

    return (
        <tr className={"small"}>
            {/*дата*/}
            <td>{data.date}</td>
            {/*email*/}
            <td>{data.email}</td>
            {/*message*/}
            <td>{data.message}</td>
            {/*сотрудничество*/}
            <td>
                {
                    data.cooperation ?
                        <Badge bg={"success"}>Да</Badge> :
                        <Badge bg={"danger"}>Нет</Badge>
                }
            </td>
            {/*delete button*/}
            <td>
                <Button variant={"outline-danger"} size={"sm"} onClick={handleDeleteItem}>
                    Удалить
                </Button>
            </td>
        </tr>
    );
};

export default FeedbackTr;
