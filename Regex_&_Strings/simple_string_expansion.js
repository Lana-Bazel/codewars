'use strict';
/* ================================= TASK: Simple Simple Simple String Expansion =================================
Given a string that includes alphanumeric characters ("3a4B2d") return the expansion of that string:
The numeric values represent the occurrence of each letter preceding that numeric value.
There should be no numeric characters in the final string.

Notes
The first occurrence of a numeric value should be the number of times each character behind it is repeated,
until the next numeric value appears
If there are multiple consecutive numeric characters, only the last one should be used (ignore the previous ones)
Empty strings should return an empty string.
Your code should be able to work for both lower and capital case letters.

"3D2a5d2f"  -->  "DDDaadddddff"    # basic example: 3 * "D" + 2 * "a" + 5 * "d" + 2 * "f"
"3abc"      -->  "aaabbbccc"       # not "aaabc", nor "abcabcabc"; 3 * "a" + 3 * "b" + 3 * "c"
"3d332f2a"  -->  "dddffaa"         # multiple consecutive digits: 3 * "d" + 2 * "f" + 2 * "a"
"abcde"     -->  "abcde"           # no digits
"1111"      -->  ""                # no characters to repeat
""          -->  ""                # empty string
---------------------------------------------------------------------------
*/

// ============================== MY SOLUTION =============================

function stringExpansion(s) {
  return /^\d+$/.test(s) ? '' : s.replace(/(?:\d*)(\d+)(\D+)(\d+$)?/ig, (match, p1, p2) => {
    let newStr = '';
    for (let char of p2) {
      newStr += char.repeat(p1)
    }
    return newStr;
  });
}

console.log(stringExpansion('3D2a5d2f')); // DDDaadddddff
console.log(stringExpansion('3d332f2a')); // dddffaa
console.log(stringExpansion('0d0a0v0t0y2')); // ''
console.log(stringExpansion('11111')); // abcde
console.log(stringExpansion('a2bcde')); // abbccddee

/* ===================== CODEWER BEST PRACTICE SOLUTIONS ==================

1.
const stringExpansion = s => s.replace(/(\d)+([a-z]*)/ig, (match, digit, chars) => chars.replace(/./g, c => c.repeat(digit)))
--------------------------------- MY NOTES --------------------------------

*/