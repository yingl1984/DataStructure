class ListNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

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

module.exports = Stack;

let starTrek = new Stack();
starTrek.push("Kirk");
starTrek.push("Spock");
starTrek.push("McCoy");
starTrek.push("Scotty");
starTrek.pop();
starTrek.pop();
let result = starTrek.display();
console.log(result);




