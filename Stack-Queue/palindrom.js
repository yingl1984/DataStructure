const Stack = require('./LinkedList-Stack');

function is_palindrome(s) {
    if(s === null || s.length === 0) return true;
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let stack = new Stack();
    let length = s.length;
    for(let i = 0; i < s.length; i++){
        stack.push(s.charAt(i));
    }
    let halfLength = 0;
    if(length % 2 === 1){
        halfLength = (length - 1) / 2;
    }else{
        halfLength = length / 2;
    }
    
    let sRight = "";
    while(halfLength > 0){
        sRight += stack.pop();
        halfLength--;
    }    

    if(length % 2 === 1){
        stack.pop();
    }
    for(let i = sRight.length - 1; i >= 0; i--){
        if(sRight.charAt(i) !== stack.pop()){
            return false;
        }
    }
    return true;
}

// True, true, true, false


console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));