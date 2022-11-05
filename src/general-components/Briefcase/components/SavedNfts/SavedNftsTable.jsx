import React, {useLayoutEffect, useState} from 'react';
import {useUserAuth} from "../../../../contexts/UserAuthContext";
import {useGetDBData} from "../../../../hooks/useGetDbData";
import axios from "axios";
import {GLOBAL_API_NFT_ONE, GLOBAL_API_URL} from "../../../../constants/ApiCommand";
import {Table} from "react-bootstrap";
import {getTheme} from "../../../../functions/Theme/getTheme";
import AlertNoValue from "../AlertNoValue";
import SavedNftsTr from "./SavedNftsTr";

const SavedNftsTable = ({setShowAlert}) => {

    //data for saved coins and error check after query in database
    const [data,setData] = useState([]);

    // console.log(data,'data for table in SavedCoinsTable');
    // console.log(error,'error in SavedCoinsTable');

    const { user } = useUserAuth();

    //data from database with saved coins
    const briefcaseDBData = useGetDBData(`/briefcase/${user?.uid}/nfts`);
    // console.log(Object.keys(briefcaseDBData),'briefcaseDBData');

    useLayoutEffect(() => {
        if (Object.keys(briefcaseDBData).length){
            setData([])
            for (let elem of Object.keys(briefcaseDBData)){
                axios.get(GLOBAL_API_URL + GLOBAL_API_NFT_ONE(elem))
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
                        <tr>
                            <td>#</td>
                            <td>Название</td>
                            <td>Мин. цена</td>
                            <td>Изм. мин. цены 24ч</td>
                            <td>Рын. кап.</td>
                            <td>24-часовой объем</td>
                            <td>Валюта</td>
                            <td>Об. предложение</td>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            data
                                .filter((v,i,a) => a.findIndex(t => (t.id === v.id)) === i)//удаляем повторяющиеся значения
                                .map((nft,ids) => (
                                    <SavedNftsTr key={ids} elem={nft} setShowAlert={setShowAlert} />
                                ))
                        }
                        </tbody>
                    </Table>:
                    <AlertNoValue value={"nft"} />
            }
        </>
    );
};

export default SavedNftsTable;
