'use strict';
/* ================================= TASK: Remove the parentheses =================================

------In this kata you are given a string for example:

"example(unwanted thing)example"
Your task is to remove everything inside the parentheses as well as the parentheses themselves.

The example above would return:
"exampleexample"

Notes:

Other than parentheses only letters and spaces can occur in the string.
Don't worry about other brackets like "[]" and "{}" as these will never appear.
There can be multiple parentheses.
The parentheses can be nested.
---------------------------------------------------------------------
*/

// ============================== MY SOLUTION =============================

/*function removeParentheses(s){
  return s.replace(RegExp(/\(.*?\)/, 'gi'), '');
}*/


//console.log(removeParentheses("example(mmm(kkk(unwanted thing)ddd)hh)example (la la la) test"));
/* ===================== CODEWER BEST PRACTICE SOLUTIONS ==================

1.
function removeParentheses(s){
  let r = 0
  let x = ''
  for (let c of s) {
    if (c=='(') r++
    if (r==0) x+=c
    if (c==')') r--
  }
  return x
}

2.
function removeParentheses(s){
  while (s.match(/\([\w ]+\)/g)) {
    s = s.replace(/\([\w ]+\)/g ,'');
  }
  return s;
}

3.
const removeParentheses = s => s.includes('(') ? removeParentheses(s.replace(/\([^()]*?\)/, '')) : s;
--------------------------------- MY NOTES --------------------------------

*/