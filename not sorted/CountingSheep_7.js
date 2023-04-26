/*
============================= TASK ===============================
Consider an array/list of sheep where some sheep may be missing
from their place. We need a function that counts the number of sheep
present in the array (true means present).

Hint: Don't forget to check for bad values like null/undefined
------------------------------------------------------------------

Рассмотрим массив/список овец, где некоторые овцы могут отсутствовать
на своем месте. Нам нужна функция, которая подсчитывает количество овец,
присутствующих в массиве (true означает наличие).

Подсказка: не забудьте проверить наличие неправильных значений,
таких как null/undefined
 */

//======================== MY SOLUTION ===========================

/*let array1 = [true,  true,  true,  false,
  true,  undefined,  true,  true ,
  true,  false, null,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true ];*/
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.map(i => i ? 1 : 0).reduce((a, b) => a + b, 0);
}

//console.log(countSheeps(array1));


/* ============== CODEWARS BEST PRACTICE SOLUTIONS ====================

1.
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

------------------------ MY NOTES -------------------------------
??? arr.filter()

https://doka.guide/js/array-filter/

 */

