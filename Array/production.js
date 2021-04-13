function production(arr){
    if(arr == null || arr.length == 0) return arr;
    let arrLeft=[], arrRight = [];
    arrLeft.push(1);
    arrRight[arr.length - 1] = 1;
    let result = [];
    let productionLeft=1;
    let productionRight=1;
    for(let i = 1; i < arr.length; i++){
        productionLeft *= arr[i - 1];
        arrLeft.push(productionLeft);
    }
    for(let i = arr.length - 2; i >= 0; i--){
        productionRight *= arr[i + 1];
        arrRight[i]=productionRight; 
    }
    for(let i = 0; i < arr.length; i++){
        result.push(arrLeft[i] * arrRight[i]);
    }
    return result;
}

let arr=[1, 3, 9, 4];
console.log(production(arr));