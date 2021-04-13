function removeChar(str,removeStr){
    if(str == null || str.length == 0) return str;
    if(removeStr == null || removeStr.length == 0) return str;
    let removeSet = new Set();
    let result = "";
    for(let i = 0; i < removeStr.length; i++){
        removeSet.add(removeStr.charAt(i));
    }

    for(let i = 0; i < str.length; i++){
        if(!removeSet.has(str.charAt(i))){
            result += str.charAt(i);
        }
    }
    return result;
}

let str="Battle of the Vowels: Hawaii vs. Grozny";
let removeStr="aeiou";
console.log(removeChar(str,removeStr));