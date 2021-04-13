function maxSum(arr){
    let minSum=0,max=Number.MIN_VALUE,sum=0;
    for(let i = 0; i < arr.length; i++){
        sum+=arr[i];
        max=Math.max(max,sum-minSum);
        minSum=Math.min(minSum,sum);
    }
    return max;
}

let arr=[-1,6,-3,5,-2,1]
console.log(maxSum(arr));