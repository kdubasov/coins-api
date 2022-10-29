import React from 'react';
import {useUserAuth} from "../../../contexts/UserAuthContext";
import {useNavigate} from "react-router-dom";
import {addInBriefcase} from "../../../functions/BriefcaseDB/addInBriefcase";
import {useGetDBData} from "../../../hooks/useGetDbData";
import {Button} from "react-bootstrap";
import {deleteFromBriefcase} from "../../../functions/BriefcaseDB/deleteFromBriefcase";

const PaginateCoinsBriefcaseButton = ({elemId,setShowAlert}) => {

    const { user } = useUserAuth();

    const navigate = useNavigate();

    //add coin in BriefcaseDB and realtimeDB database
    const addCoinBriefcase = (id) => {
        if (!user){
            navigate('/login');
            return false;
        }
        addInBriefcase('coins',id,user.uid)
            .then(() => setShowAlert({show:true,text:"Монета успешно добавлена в избранное.",variant:"success"}))
            .catch(() => setShowAlert({show:true,text:"Ошибка добавления монеты.",variant:"danger"}))
            .finally(() => setTimeout(() => setShowAlert(false),1000 * 5))
    }

    //delete coin from briefcase
    const deleteCoinBriefcase = (id) => {
        deleteFromBriefcase('coins',id,user.uid)
            .then(() => setShowAlert({show:true,text:"Монета успешно удалена из избранного.",variant:"success"}))
            .catch(() => setShowAlert({show:true,text:"Ошибка удаления монеты.",variant:"danger"}))
            .finally(() => setTimeout(() => setShowAlert(false),1000 * 5))
    }

    //выводит массив с id уже добавленных в избранное монет
    const briefcaseDBData = useGetDBData(`/briefcase/${user?.uid}/coins`);
    // console.log(briefcaseDBData,'briefcaseDBData');

    return (
        <>
            {
                Boolean(!Object.keys(briefcaseDBData).length || !Object.keys(briefcaseDBData).includes(elemId)) &&
                <Button
                    onClick={() => addCoinBriefcase(elemId)}
                    size={"sm"}
                    style={{padding:'0 .4em',marginLeft:10}}
                    variant={"success"}
                >+</Button>
            }
            {
                Boolean(Object.keys(briefcaseDBData).length && Object.keys(briefcaseDBData).includes(elemId)) &&
                    // delete button
                    <Button
                        size={"sm"}
                        onClick={() => deleteCoinBriefcase(elemId)}
                        style={{padding:'0 .4em',marginLeft:10}}
                        variant={"danger"}
                    >-</Button>
            }
        </>
    );
};

export default PaginateCoinsBriefcaseButton;
