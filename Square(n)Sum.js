/*
========================== TASK ==========================
Complete the square sum function so that it squares each number passed
into it and then sums the results together.
----------------------------------------------------------
Завершите функцию квадратной суммы, чтобы она возводила в квадрат каждое
переданное ей число, а затем суммировала результаты.
 */

//===================== MY SOLUTION =======================

function squareSum(numbers){
  return numbers.map(i => Math.pow(i, 2)).reduce((a, b) => a + b, 0);
}

//console.log(squareSum([0, 3, 4, 5]));