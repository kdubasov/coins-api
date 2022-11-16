import {ref, set} from "firebase/database";
import {realtimeDB} from "../../database";
import {getGraphDate} from "../getGraphDate";

//set data in database
export const addFormDataInDB = (email,message,cooperation) =>{

    const date = Date.now();

    const dbURL = `/forms/feedbackForm/${date + '-' + getGraphDate(date)}`

    return set(ref(realtimeDB,dbURL),{
        email: email,
        message: message,
        date: getGraphDate(date),
        id: date + '-' + getGraphDate(date),
        cooperation: cooperation,
    })
}
