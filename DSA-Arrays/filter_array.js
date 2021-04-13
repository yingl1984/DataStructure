function filterArray(arr){
    let position = 0;
    while(arr[position] > 5){
        position++;
        if(position === arr.length){
            return arr.splice(0,arr.length);
        }
    }
    let i = position + 1;
    for(;i < arr.length; i++){
        if(arr[i] <= 5){
            continue;
        }
        arr[position]=arr[i];
        position++;
    }

    let result = arr.splice(0,position);
    // console.log(arr.splice(position,arr.length - position));
    return result;
}

let arr1=[1,2,6,1,5,1,2,6,7,1]
console.log(filterArray(arr1));