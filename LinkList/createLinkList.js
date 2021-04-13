class ListNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(head = null){
        this.head = head;
    }

    insertFirst(value){
        let newNode = new ListNode(value);
        newNode.next = this.head;
        this.head=newNode;
    }
    insertLast(value){
        let newNode = new ListNode(value);
        if(this.head == null){
            this.head =newNode;
            return;
        }
        
        let p = this.head;
        while(p.next != null){
            p = p.next;
        }
        p.next = newNode;
    }
    
    remove(value){
        if(this.head == null) return;
        if(this.head.value == value){
            this.head = this.head.next;
            return;
        }
        let curNode = this.head;
        let preNode = this.head;
        while(curNode != null && curNode.value != value){
            preNode = curNode;
            curNode = curNode.next;
        }
        if(curNode == null){
            return;
        }
        preNode.next = preNode.next.next;
    }
    printLinkedList(){
        let result = [];
        result.push(this.head.value);
        let p = this.head;
        while(p.next != null){
            p = p.next;
            result.push(p.value);
        }
        return result;
    }
    find(item){
        if(this.head == null) return null;
        
        let curNode = this.head;

        while(curNode.value !== item){
            if(curNode.next === null) return null;
            else{
                curNode = curNode.next;
            }
        }
        return curNode;
    }
}
//Create a linked list 2->1->0->-1->-2null
let newHead = new ListNode(0);
let list = new LinkedList(newHead);
list.insertFirst(1);
list.insertFirst(2);
list.insertLast(-1);
list.insertLast(-2);
// list.remove(-1);
let resultNode = list.find(0);
console.log(resultNode);





