'use strict';
/* ================================= TASK =================================
An isogram is a word that has no repeating letters, consecutive or non-consecutive.
Implement a function that determines whether a string that contains
only letters is an isogram. Assume the empty string is an isogram.
Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
---------------------------------------------------------------------------

Изограмма — это слово, в котором нет повторяющихся букв,
последовательных или непоследовательных.
Реализуйте функцию, определяющую, является ли строка, содержащая
только буквы - изограммой. Предположим, что пустая строка является изограммой.
Игнорируйте регистр букв.

*/

// ============================== MY SOLUTION =============================
function isIsogram(str){
  let arrFromStr = str.toUpperCase().split('');
  let isogram = arrFromStr.filter((item, index, arr) => arr.indexOf(item) !== index);
  return (!str.length || !isogram.length);
}

//console.log(isIsogram("isogram"));

/* ===================== CODEWER BEST PRACTICE SOLUTIONS ==================

1.
function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}

2.
function isIsogram(str){
  return !/(\w).*\1/i.test(str)
}
--------------------------------- MY NOTES --------------------------------

??? Set

https://doka.guide/js/set/
*/