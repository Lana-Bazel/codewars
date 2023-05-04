'use strict';
/* ================================= TASK: JoJo's Bizarre Kata =================================
Now, the drill in this kata is rather easy: either create a regex expression or a function
to find if a given name is a proper JoJo or not in boolean terms (true/True if it is valid, false/False otherwise).

To recap, you have a valid JoJo if:
-both your firstname and your surname start with "Jo-"
-your firstname starts with "Jo-" and your surname ends with "-Jo"
-both your firstname and your surname start with "Gio-"

Notes:
-don't expect the to have a string formed by only two words joined by a space:
 strings may be of 1 word, 2 words, 3 words or more
-lower- and uppercase will not matter here
-consider the first word as the firstname and the last word as the surname
----------------------------------------------------------------------------
*/

// ============================== MY SOLUTION =============================

let regex=/(\bjo\w*?\s\bjo)|(\bgio\w*?\s\bgio)|(\bjo\w*?\s\w*?jo\b)/i

function isJojo(name){
  return regex.test(name);
}

console.log(isJojo("Jonathan Joestar"));
console.log(isJojo('Jonathan Joestarjo'));
console.log(isJojo("giodio giobrand"));
console.log(isJojo("Dio Brando"));
/* ===================== CODEWER BEST PRACTICE SOLUTIONS ==================

1.

--------------------------------- MY NOTES --------------------------------

*/