import React, {useState,useLayoutEffect} from 'react';
import {Table} from "react-bootstrap";
import {useGetDBData} from "../../../../hooks/useGetDbData";
import {useUserAuth} from "../../../../contexts/UserAuthContext";
import {getTheme} from "../../../../functions/Theme/getTheme";
import {GLOBAL_API_COIN_ONE_MAIN, GLOBAL_API_URL} from "../../../../constants/ApiCommand";
import axios from "axios";

const SavedCoinsTable = () => {

    const [data,setData] = useState([]);
    const [error,setError] = useState('');

    console.log(data);
    console.log(error);

    const { user } = useUserAuth();

    //data from databse with saved coins
    const briefcaseDBData = useGetDBData(`/briefcase/${user?.uid}/coins`);

    useLayoutEffect(() => {
        if (Object.keys(briefcaseDBData).length){
            axios.get(GLOBAL_API_URL + GLOBAL_API_COIN_ONE_MAIN(Object.keys(briefcaseDBData)[0]))
                .then(res => {setData(res.data)})
                .catch(error =>{setError(error.message)
                })
        }
    },[briefcaseDBData])

    return (
        <Table striped bordered hover variant={getTheme(true)}>

        </Table>
    );
};

export default SavedCoinsTable;