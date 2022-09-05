const arr= ['заяц', 'уебище ебаное', 'вафля айзербайджанская', 'мопс сморщенный', 'слизень подгорелый', 'прыжок изподвыподверsта'];
let arr1 = [];
for (let elem in arr) {
    arr[elem] = arr[elem].length;
    if (arr[elem]%3 === 0) {
        arr1.push(arr[elem])
    }
}
console.log(arr, arr1);