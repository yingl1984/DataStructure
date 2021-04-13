class ListNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
//Insert/Delete node from head node
// export default class Stack{
    class Stack{
    constructor(){
        this.top = null;
    }

    push(value){
        let newNode = new ListNode(value);
        if(this.top === null){
            this.top = newNode;
        }else{
            newNode.next = this.top;
            this.top = newNode;
        }
    }

    pop(){
        if(this.top === null) return;
        let node = this.top;
        this.top = node.next;
        return node.value;
    }

    peek(){
        if(this.top === null) return null;
        return this.top.value;
    }
    isEmpty(){
        return this.top === null;
    }
    display(){
        if(this.top === null) return null;
        let p = this.top;
        while(p.next != null){
            p = p.next;
        }
        return p.value;
    }
}

// let starTrek = new Stack();
// starTrek.push("Kirk");
// starTrek.push("Spock");
// starTrek.push("McCoy");
// starTrek.push("Scotty");
// starTrek.pop();
// starTrek.pop();
// let result = starTrek.display();
// console.log(result);

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
