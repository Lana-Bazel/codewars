'use strict';
/* ================================= TASK =================================
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
---------------------------------------------------------------------------

Возвращает количество (количество) гласных в заданной строке.

Мы будем рассматривать a, e, i, o, u как гласные для этой Ката (но не y).

Входная строка будет состоять только из строчных букв и/или пробелов.
*/

// ============================== MY SOLUTION =============================
//arr.some(v => haystack.includes(v));
function getCount(str) {
  return str.split('').filter(i => ['a', 'e', 'i', 'o', 'u'].includes(i)).length;
}

console.log(getCount("abracadabra"));

/* ===================== CODEWER BEST PRACTICE SOLUTIONS ==================

1.
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

2.
function getCount(str) {
  var vowelsCount = 0;
  var vowels = ["a","e","i","o","u"];
  for(var i = 0;i < str.length;i++){
    for(var j=0;j<vowels.length;j++){
      if(str[i] === vowels[j]){
        vowelsCount++;
      }
    }
  }

  return vowelsCount;
}
--------------------------------- MY NOTES --------------------------------
??? Includes

https://doka.guide/js/includes/
*/