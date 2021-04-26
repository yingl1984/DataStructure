function sortArray(arr){
    quickSort(arr, 0, arr.length - 1);
}

function quickSort(arr,start,end){
    if(start >= end) return;

    let left = start, right = end;
    let pivot = arr[start + (end - start) / 2];

    while(left <= right){
        while(left <= right && arr[left] < pivot){
            left++;
        }
        while(left <= right && arr[right] > pivot){
            right--;
        }

        if(left <= right){
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
        }
        left++;
        right--;
    }

    quickSort(arr, start, right);
    quickSort(arr, left, end);
}

let arr = [31, 4, 6, 11];
quickSort(arr,0,arr.length - 1);
console.log(arr);