function display(list) {
     if (list.head === null) {
          console.log(list.head)
     }
     else  {
          let i = 0;
          let item = list.head;
          while (item.next !== null) {
               console.log(`${i}: ${item.value}`);
               i++;
               item = item.next;
          }
     console.log(`${i}: ${item.value}`)          
     }
}

function size(list) {
     let listSize = 0;
     let currNode = list.head
     while (currNode.next !== null) {
          listSize++
          currNode = currNode.next
     }
     listSize++;
     return console.log(listSize)
}

function isEmpty(list) {
     if (list.head === null) {
          return console.log(true);
     }
     return console.log(false)
}

function findPrevious(item, list) {
     let currNode = list.head;
     while (currNode.next.value !== item) {
          currNode = currNode.next
     }
     return console.log(currNode.value)
}

function findLast(list) {
     let currNode = list.head;
     while (currNode.next !== null) {
          currNode = currNode.next
     }
     return console.log(currNode.value)
}

function reverse(list) {
     if (list == null) {
          return null
     }
     if (list.next == null) {
          return list.next
     }
     let second = list.next;
     list.next = null;
     let reversedRest = reverse(second);
     second.next = list;

     return reversedRest
}

function thirdFromTheEnd(list) {
     let third = list.head;
     let thirdFromEnd = list.head.next.next.next;
     while(thirdFromEnd !== null) {
          third = third.next;
          thirdFromEnd = thirdFromEnd.next;
     }
     return third.value
}

function middleList(list){
     if(list.head===null){
          return null
     }
     let one = list.head;
     let two = list.head;

     while(two !==null && two.next!==null){
          one = one.next;
          two = two.next.next;
     }
     return one.value
}

function cycle(head) {
     let two = head
     let one = head

     while(two.next !== null) {
          two = two.next.next
          one = one.next

          if (one === two) 
          return console.log(true)
     }
     return console.log(false)
}

module.exports = {
     display, size, isEmpty, findPrevious, findLast, reverse, thirdFromTheEnd, middleList, cycle
}