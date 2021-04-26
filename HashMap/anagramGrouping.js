function anagramGrouping(strArray){
    if(strArray === null || strArray.length <= 1) return strArray;
    let map = new Map();
    for(let i = 0; i < strArray.length; i++){
        let curStr = strArray[i];
        let curStrArray = curStr.split('');
        curStrArray = curStrArray.sort();
        if(!map.has(curStrArray)){
            map.set(curStrArray, new Array());  
        }
        map.get(curStrArray).push(curStr);
    }

    let result = [];
    map.forEach((values,keys) => result.push(values));
    return result;
}


let strArray = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'];
console.log(anagramGrouping(strArray));