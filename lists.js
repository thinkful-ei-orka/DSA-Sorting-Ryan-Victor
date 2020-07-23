class _Node {
     constructor(value, next) {
          this.value = value;
          this.next = next;
     }
}

class LinkedList {
     constructor() {
          this.head = null;
     }

     insertFirst(item) {
          this.head = new _Node(item, this.head);
     }

     insertLast(item) {
          if (this.head === null) {
               this.insertFirst(item);
          }
          else {
               let tempNode = this.head;
               while (tempNode.next !== null) {
                    tempNode = tempNode.next;
               }
               tempNode.next = new _Node(item, null);
          }
     }

     find(item) {
          // Start at the head
          let currNode = this.head;
          // If the list is empty
          if (!this.head) {
               return null;
          }
          // Check for the item 
          while (currNode.value !== item) {
               /* Return null if it's the end of the list 
                  and the item is not on the list */
               if (currNode.next === null) {
                    return null;
               }
               else {
                    // Otherwise, keep looking 
                    currNode = currNode.next;
               }
          }
          // Found it
          return currNode;
     }

     remove(item) {
          // If the list is empty
          if (!this.head) {
               return null;
          }
          // If the list to be removed is head, make the next list head
          if (this.head.value === item) {
               this.head = this.head.next;
               return;
          }
          // Start at the head
          let currNode = this.head;
          // Keep track of previous
          let prevNode = this.head;

          while ((currNode !== null) && (currNode.value !== item)) {
               // Save the previous list 
               prevNode = currNode;
               currNode = currNode.next;
          }
          if (currNode === null) {
               console.log('Item not found');
               return;
          }
          prevNode.next = currNode.next;
     }

     insertBefore(item) {
          if (this.head === null) {
               this.insertFirst(item)
          }
          else {
               // Start at the head
               let currNode = this.head;
               // Keep track of previous
               let prevNode = this.head;

               while ((currNode !== null) && (currNode.value !== item)) {
                    // Save the previous list 
                    prevNode = currNode;
                    currNode = currNode.next;
               }
               if (currNode === null) {
                    this.insertLast(item)
                    return;
               }
               prevNode.next = new _Node(item, currNode);
          }
     }

     insertAfter(item, value) {
          if (this.head === null) {
               this.insertFirst(item)
          }
          else {
               let currNode = this.head;
               while ((currNode !== null) && (currNode.value !== value)) {
                    currNode = currNode.next
               }
               if (currNode === null) {
                    this.insertLast(item)
                    return;
               }
               currNode.next = new _Node(item, currNode.next)
          }
     }

     insertAt(item, num) {
          if (this.head === null) {
               this.insertFirst(item)
          }
          if (num === 1) {
               this.insertFirst(item)
          }
          else {
               let currNode = this.head;
               for (let i = 2; i < num; i++) {
                    if (currNode === null) {
                         this.insertLast(item)
                         return;
                    }
               }
               this.insertAfter(item, currNode.value)
          }
     }

     insertCycle(item, next) {
          if (this.head === null) {
               this.insertFirst(item)
          }
          else {
               let tempNode = this.head
               while(tempNode.next!== null) {
                    tempNode = tempNode.next
               }
               let nextNode = this.head
               while(nextNode.next!==null && nextNode.value!==next) {
                    nextNode = nextNode.next
               }
               tempNode.next = new _Node(item, nextNode)
          }
     }
}

module.exports = {
     _Node, LinkedList
}