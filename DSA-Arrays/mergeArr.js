function mergeArr(arr1,arr2){
    let i=0,j=0,k=0;
    let result=[];
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<=arr2[j]){
            result.push(arr1[i++]);
        }else{
            result.push(arr2[j++]);
        }
        k++;
    }
    while(i<arr1.length){
        result.push(arr1[i++]);
        k++;
    }
    while(j<arr2.length){
        result.push(arr2[j++]);
        k++;
    }
    return result;
}

let arr1=[1, 3, 6, 8, 11],arr2=[2, 3, 5, 8, 9, 10];
console.log(mergeArr(arr1,arr2));