import Stack from './LinkedList-Stack';

function is_palindrome(s) {
    if(s === null || s.length === 0) return true;
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    
    let stack = new Stack();
    console.log(stack.peek());
    // for(let i = 0; i < s.length; i++){
        
    // }

}

// True, true, true, false

console.log(stack.peek());
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));
