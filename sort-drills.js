const { _Node, LinkedList } = require('./lists')
const { display, size, isEmpty, findPrevious, findLast, reverse, thirdFromTheEnd, middleList, cycle } = require('./list-functions')
const { mSort, merge, qSort, partition, swap } = require('./sort-functions')

// 1. Understanding merge sort
// Given the following list of numbers 
// 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

// What is the resulting list that will be sorted after 3 recursive calls to mergesort?
// 21

// What is the resulting list that will be sorted after 16 recursive calls to mergesort?
//28

// What are the first 2 lists to be merged?
//[21, 1, 26, 45] and [29, 28, 2, 9]

// Which two lists would be merged on the 7th merge?
//[21, 1] and [29, 28]



// 2. Understanding quicksort
// 1) Suppose you are debugging a quicksort implementation that is supposed to sort an 
// array in ascending order. After the first partition step has been completed, the contents 
// of the array is in the following order: 3 9 1 14 17 24 22 20. Which of the following 
// statements is correct about the partition step? Explain your answer.

// ANSWER:
// The pivot could have been either 14 or 17
// The numbers to the left of 14 and 17 are smaller and the numbers to the right of 14 and 17 are larger,
// so either can be the pivot point.

// 2) Given the following list of numbers 
// 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 
// show the resulting list after the second partitioning according to the quicksort algorithm.

// When using the last item on the list as a pivot
// When using the first item on the list as a pivot



// 3. Implementing quicksort
// Write a function qSort that sorts a dataset using the quicksort algorithm. 
// The dataset to sort is: 
// 89 30 25 32 72 70 51 42 25 24 53 55 78 
// 50 13 40 48 32 26 2 14 33 45 72 56 44 
// 21 88 27 68 15 62 93 98 73 28 16 46 87 
// 28 65 38 67 16 85 63 23 69 64 91 9 70 
// 81 27 97 82 6 88 3 7 46 13 11 64 76 31 
// 26 38 28 13 17 69 90 1 6 7 64 43 9 73 
// 80 98 46 27 22 87 49 83 6 39 42 51 54 
// 84 34 53 78 40 14 5.

let DATA = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]
// DATA = DATA.map(number => parseInt(number))

function drillThree() {
     const sorted = qSort(DATA);
     let facts = true;
     for (let i = 0; i < sorted.length; i++) {
          if (sorted[i] > sorted[i + 1]) {
               facts = false
          }
     }
     console.log(facts)
}

// console.log(drillThree());

// 4. Implementing merge sort
// Write a function mSort that sorts the dataset above using the merge sort algorithm.

function drillFour() {
     const sorted = mSort(DATA);
     let facts = true;
     for (let i = 0; i < sorted.length - 1; i++) {
          if (sorted[i] > sorted[i + 1]) {
               facts = false
          }
     }
     console.log(facts)
}

// console.log(drillFour());

// 5. Sorting a linked list using merge sort
// Given a Linked List, sort the linked list using merge sort. 
// You will need your linked list class from previous lesson to 
// create the list and use all of its supplemental functions to solve this problem.

function mSortList(list) {
     let currNode = list.head;
     if (currNode.next === null) {
          return list;
     }
     let length = 1;
     while (currNode.next !== null) {
          length++;
          currNode = currNode.next
     }
     const middle = Math.floor( length / 2);
     let leftList = splitList(list, 0, middle);
     let rightList = splitList(list, middle, length);
     leftList = mSortList(leftList)
     rightList = mSortList(rightList)

     return mergeLists(leftList, rightList)
}

function splitList(list, start, end) {
     let currNode = list.head;
     if (currNode.next === null) {
          return;
     }
     const returnList = new LinkedList();
     let i = 0;
     while(currNode !== null) {
          if(i >= start && i < end) {
               returnList.insertLast(currNode.value);
          }
          i++;
          currNode = currNode.next;
     }
     return returnList;
}

function mergeLists(leftList, rightList) {
     const merged = new LinkedList();
     let currLeft = leftList.head;
     let currRight = rightList.head;

     while (currLeft && currRight) {
          if (currLeft.value <= currRight.value) {
               merged.insertLast(currLeft.value);
               currLeft = currLeft.next;
          }
          else {
               merged.insertLast(currRight.value);
               currRight = currRight.next;
          }
     }
     while (currLeft) {
          merged.insertLast(currLeft.value);
          currLeft = currLeft.next;
     }
     while (currRight) {
          merged.insertLast(currRight.value);
          currRight = currRight.next;
     }
     return merged
}

function drillFive() {
     const newLinkedList = new LinkedList();

     newLinkedList.insertFirst(7);
     newLinkedList.insertFirst(8);
     newLinkedList.insertFirst(3);
     newLinkedList.insertFirst(6);
     newLinkedList.insertFirst(4);
     newLinkedList.insertFirst(1);
     newLinkedList.insertFirst(2);
     newLinkedList.insertFirst(5);

     const sorted = mSortList(newLinkedList);
     display(sorted);
}

// console.log(drillFive())

function drillFiveTwo() {
     const newLinkedListOne = new LinkedList();
     newLinkedListOne.insertFirst(2);

     const newLinkedListTwo = new LinkedList();
     newLinkedListTwo.insertFirst(4);

     const mergedAgain = mergeLists(newLinkedListOne, newLinkedListTwo);
     display(mergedAgain);
}

// console.log(drillFiveTwo())

// 6. Bucket sort
// Write an O(n) algorithm to sort an array of integers, 
// where you know in advance what the lowest and highest values are. 
// You can't use arr.splice(), shift() or unshift() for this exercise.

function bucket(arr, min, max) {
     const numberMap = new Map();
     for (let i = 0; i < arr.length; i++) {
          if (numberMap.get(arr[i]) === undefined) {
               numberMap.set(arr[i], 1);
          }
          else {
               numberMap.set(arr[i], numberMap.get(arr[i]) + 1)
          }
     }
     let arrayOfI = 0;
     for (let i = min; i <= max; i++) {
          let num = numberMap.get(i);
          while (num) {
               arr[arrayOfI] = i;
               num--;
               arrayOfI++;
          }
     }
     return arr
}

function drillSix() {
     const arr = [15, 2, 10, 4, 5, 3];
     const max = Math.max(...arr)
     const min = Math.min(...arr)

     console.log(bucket(arr, min, max));
     console.log(arr)
}

// console.log(drillSix())

// 7. Sort in place
// Write an algorithm to shuffle an array into a random order in place 
// (i.e., without creating a new array).

const sample = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]

function sortInPlace(arr) {
     for(let i = 0; i < arr.length; i++) {
          let random = Math.floor(Math.random() * arr.length);
          swap(arr, i, random)
     }
     return arr
}

function drillSeven() {
     sortInPlace(sample)
     console.log(sample)
}

drillSeven();

// 8. Sorting books
// Imagine that I gave you 20 books to sort in alphabetical order. 
// Express this as an algorithm and then implement your algorithm.

// function alphabetical(string1, string2, index = 0) {
//      if (string1 = string2) {
//           return true;
//      }

//      if (string1.toLowerCase().charCodeAt([index]) < string2.toLowerCase().charCodeAt([index])) {
//           return true;
//      }

//      else if (string1.toLowerCase().charCodeAt([index]) > string2.toLowerCase().charCodeAt([index])) {
//           return false;
//      }

//      else {
//           return alphabetical(string1, string2, index + 1)
//      }
// }

// function mSortBooks(array) {
//      if (array.length <= 1) {
//           return array;
//      }

//      const middle = Math.floor(array.length / 2);
//      let left = array.slice(0, middle);
//      let right = array.slice(middle, array.length);

//      left = mSortBooks(left);
//      right = mSortBooks(right);
//      return mergeBooks(left, right, array);
// };

// function mergeBooks(left, right, array) {
//      let leftIndex = 0;
//      let rightIndex = 0;
//      let outputIndex = 0;
//      while (leftIndex < left.length && rightIndex < right.length) {
//           if (alphabetical(left[leftIndex], right[rightIndex])) {
//                array[outputIndex++] = left[leftIndex++];
//           }
//           else {
//                array[outputIndex++] = right[rightIndex++];
//           }
//      }

//      for (let i = leftIndex; i < left.length; i++) {
//           array[outputIndex++] = left[i];
//      }

//      for (let i = rightIndex; i < right.length; i++) {
//           array[outputIndex++] = right[i];
//      }
//      return array;
// };

Array.prototype.bubbleSort = function () {
     let n = this.length;
     while (n !== 0) {
       let placeholder = 0;
       for (let i = 1; i < this.length; i++) {
         if (this[i] < this[i - 1]) {
           let save = this[i];
           this[i] = this[i - 1];
           this[i - 1] = save;
           placeholder = i;
         }
       }
       n = placeholder;
     }
     return this;
   };

function drillEight() {

     const bookList = [
          'SQL In Easy Steps',
          'Out Of Control',
          'Dune',
          'Foundation',
          'Fellowship Of The Ring',
          'Two Towers',
          'Return Of The King',
          'Tomie',
          'Shiver',
          'Uzumaki',
          'Contact',
          'A Scanner Darkly',
          'Enders Game',
          'Anthem',
          'I, Robot',
          'Wheel Of Time',
          'Time Machine',
          'Pygmy',
          'Eragon',
          'Hey Nostradamus'
     ];

     console.log(bookList.bubbleSort());

}

drillEight()
