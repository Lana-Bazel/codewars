/*
========================= TASK ===========================
Given an array of integers as strings and numbers,
return the sum of the array values as if all were numbers.

Return your answer as a number.
----------------------------------------------------------
Учитывая массив целых чисел в виде строк и чисел,
верните сумму значений массива, как если бы все они были числами.

Верните ответ в виде числа.
 */

//===================== MY SOLUTION =======================

function sumMix(x){
  return x.reduce((a, b) => Number(a) + Number(b), 0);
}

//console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));

/*
============== CODEWARS BEST PRACTICE SOLUTIONS ====================

1.
function sumMix(x){
  return x.map(a => +a).reduce((a, b) => a + b);
}

2.
function sumMix(x){
  let result = 0;
  for (let n of x) {
    result += parseInt(n);
  }
  return result;
}

------------------------ MY NOTES -------------------------------
??? array.map

https://doka.guide/js/array-map/
https://learn.javascript.ru/array-methods

??? parseInt()

https://learn.javascript.ru/number
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/parseInt

*/

