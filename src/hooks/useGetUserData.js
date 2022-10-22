import {realtimeDB} from "../database";
import {ref,onValue} from "firebase/database";
import {useEffect, useState} from "react";

//for get data from realtime database
export const useGetUserData = uid =>{

    const [data,setData] = useState({})

    useEffect(() =>{
        onValue(ref(realtimeDB,`/users/${uid}`),snapshot => {
            setData({})
            const dataInner = snapshot.val();
            // console.log(dataInner);
            if (dataInner){
                setData(dataInner);
            }else {
                return {}
            }
        })
        // eslint-disable-next-line
    },[uid])

    return data
}