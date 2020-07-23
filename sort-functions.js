function mSort(array) {
     if (array.length <= 1) {
          return array;
     }

     const middle = Math.floor(array.length / 2);
     let left = array.slice(0, middle);
     let right = array.slice(middle, array.length);

     left = mSort(left);
     right = mSort(right);
     return merge(left, right, array);
};

function merge(left, right, array) {
     let leftIndex = 0;
     let rightIndex = 0;
     let outputIndex = 0;
     while (leftIndex < left.length && rightIndex < right.length) {
          if (left[leftIndex] < right[rightIndex]) {
               array[outputIndex++] = left[leftIndex++];
          }
          else {
               array[outputIndex++] = right[rightIndex++];
          }
     }

     for (let i = leftIndex; i < left.length; i++) {
          array[outputIndex++] = left[i];
     }

     for (let i = rightIndex; i < right.length; i++) {
          array[outputIndex++] = right[i];
     }
     return array;
};

function qSort(array, start = 0, end = array.length) {
     if (start >= end) {
          return array;
     }
     const middle = partition(array, start, end);
     array = qSort(array, start, middle);
     array = qSort(array, middle + 1, end);
     return array;
};


function partition(array, start, end) {
     const pivot = array[end - 1];
     let j = start;
     for (let i = start; i < end - 1; i++) {
          if (array[i] <= pivot) {
               swap(array, i, j);
               j++;
          }
     }
     swap(array, end - 1, j);
     return j;
};

function swap(arr, i, j) {
     const temp = arr[i];
     arr[i] = arr[j];
     arr[j] = temp;
}

module.exports = {
     mSort, merge, qSort, partition, swap
}