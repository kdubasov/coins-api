
import {ref,onValue} from "firebase/database";
import {useEffect, useState} from "react";
import {realtimeDB} from "../database";

//for get data from realtime database
export const useGetDBData = (url) =>{

    const [data,setData] = useState({})

    useEffect(() =>{
        onValue(ref(realtimeDB,url),snapshot => {
            setData({})
            const dataInner = snapshot.val();
            if (dataInner){
                // eslint-disable-next-line
                setData(dataInner)
            }else {
                return {}
            }
        })
        // eslint-disable-next-line
    },[url])

    return data
}