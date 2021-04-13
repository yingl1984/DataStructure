function strRotate(str1,str2){
    let new_str1=str2;
    if(str1 === str2) return true;
    for(let i = 0; i < str1.length - 1; i++){
        new_str1=str1.substr(1,str1.length)+str1.charAt(0);
        if(new_str1 === str2){
            return true;
        }
        str1=new_str1;
    }
    return false;
}

console.log(strRotate('','a'));