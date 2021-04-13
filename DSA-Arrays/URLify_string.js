function URLify(str){
    let result="";
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i) === ' '){
            result+='%20';
        }else{
            result+=str.charAt(i);
        }
    }
    return result;
}

console.log(URLify('I_am a girl.'));
//O(n)