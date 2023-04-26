'use strict';
/* ================================= TASK =================================
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
---------------------------------------------------------------------------
*/

// ============================== MY SOLUTION =============================

function findAverage(array) {
  return !array.length ? 0 : array.reduce((a, b) => a + b) / array.length;
}

console.log(findAverage([1,2,3,4]));

/* ===================== CODEWER BEST PRACTICE SOLUTIONS ==================

--------------------------------- MY NOTES --------------------------------

*/