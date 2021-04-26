function mergeSort(arr, start, end, tmp){
    if(arr === null || arr.length <= 1) return arr;
    let mid = start + (end - start) / 2;

    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);

    mergeSort(arr, start, end, tmp);
}

function mergeSort(arr, start, end, tmp){
    let mid = start + (end - start) / 2;
    let firstArr = start, secondArr = mid + 1, index = 0;
    while(firstArr <= mid && secondArr <= end){
        if(arr[firstArr] <= arr[secondArr]){
            tmp[index++] = arr[firstArr++];
        }else{
            tmp[index++] = arr[secondArr++];
        }
    }

    while(firstArr <= mid){
        tmp[index++] = arr[firstArr++]
    }

    while(secondArr <= end){
        tmp[index++] = arr[secondArr++]
    }

    for(let i = 0; i <= index; i++){
        arr[start + i] = tmp[i];
    }
}

let tmp = [];
let arr = [31, 2, 10, 1];
mergeSort(arr, 0, arr.length - 1, tmp);
console.log(arr);