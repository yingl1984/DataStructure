function removeDuplicate(str){
    if(str === null || str.length <= 1) return str;
    const map = new Map();
    for(let i = 0; i < str.length; i++){
        let ch = str.charAt(i);
        if(ch === " "){
            continue;
        }
        if(map.has(ch)){
            map.set(ch, map.get(ch) + 1);
        }else{
            map.set(ch, 1);
        }
    }

    let result = "";
    for(let i = 0; i < str.length; i++){
        let ch = str.charAt(i);
        if(ch === " "){
            result += ch;
        }
        else if(map.get(ch) === 1){
            result += ch;
            continue;
        }
        else if(map.get(ch) > 1){
            result += ch;
            map.set(ch, 0);
        }else{
            continue;
        }
    }

    return result;
}
let str = "google all that you think can think of";
console.log(removeDuplicate(str));