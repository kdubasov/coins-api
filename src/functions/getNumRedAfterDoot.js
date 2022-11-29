export const getNumRedAfterDoot = (num,numsAfterDot = 2) =>{
    if (String(num).indexOf('.') === -1){
        return Number(num)
    }else {
        return Number(num).toFixed(numsAfterDot);
    }
}
