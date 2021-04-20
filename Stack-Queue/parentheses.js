const Stack = require('./LinkedList-Stack');

function isValidParentheses(str){
    if(str === null || str.length === 0){
        return true;
    }
    let stack = new Stack();
    for(let i = 0; i < str.length; i++){
        if(stack.isEmpty()){
            stack.push(str.charAt(i));
        }else{
            if(isPair(stack.peek(),str.charAt(i))){
                stack.pop();
            }else{
                stack.push(str.charAt(i));
            }
        }
    }
    return stack.isEmpty();
}

function isPair(a, b){
    if((a === '(' && b === ')') || (a === '[' && b === ']') || (a === '{' && b === '}')) return true;
    return false;
}

console.log(isValidParentheses('([{])'));