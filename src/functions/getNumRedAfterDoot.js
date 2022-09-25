export const getNumRedAfterDoot = (num,numsAfterDot = 2) =>{
    return Number(String(num).slice(0,String(num).indexOf('.') + numsAfterDot)).toLocaleString();
}