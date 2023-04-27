'use strict';
/* ================================= TASK: Why So Serious? =================================
Help Gotham City PD decode the puzzle below. If all the letters of the Joker's name are encoded
in the string of cards, return true. If not, return false. Note the input is a string of shuffled cards
i.e. "6s5s4cAs4s2c7s..." and the name can be found in any order.

 Card | Letter
------+--------
  Jc  |   J
  7s  |   O
  5s  |   K
  As  |   E
  9c  |   R

Examples:
"10s8s9c2s5s7c2c9s7sJc5cAs"  =>  true
"9s4s8c6s4c10c8sJs3s"        =>  false
---------------------------------------------------------------------------
*/

// ============================== MY SOLUTION =============================

function whySoSerious(str) {
  return [...new Set(str.match(/([J9]c)|([A57]s)/ig))].length === 5;
}

console.log(whySoSerious('9c8cAc3s3cAsJs9sJc4c5s2s7s'));
console.log(whySoSerious('10cJs8s6c6s'));

/* ===================== CODEWER BEST PRACTICE SOLUTIONS ==================

1.
function whySoSerious(str) {
  return ['Jc','7s','5s','As','9c'].every(k=>str.includes(k));
}

2.
function whySoSerious(str) {
  return ['Jc','As','5s','7s','9c'].every(e=>str.indexOf(e)!=-1)
}
--------------------------------- MY NOTES --------------------------------
??? .every

https://doka.guide/js/array-every/
*/