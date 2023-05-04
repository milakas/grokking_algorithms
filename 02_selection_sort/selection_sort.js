'use strict';

const findSmallestIndex = (arr) => {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
};

const selectionSort = (arr) => {
  const newSortedArr = [];
  const copyArray = arr.slice();

  for (let i = 0; i < arr.length; i++) {
    let smallestIndex = findSmallestIndex(copyArray);
    newSortedArr.push(copyArray.splice(smallestIndex, 1)[0]);
  }

  return newSortedArr;
};

console.log(selectionSort([5, 3, 6, 2, 10])); // [2, 3, 5, 6, 10]
