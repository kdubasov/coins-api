export const getNumRedAfterDoot = (num,numsAfterDot = 2) =>{
    if (String(num).indexOf('.') === -1){
        return Number(num)
    }else {
        return Number(String(num).slice(0,String(num).indexOf('.') + numsAfterDot));
    }
}