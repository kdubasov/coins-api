import React from 'react';
import {useUserAuth} from "../../../contexts/UserAuthContext";
import {useNavigate} from "react-router-dom";
import {addInBriefcase} from "../../../functions/BriefcaseDB/addInBriefcase";
import {useGetDBData} from "../../../hooks/useGetDbData";
import {deleteFromBriefcase} from "../../../functions/BriefcaseDB/deleteFromBriefcase";
import {Button} from "react-bootstrap";
import {getLang} from "../../../functions/Lang/getLang";
import {getTheme} from "../../../functions/Theme/getTheme";


const PaginateCoinsBriefcaseButton = ({elemId,setShowAlert,table,title,text = false}) => {

    //elemId - id элемента
    //setShowAlert - меняем видисомть элемента
    //table - таблица для редактирования монет/нфт/бирж
    //title - заголовк для алерта
    //text - отображать текст вместо + -

    const theme = getTheme(true);

    const { user } = useUserAuth();

    const navigate = useNavigate();

    //add coin in BriefcaseDB and realtimeDB database
    const addCoinBriefcase = (id) => {
        if (!user){
            navigate('/login');
            return false;
        }
        addInBriefcase(table,id,user.uid)
            .then(() => setShowAlert({show:true,text:`${title} успешно добавлена в избранное.`,variant:"success"}))
            .catch(() => setShowAlert({show:true,text:"Ошибка добавления в избранное.",variant:"danger"}))
            .finally(() => setTimeout(() => setShowAlert(false),1000 * 5))
    }

    //delete coin from briefcase
    const deleteCoinBriefcase = (id) => {
        deleteFromBriefcase(table,id,user.uid)
            .then(() => setShowAlert({show:true,text:`${title} успешно удалена из избранного.`,variant:"success"}))
            .catch(() => setShowAlert({show:true,text:"Ошибка удаления из избранного.",variant:"danger"}))
            .finally(() => setTimeout(() => setShowAlert(false),1000 * 5))
    }

    //выводит массив с id уже добавленных в избранное монет
    const briefcaseDBData = useGetDBData(`/briefcase/${user?.uid}/${table}`);
    // console.log(briefcaseDBData,'briefcaseDBData');

    return (
        <>
            {//add button
                Boolean(!Object.keys(briefcaseDBData).length || !Object.keys(briefcaseDBData).includes(elemId)) ?
                    text ?//проверяем нужна кнопка с текстом или без
                        <Button className={`but-${theme} border`} onClick={() => addCoinBriefcase(elemId)}>
                            {getLang() === "eng" && "Add in favorites"}
                            {getLang() === "rus" && "Добавить в избранное"}
                        </Button>:
                        <img
                            width={18}
                            src="/images/BriefcaseButton/not-added.svg"
                            alt="add"
                            onClick={() => addCoinBriefcase(elemId)}
                            style={{cursor:"pointer"}}
                        />:
                false
            }

            {// delete button
                Boolean(Object.keys(briefcaseDBData).length && Object.keys(briefcaseDBData).includes(elemId)) ?
                    text ?//проверяем нужна кнопка с текстом или без
                        <Button className={`but-${theme} border`}  onClick={() => deleteCoinBriefcase(elemId)}>
                            {getLang() === "eng" && "Delete from favorites"}
                            {getLang() === "rus" && "Удалить из избранного"}
                        </Button>:
                        <img
                            width={18}
                            src="/images/BriefcaseButton/added.svg"
                            alt="delete"
                            onClick={() => deleteCoinBriefcase(elemId)}
                            style={{cursor:"pointer"}}
                        />:
                false
            }
        </>
    );
};

export default PaginateCoinsBriefcaseButton;
