'use strict';
/* ================================= TASK: Encrypt this! =================================
Acknowledgments:
I thank yvonne-liu for the idea and for the example tests :)

Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.

Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
---------------------------------------------------------------------------
*/

// ============================== MY SOLUTION =============================

function encryptThis(text) {
  return text.replace(/\b\S/g, (f) => f.charCodeAt(0)).
              replace(/(?!\d+)(\w)(\w*)(\w\b)/gi, `$3$2$1`);
}

console.log(encryptThis('A wise old owl lived in an oak'));
console.log(encryptThis('The more he saw the less he spoke'));
/* ===================== CODEWER BEST PRACTICE SOLUTIONS ==================

1.

--------------------------------- MY NOTES --------------------------------

*/