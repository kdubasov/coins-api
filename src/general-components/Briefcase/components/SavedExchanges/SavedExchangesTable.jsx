import React, {useLayoutEffect, useState} from 'react';
import {Table} from "react-bootstrap";
import {getTheme} from "../../../../functions/Theme/getTheme";
import AlertNoValue from "../AlertNoValue";
import {useUserAuth} from "../../../../contexts/UserAuthContext";
import {useGetDBData} from "../../../../hooks/useGetDbData";
import axios from "axios";
import {
    GLOBAL_API_EXCHANGES_ID_DATA,
    GLOBAL_API_EXCHANGES_LIST,
    GLOBAL_API_URL
} from "../../../../constants/ApiCommand";
import SavedExchangesTr from "./SavedExchangesTr";
import {useApi} from "../../../../hooks/useApi";
import {GL_NAME} from "../../../../constants/ApiConstants";

const SavedExchangesTable = ({setShowAlert}) => {

    //data for saved coins and error check after query in database
    const [data,setData] = useState([]);

    // console.log(data,'data for table in SavedCoinsTable');
    // console.log(error,'error in SavedCoinsTable');

    const { user } = useUserAuth();

    //data from database with saved coins
    const briefcaseDBData = useGetDBData(`/briefcase/${user?.uid}/exchanges`);
    // console.log(Object.keys(briefcaseDBData),'briefcaseDBData');

    const allExchangesList = useApi(GLOBAL_API_EXCHANGES_LIST).data;

    useLayoutEffect(() => {
        if (Object.keys(briefcaseDBData).length && allExchangesList.length) {
            setData([])
            for (let elem of Object.keys(briefcaseDBData)){
                axios.get(GLOBAL_API_URL + GLOBAL_API_EXCHANGES_ID_DATA(elem))
                    .then(res => setData(data => [...data, res.data]))
                    .catch(() => setShowAlert({show:true,text:`Ошибка загрузки ${elem}.`,variant:"danger"}))
            }
        }
        //eslint-disable-next-line
    },[briefcaseDBData,allExchangesList])

    // console.log(data,'SavedExchangesTable data');
    // console.log(allExchangesList,'allExchangesList');

    return (
        <>
            {
                (Boolean(data.length) && Boolean(allExchangesList.length)) ?
                    <Table striped bordered hover variant={getTheme(true)}>
                        <thead>
                        <tr>
                            <td>#</td>
                            <td>Название</td>
                            <td>Об. торг. 24ч</td>
                            <td>Доверие</td>
                            <td>Год осн.</td>
                            <td>Оф. сайт</td>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            data
                                .filter((v,i,a) => a.findIndex(t => (t[GL_NAME] === v[GL_NAME])) === i)//удаляем повторяющиеся значения
                                .map((exch,ids) => (
                                    <SavedExchangesTr
                                        key={ids}
                                        elem={exch}
                                        setShowAlert={setShowAlert}
                                        elemId={allExchangesList.filter(elem => elem[GL_NAME] === exch[GL_NAME])[0]}
                                    />
                                ))
                        }
                        </tbody>
                    </Table>:
                    <AlertNoValue value={"биржи"} />
            }
        </>
    );
};

export default SavedExchangesTable;
