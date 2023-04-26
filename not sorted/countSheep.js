/* =================== TASK ====================

Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...".
Input will always be valid, i.e. no negative integers.
 */

//================= MY SOLUTION ==========================
let countSheep = function (num){
  let i = 1;
  let countStr = "";
  while (i <= num) {
    countStr += String(i) + " sheep...";
    i++;
  }
  return countStr;
}

console.log(countSheep(9))


/* ============== CODEWARS BEST PRACTICE SOLUTION ====================

var countSheep = function (num){
  let str = "";
  for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
  return str;
}

------------------------ MY NOTES -------------------------------

!!! Explore the topic 'Template literals'

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Template_literals

https://learn.javascript.ru/es-string


 */