function stringRotate(str1, str2){
//if str2 is a rotation of str1
    if(str1 == null && str2 == null) return true;
    if(str2 == null) return false;
    if(str1.length != str2.length) return false;
    if(str2.length == 0) return true;
    
    for(let i = 0; i < str1.length; i++){
        if(str1.charAt(i) != str2.charAt(0)){
            continue;
        }
        let j = 1;
        for(; j < str2.length; j++){
            if(str2.charAt(j) != str1.charAt((i + j) % str1.length)){
                break;
            }
        }
        if(j === str2.length) {
            return true;
        }
    }

    return false;
}

console.log(stringRotate("amazon","azonma"));