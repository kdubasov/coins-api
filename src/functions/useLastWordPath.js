import {useLocation} from "react-router-dom";

export const useLastWordPath = () =>{
    const path = useLocation().pathname
    return path.slice(path.lastIndexOf('/')+1,path.length)
}