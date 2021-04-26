function getTarget(arr,target,start,end){
    while(start + 1 < end){
        let mid = start + (end - start) / 2;

        if(target === arr[mid]) return mid;
        if(target < arr[mid]){
            end = mid;
        }else{
            start = mid;
        }
    }
    
    if(arr[start] === target){return start;}
    if(arr[end] === target){return end;}
    return -1;
}

let arr = [1,2,5,10,90];
console.log(getTarget(arr,10,0,arr.length - 1));