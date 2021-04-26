
function is_anagram_palindrome(str){
    if(str === null || str.length <= 1) return true;
    let map = new Map();
    for(let i = 0; i < str.length; i++){
        if(!map.has(str.charAt(i))){
            map.set(str.charAt(i), 1);
        }else{
            map.set(str.charAt(i), map.get(str.charAt(i)) + 1);
        }
    }
    let flag = 0;
    for(let i = 0; i < str.length; i++){
        if(map.get(str.charAt(i)) % 2 === 0) continue;
        flag++;
    }

    return (flag === 0 || flag === 1);
}

let str = "north";
console.log(is_anagram_palindrome(str));
