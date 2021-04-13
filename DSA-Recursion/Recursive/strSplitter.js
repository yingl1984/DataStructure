function strSplitter(str,separator,res){
    if(!str){
        return;
    }
    if(str.indexOf(separator) === -1){
        res.push(str);
        return;
    }
    let curStr=str.substr(0,str.indexOf(separator));
    // console.log(curStr);
    res.push(curStr);
    // console.log(res);
    let leftStr = str.substr(str.indexOf(separator) + 1, str.length);
    // console.log(leftStr);
    strSplitter(leftStr,separator,res);
}

let result = [];
strSplitter('Hello/world/','/',result)
console.log(result);

// function strSplitter_iteration(str,separator){
//     let index = str.indexOf(separator);
//     let result = [];
//     if(index === -1){
//         result.push(str);
//         return result;
//     }
//     while(str.indexOf(separator) !== -1){
//         let curSepIndex = str.indexOf(separator);
//         result.push(str.substring(0,curSepIndex));
//         let leftStr = str.substring(curSepIndex + 1);
//         str = leftStr;
//     }
    
//         result.push(str);
    
//     return result;
// }
// let result1 = strSplitter_iteration('Hello/world','/')
// console.log(result1);
//recursion:O(n^2);
//interation:O(n)

