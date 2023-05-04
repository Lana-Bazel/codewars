'use strict';
/* ================================= TASK: ROT13 =================================
How can you tell an extrovert from an introvert at NSA?
Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

Test examples:

"EBG13 rknzcyr." -> "ROT13 example."

"This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"
---------------------------------------------------------------------------
*/

// ============================== MY SOLUTION =============================

function rot13(str) {
  let regex = /[a-z]/ig;
  return str.replace(regex, (char) => {
    return String.fromCharCode(char.charCodeAt(0) + (char.toLowerCase() <= 'm' ? 13 : -13));
  })
}

console.log(rot13("EBG13 rknzcyr.")); // ROT13 example.
console.log(rot13("This is my first ROT13 excercise!")) // Guvf vf zl svefg EBG13 rkprepvfr!

/* ===================== CODEWER BEST PRACTICE SOLUTIONS ==================

1.

--------------------------------- MY NOTES --------------------------------

*/