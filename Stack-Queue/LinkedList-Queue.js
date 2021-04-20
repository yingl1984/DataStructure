class ListNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    enqueue(value){
        let newNode = new ListNode(value);
        if(this.head === null){
            this.head = newNode;
        }else{
            this.tail.next = newNode;
        }
        this.tail = newNode;
        
    }
    dequeue(){
        if(this.head === null) return;
        let node = this.head;
        this.head = this.head.next;
        if(this.head === null){
            this.tail = null;
        }
        return node.value;
    }
    peek(){
        if(this.head === null) return null;
        return this.head.value;
    }
    isEmpty(){
        return this.head === null;
    }
    display(){
        if(this.head === null) return null;
        let result = [];
        let p = this.head;
        while(p !== null){
            result.push(p.value);
            p = p.next;
        }
        return result;
    }
}

let que = new Queue();

let result = que.peek();
// console.log(result) 
que.enqueue('Kirk');
que.enqueue('Spock');

que.enqueue('Uhura');
que.enqueue('Sulu');
que.enqueue('Checkov');
que.dequeue();
que.dequeue();
console.log(que.display());

