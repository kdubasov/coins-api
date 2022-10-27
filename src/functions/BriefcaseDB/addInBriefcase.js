import {ref, set} from "firebase/database";
import {realtimeDB} from "../../database";
import {getGraphDate} from "../getGraphDate";

//set data in database
export const addInBriefcase = (category,valueId,userId) =>{

    const dbURL = `/briefcase/${userId}/${category}/${valueId}`

    return set(ref(realtimeDB,dbURL),{
        userId: userId,
        id:valueId,
        category:category,
        dateAdded:getGraphDate(Date.now()),
    })
}