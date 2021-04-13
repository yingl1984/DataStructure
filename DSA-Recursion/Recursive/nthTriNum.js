// function nthTriNum(n){
//     if(n === 0){
//         return 0;
//     }
//     return nthTriNum(n - 1) + n;
// }
// console.log(nthTriNum(1));

function nthTriNum(n){
    if(n === 1){
        return 1;
    }
    return n + nthTriNum(n - 1);
}

console.log(nthTriNum(8),nthTriNum(9));
// function nthTriNum_iteration(n){
//     let sum = 0;
//     while(n > 0){
//         sum += n;
//         n--
//     }
//     return sum;
// }

// console.log(nthTriNum_iteration(20));

//O(n)