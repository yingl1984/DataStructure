const Stack = require('./LinkedList-Stack');

class Queue{
    constructor(){
        let s1=new Stack();
        let s2=new Stack();
    }

    
    enqueue(value){
        s1.push();
    }

    dequeue(){
        if(!s2.isEmpty()){
            return s2.pop();
        }
        if(!s1.isEmpty()){
            while(!s1.isEmpty()){
                s2.push(s1.pop());
            }
            return s2.pop();
        }
        return null;
    }

    peek(){
        if(!s2.isEmpty()){
            return s2.peek();
        }
        if(!s1.isEmpty()){
            while(!s1.isEmpty()){
                s2.push(s1.pop());
            }
            return s2.peek();
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
console.log(q1);