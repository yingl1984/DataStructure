function remove_char(str,removedCharacters){
    let chSet=new Set();
    for(let i = 0; i < removedCharacters.length; i++){
        chSet.add(removedCharacters[i]);
    }
    for(let i = 0; i < str.length; i++){
        if(!chSet.has(str.charAt(i))){
            continue;
        }
        
        str=str.slice(0,i)+str.slice(i+1,str.length);
        console.log(str);
    }
    return str;

}

let str="Battle of the Vowels: Hawaii vs. Grozny", removedCharacters="aeiou";
console.log(remove_char(str,removedCharacters));