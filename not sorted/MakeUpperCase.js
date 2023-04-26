/*
========================== TASK ==========================
Write a function which converts the input string to uppercase.
 */

//===================== MY SOLUTION =======================

function makeUpperCase(str) {
  return str.toUpperCase();
}

console.log(makeUpperCase('hello'));

/* ============== CODEWARS BEST PRACTICE SOLUTIONS ====================

1.
const makeUpperCase = str => str.toUpperCase();

------------------------ MY NOTES -------------------------------

??? String.prototype.toUpperCase()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
 */