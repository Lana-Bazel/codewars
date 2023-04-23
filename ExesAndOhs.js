'use strict';
/* ================================= TASK =================================
Check to see if a string has the same amount of 'x's and 'o's.
The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
---------------------------------------------------------------------------

Проверьте, содержит ли строка одинаковое количество «x» и «o».
Метод должен возвращать логическое значение и не учитывать регистр.
Строка может содержать любой символ.
*/

// ============================== MY SOLUTION =============================
function XO(str) {
  let countXO = 0;
  for (let char of str.toLowerCase()) {
    char === 'x' ? countXO += 1 : char === 'o' ? countXO -= 1 : countXO += 0;
  }
  return countXO === 0;
}

console.log(XO("xzZzO"));
/* ===================== CODEWER BEST PRACTICE SOLUTIONS ==================

1.
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

2.
const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}

3.
function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}
--------------------------------- MY NOTES --------------------------------

*/