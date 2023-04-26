/*
========================== TASK ==========================
You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
----------------------------------------------------------------
Вы получаете массив чисел, возвращаете сумму всех положительных.
Пример [1,-4,7,12] => 1 + 7 + 12 = 20

Примечание: если суммировать нечего, сумма по умолчанию равна 0.
*/

//===================== MY SOLUTION =======================

function positiveSum(arr) {
  let positiveArr = arr.filter(function(num) {
    return num > 0;
  });
  return positiveArr.reduce((a, b) => a + b, 0);
}

//console.log(positiveSum([-1,2,3,4,-5]));

/* ============== CODEWARS BEST PRACTICE SOLUTIONS ====================

1.
function positiveSum(arr) {
  var total = 0;
  for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
    if (arr[i] > 0) {                   // if arr[i] is greater than zero
      total += arr[i];                  // add arr[i] to total
    }
  }
  return total;                         // return total
}

2.
function positiveSum(arr) {
   return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

3.
function positiveSum (arr) {
  return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
}

------------------------ MY NOTES -------------------------------

??? reduce()

https://doka.guide/js/array-reduce/
https://learn.javascript.ru/array-methods
https://medium.com/nuances-of-programming/javascript-101-метод-массива-reduce-48b4a7d16b29
 */

