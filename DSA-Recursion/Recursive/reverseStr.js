// function reverseStr(str){
//     if(str.length === 0){
//         return "";
//     }
    
//     return reverseStr(str.substr(1))+str.charAt(0);
    
// }


function reverseStr(str){
    if(str.length == 1){
        return str.charAt(0);
    }

    return str.charAt(str.length - 1) + reverseStr(str.substring(0,str.length - 1))
}
let newStr = reverseStr('Hello');
console.log(newStr);

// function reverseStr_iteration(str){
//     if(str.length <= 1){
//         return str;
//     }
//     let result = "";
//     while(str.length >= 1){
//         result += str.charAt(str.length - 1);
//         str = str.substr(0,str.length-1);
//     }
//     return result;
// }
// let newStr = reverseStr_iteration('Hello');
// console.log(newStr);

//O(n)
