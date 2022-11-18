import React, {useState, useLayoutEffect} from 'react';
import {Table} from "react-bootstrap";
import {useGetDBData} from "../../../../hooks/useGetDbData";
import {useUserAuth} from "../../../../contexts/UserAuthContext";
import {getTheme} from "../../../../functions/Theme/getTheme";
import {GLOBAL_API_COIN_ONE_MAIN, GLOBAL_API_URL} from "../../../../constants/ApiCommand";
import axios from "axios";
import SavedCoinsTr from "./SavedCoinsTr";
import AlertNoValue from "../AlertNoValue";
import {getLang} from "../../../../functions/Lang/getLang";

const SavedCoinsTable = ({setShowAlert}) => {

    //data for saved coins and error check after query in database
    const [data,setData] = useState([]);

    // console.log(data,'data for table in SavedCoinsTable');
    // console.log(error,'error in SavedCoinsTable');

    const { user } = useUserAuth();

    //data from database with saved coins
    const briefcaseDBData = useGetDBData(`/briefcase/${user?.uid}/coins`);
    // console.log(Object.keys(briefcaseDBData),'briefcaseDBData');

    useLayoutEffect(() => {
        if (Object.keys(briefcaseDBData).length){
            setData([])
            for (let elem of Object.keys(briefcaseDBData)){
                axios.get(GLOBAL_API_URL + GLOBAL_API_COIN_ONE_MAIN(elem))
                    .then(res => setData(data => [...data, res.data]))
                    .catch(() => setShowAlert({show:true,text:`Ошибка загрузки ${elem}.`,variant:"danger"}))
            }
        }
        //eslint-disable-next-line
    },[briefcaseDBData])

    return (
        <>
            {
                Boolean(data.length) ?
                    <Table striped bordered hover variant={getTheme(true)}>
                        <thead>
                            <tr className={"small"}>
                                <td>#</td>
                                <td>Название</td>
                                <td>Акт. цена</td>
                                <td>24ч</td>
                                <td>7д</td>
                                <td>1мес</td>
                                <td>Мин/Макс 24ч</td>
                                <td>Об. торг. 24ч</td>
                                <td>Рын. кап-ция</td>
                                <td>График 3д</td>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            data
                                .filter((v,i,a) => a.findIndex(t => (t.id === v.id)) === i)//удаляем повторяющиеся значения
                                .map((coin,ids) => (
                                <SavedCoinsTr key={ids} elem={coin} setShowAlert={setShowAlert} />
                            ))
                        }
                        </tbody>
                    </Table>:
                    <AlertNoValue value={getLang() === "eng" ? "coins" : "монеты"} />
            }
        </>
    );
};

export default SavedCoinsTable;
