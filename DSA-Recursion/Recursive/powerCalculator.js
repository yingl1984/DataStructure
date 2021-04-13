let result = 1;
function powerCalculator(base,exp){
    if(exp < 0){
        console.log('exponent should be >= 0');
        return;
    }
    if(exp === 0){
        return 1;
    }
    return base * powerCalculator(base, exp - 1);
}

// console.log(powerCalculator(2,-2));

function powerCal_iteration(base,exp){
    if(exp <0){
        console.log('exponent should be >= 0');
        return;
    }
    if(exp == 0){
        return 1;
    }
    let result = 1;
    while(exp >= 1){
        result *= base;
        exp--;
    }
    return result;
}

console.log(powerCal_iteration(2,3));

//O(n)



