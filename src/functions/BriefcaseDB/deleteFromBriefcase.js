import { ref,remove } from "firebase/database";
import {realtimeDB} from "../../database";

//delete block with image from db
export const deleteFromBriefcase = (category,valueId,userId) =>{
    const dbURL = `/briefcase/${userId}/${category}/${valueId}`;
    return remove(ref(realtimeDB,dbURL))
}