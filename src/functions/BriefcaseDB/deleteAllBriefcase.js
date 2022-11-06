import {ref, remove} from "firebase/database";
import {realtimeDB} from "../../database";

export const deleteAllBriefcase = userUid => {
    const dbURL = `/briefcase/${userUid}`;
    return remove(ref(realtimeDB,dbURL))
}