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

function reverseLinkedList(head){
    if(!head || head.next === null) return head;
    let tail = null;
    let p = head;
    let q = p.next;
    while(p !== null){
        p.next = tail;
        tail = p;
        if(q === null) break;
        p = q;
        q = p.next;
    }
    return tail;
}

function thirdEleFromEnd(head){
    if(head === null) return null;
    let first = head, second = head;
    let n = 2;
    while(n > 0){
        second = second.next;
        n--;
        if(second === null) return null;
    }
    while(second.next != null){
        first = first.next;
        second = second.next;
    }
    return first;
}

function middleOfLinkedList(head){
    if(head === null || head.next === null) return head;
    let slow = head, fast = head;
    
    while(fast.next != null && fast.next.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;

}

let head = new ListNode(0);
let list = new LinkedList(head);
list.insertLast(1);
list.insertLast(2);
list.insertLast(3);
list.insertLast(4);
console.log(list.printLinkedList());
// let result = reverseLinkedList(list.head);
// console.log(result);
// let result = thirdEleFromEnd(list.head);
// console.log(result);

let result = middleOfLinkedList(list.head);
console.log(result);

