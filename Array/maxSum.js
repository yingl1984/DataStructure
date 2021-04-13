    function maxSum(arr){
        if(arr === null || arr.length == 0) return;
        let maxSum=Number.MIN_VALUE;
        let minSum=0;
        let sum = 0;
        for(let i = 0; i < arr.length; i++){
            sum += arr[i];
            maxSum = Math.max(sum- minSum, maxSum);
            minSum = Math.min(minSum,sum);
        }
        return maxSum;
    }

    let arr = [4, 6, -3, 5, -2, 1];
    console.log(maxSum(arr));