'use strict';
/* ================================= TASK =================================
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all the vowels
from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string
with all vowels removed.

For example, the string "This website is for losers LOL!" would become
"Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
---------------------------------------------------------------------------

Тролли атакуют ваш раздел комментариев!

Обычный способ справиться с этой ситуацией — удалить все гласные
из комментариев троллей, нейтрализуя угрозу.

Ваша задача — написать функцию, которая принимает строку и возвращает новую строку.
с удалением всех гласных.

Например, строка «Этот сайт для неудачников, LOL!» станет
"Ths wbst s fr lsrs LL!".

Примечание: для этой ката y не считается гласной.
*/

// ============================== MY SOLUTION =============================

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

console.log("This website is for losers LOL!");
console.log(disemvowel("This website is for losers LOL!"));
/* ===================== CODEWER BEST PRACTICE SOLUTIONS ==================

1.
const disemvowel = str => str.replace(/[aeiou]/gi,'');
--------------------------------- MY NOTES --------------------------------

??? RegExp
*/

