/*
========================== TASK ==========================
Write a function to convert a name into initials.
This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
------------------------------------------------------------------

Напишите функцию для преобразования имени в инициалы.
Это ката строго состоит из двух слов с одним пробелом между ними.
На выходе должны быть две заглавные буквы с точкой, разделяющей их.
 */

//===================== MY SOLUTION =======================

function abbrevName(name){
  const arrName = name.toUpperCase().split(' ');
  return `${arrName[0][0]}.${arrName[1][0]}`
}

console.log(abbrevName("evan dole"));

/* ============== CODEWARS BEST PRACTICE SOLUTIONS ====================

1.
function abbrevName(name){
  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

2.
function abbrevName(name){
    return name.split(' ').map(i => i[0].toUpperCase()).join('.')
}

3.
function abbrevName(name){
  return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
}

4.
const abbrevName = name => name.match(/\b\w/g).join('.').toUpperCase()

------------------------ MY NOTES -------------------------------

??? String.prototype.split()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
https://translated.turbopages.org/proxy_u/en-ru.ru.465a2ffe-6440aeb0-3df4259b-74722d776562/https/www.freecodecamp.org/news/javascript-split-how-to-split-a-string-into-an-array-in-js/

??? .map

https://doka.guide/js/array-map/
https://www.digitalocean.com/community/tutorials/4-uses-of-javascripts-arraymap-you-should-know-ru

??? .match

https://learn.javascript.ru/regexp-methods

 */