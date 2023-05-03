'use strict';
/* ================================= TASK: Split Strings =================================
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
---------------------------------------------------------------------------
*/

// ============================== MY SOLUTION =============================

function solution(str){
  return str.length % 2 !== 0 ? str.replace(/^\w*$/g,'$&_').match(/\w{2}/gi) || [] : str.match(/\w{2}/gi) || [];
}

console.log(solution("abcdef"));
console.log(solution("abcdefg"));
console.log(solution(""));
/* ===================== CODEWER BEST PRACTICE SOLUTIONS ==================

1.
function solution(s){
   return (s+"_").match(/.{2}/g)||[]
}
--------------------------------- MY NOTES --------------------------------

*/