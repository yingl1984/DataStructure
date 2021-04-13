function Arr_2D(arr){
    let colSet=new Set(),rowSet=new Set();
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] === 0){
                rowSet.add(i);
                colSet.add(j);
            }
        }
    }
    console.log(colSet,rowSet);
    for(let row of rowSet){    
        for(let i = 0; i < arr[row].length; i++){
            arr[row][i] = 0; 
        }
    }
    for(let col of colSet){
        for(let i = 0; i < arr.length; i++){
            arr[i][col] = 0;
        }
    }
    return arr;
}

let arr=[
    [1,0,1,1,0],
    [0,1,1,1,0],
    [1,1,1,1,1],
    [1,0,1,1,1],
    [1,1,1,1,1]
]
let result=Arr_2D(arr);
for(let i = 0; i < result.length; i++){
    console.log('%%%%%%%%%%%%%%%%%%%%');
    for(let j = 0; j < result[i].length; j++){
        console.log(result[i][j]);
    }
}
