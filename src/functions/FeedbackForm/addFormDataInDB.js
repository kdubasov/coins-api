import {ref, set} from "firebase/database";
import {realtimeDB} from "../../database";
import {getGraphDate} from "../getGraphDate";

//set data in database
export const addFormDataInDB = (email,message,cooperation) =>{

    const dbURL = `/forms/feedbackForm/${Date.now() + '-' + getGraphDate(Date.now())}`

    return set(ref(realtimeDB,dbURL),{
        email: email,
        message:message,
        date:getGraphDate(Date.now()),
        cooperation:cooperation,
    })
}
