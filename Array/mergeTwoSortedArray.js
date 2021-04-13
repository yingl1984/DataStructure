function mergeTwoSortedArray(arr1,arr2){
    if(arr1 == null && arr2 == null){
        return null;
    }
    if(arr1 == null) return arr2;
    if(arr2 == null) return arr1;
    let arr = [];
    let i = 0, j = 0,index = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] <= arr2[j]){
            arr.push(arr1[i++]);
        }else{
            arr.push(arr2[j++]);
        }
        index++;
    }
    while(i < arr1.length){
        arr.push(arr1[i++]);
    }
    while(j < arr2.length){
        arr.push(arr2[j++]);
    }
    return arr;
}

let arr1=[1, 3, 6, 8, 11];
let arr2=[2, 3, 5, 8, 9, 10];
console.log(mergeTwoSortedArray(arr1,arr2));