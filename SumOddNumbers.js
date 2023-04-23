'use strict';
/* ================================= TASK =================================
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1)
e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
---------------------------------------------------------------------------

Дан треугольник последовательных нечетных чисел.
Вычислите сумму чисел в n-й строке этого треугольника (начиная с индекса 1)
*/

// ============================== MY SOLUTION =============================

function rowSumOddNumbers(n) {
  const odd = [];
  let firstNum = 1;
  for (let row = 1; row < n; row++) {
    firstNum += row * 2;
  }
  for (let i = firstNum; i <= (firstNum + (n-1)*2); i += 2) {
    odd.push(i);
  }
  return odd.reduce((a, b) => a + b);
}

console.log(rowSumOddNumbers(42));

/* ===================== CODEWER BEST PRACTICE SOLUTIONS ==================

1.
function rowSumOddNumbers(n) {
  return Math.pow(n, 3)
}
--------------------------------- MY NOTES --------------------------------

*/