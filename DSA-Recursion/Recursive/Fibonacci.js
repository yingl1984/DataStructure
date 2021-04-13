function Fib(n){
    if(n === 1 || n === 2){
        return 1;
    }
    return Fib(n-1)+Fib(n-2);
}
console.log(Fib(3));

function Fib_interation(n){
    if(n === 1 || n === 2){
        return 1;
    }
    let finalNum=0, firstNum=1, secondNum=1,index=3;
    while(index <= n){
        index++;
        finalNum=firstNum + secondNum;
        firstNum=secondNum;
        secondNum=finalNum;
    }
    return finalNum;
}

// console.log(Fib_interation(7));
//O(n)