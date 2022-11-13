import React from 'react';
import {useUserAuth} from "../../../contexts/UserAuthContext";
import {useNavigate} from "react-router-dom";
import {addInBriefcase} from "../../../functions/BriefcaseDB/addInBriefcase";
import {useGetDBData} from "../../../hooks/useGetDbData";
import {Button} from "react-bootstrap";
import {deleteFromBriefcase} from "../../../functions/BriefcaseDB/deleteFromBriefcase";


const PaginateCoinsBriefcaseButton = ({elemId,setShowAlert,table,title,text = false}) => {

    //elemId - id элемента
    //setShowAlert - меняем видисомть элемента
    //table - таблица для редактирования монет/нфт/бирж
    //title - заголовк для алерта
    //text - отображать текст вместо + -

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
            {
                Boolean(!Object.keys(briefcaseDBData).length || !Object.keys(briefcaseDBData).includes(elemId)) &&
                //add button
                    <Button
                        onClick={() => addCoinBriefcase(elemId)}
                        size={"sm"}
                        style={{padding:'0 .4em',marginLeft:10}}
                        variant={"success"}
                    >
                        {text ? "Добавить в избранное" : "+"}
                    </Button>
            }
            {
                Boolean(Object.keys(briefcaseDBData).length && Object.keys(briefcaseDBData).includes(elemId)) &&
                    // delete button
                    <Button
                        size={"sm"}
                        onClick={() => deleteCoinBriefcase(elemId)}
                        style={{padding:'0 .4em',marginLeft:10}}
                        variant={"danger"}
                    >
                        {text ? "Удалить из избранного" : "+"}
                    </Button>
            }
        </>
    );
};

export default PaginateCoinsBriefcaseButton;
