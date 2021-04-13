function filterArray(arr){
    //remove num < 5
    if(arr == null || arr.length == 0){
        return arr;
    }
    let last = 0;
    for(; last < arr.length; last++){
        if(arr[last] < 5){
            break;
        }
    }
    if (last == arr.length) return arr;
    for(i = last + 1; i< arr.length; i++){
        if(arr[i] < 5){
            continue;
        }
        arr[last++]=arr[i];
    }
    return arr.slice(0,last);
}

let arr = [1,6,2,7,9]
console.log(filterArray(arr));