function stock_max_profit(arr){
    if(arr === null || arr.length < 2) return 0;
    minValue = arr[0];
    profit = 0;
    for(let i = 1; i < arr.length; i++){
        profit = Math.max(profit, arr[i] - minValue);
        minValue = Math.min(minValue, arr[i]);
    }
    return profit;
}

let arr = [128, 97, 121, 123, 98, 97, 105];
console.log(stock_max_profit(arr));