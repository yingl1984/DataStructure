let result = 1;
function fac(n){
    if(n === 1){
        return 1;
    }
    return fac(n - 1) * n
}

// console.log(fac(1));

function fac_iteration(n){
    while(n > 1){
        result*=n;
        n--;
    }
    return result;
}
console.log(fac_iteration(2));
//O(n)