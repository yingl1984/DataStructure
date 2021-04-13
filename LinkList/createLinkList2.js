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
    insertBefore(givenItem, newItem){
       if(this.head === null){
           return;
       }
       if(this.head.value === givenItem){
           this.insertFirst(newItem);
           return;
       }
       let preNode=this.head;
       while(preNode.next != null && preNode.next.value !== givenItem){
            preNode=preNode.next;
       }
       if(preNode.next === null){
           return;
       }
       let newNode = new ListNode(newItem);
       newNode.next=preNode.next;
       preNode.next = newNode;
    }
    insertAfter(givenItem, newItem){
        if(this.head === null) return;
        let curNode = this.head;
        while(curNode !== null && curNode.value != givenItem){
            if(curNode.next === null){
                return;
            }
            curNode = curNode.next;
        }
      
        let newNode = new ListNode(newItem);
        newNode.next = curNode.next;
        curNode.next = newNode;
    }
    insertAt(index, newItem){
        if(this.head === null && index !== 1) return;
        let step = index - 2;
        let p = this.head;
        let newNode = new ListNode(newItem);
        while(step > 0){
            p = p.next;
            if(!p) return;
            step--;
        }
        if(p.next === null){
            this.insertLast(newItem);
            return;
        }
        newNode.next = p.next;
        p.next=newNode;
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

function main(){
    
    let node0 = new ListNode("Apollo");
    let SLL = new LinkedList(node0);
   SLL.insertLast("Boomer");
   SLL.insertLast("Helo");SLL.insertLast("Husker");SLL.insertLast("Starbuck");
    SLL.insertLast("Tauhida")
    console.log(SLL.printLinkedList());
    SLL.remove("Husker");
    console.log(SLL.printLinkedList());
    SLL.insertBefore("Apollo","Athena");
    console.log(SLL.printLinkedList());
    SLL.insertAfter("Helo","Hotdog");
    console.log(SLL.printLinkedList());
    SLL.insertAt(8,"Kat");
    console.log(SLL.printLinkedList());
    SLL.remove("Tauhida");
    console.log(SLL.printLinkedList());
}

main();