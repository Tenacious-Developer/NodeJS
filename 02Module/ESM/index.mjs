// for creating ES module we use .mjs extension in the file name
// file name from where it imports should be in .js extension.

// import searchingAlgo from './searching.js';

// console.log(searchingAlgo);
// console.log(searchingAlgo.linearSearch([3,2,1,5,4,23,6], 23));


// importing of named function
// import {bubbleSort, selectionSort, insertionSort} from './sorting.mjs';

// let arr = [5,4,3,2,1];
// bubbleSort(arr);
// console.log(arr);


// importing of default function and named function both
// here (Capital M)Mergesort is act as alias, beacuse name of function is mergesort

// import Mergesort, {bubbleSort as bs } from './sorting.mjs';

// let arr = [5,4,3,2,1];
// arr = Mergesort(arr);
// console.log(arr);

// importing all the named export and combine them in the sorting 

// import * as sorting from './sorting.mjs';
// sorting.bubbleSort(arr);
// console.log(arr);
