import {useLayoutEffect, useState} from "react";
import axios from "axios";
import {GLOBAL_API_URL} from "../constants/ApiCommand";

export const useApi = (url) =>{
    const [data,setData] = useState([])
    const [error,setError] = useState('')
    const defaultURL = GLOBAL_API_URL + url;

    useLayoutEffect(() =>{
        axios.get(defaultURL).then(res => {
            setData(res.data)
        }).catch(error =>{
            setError(error.message)
        })
    },[defaultURL])

    return {data:data,error:error}
}