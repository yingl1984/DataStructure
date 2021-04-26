const Stack = require('./LinkedList-Stack');

class Queue{
    constructor(){
        this.s1=new Stack();
        this.s2=new Stack();
    }

    
    enqueue(value){
        this.s1.push(value);
    }

    dequeue(){
        if(!this.s2.isEmpty()){
            return this.s2.pop();
        }
        if(!this.s1.isEmpty()){
            while(!this.s1.isEmpty()){
                this.s2.push(this.s1.pop());
            }
            return this.s2.pop();
        }
        return null;
    }

    peek(){
        if(!this.s2.isEmpty()){
            return this.s2.peek();
        }
        if(!this.s1.isEmpty()){
            while(!this.s1.isEmpty()){
                this.s2.push(this.s1.pop());
            }
            return this.s2.peek();
        }
        return null;
    }

    isEmpty(){
        return s2.isEmpty() && s1.isEmpty();
    }
}

let q1 = new Queue();
q1.enqueue(1);
q1.enqueue(2);
q1.dequeue();
q1.enqueue(3);
q1.enqueue(4);
q1.dequeue();
let result = q1.peek();

console.log(result);