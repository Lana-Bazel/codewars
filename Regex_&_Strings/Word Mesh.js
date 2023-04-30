'use strict';
/* ================================= TASK:  =================================
You will be given an array of strings. The words in the array should mesh together where one
or more letters at the end of one word will have the same letters (in the same order) as the next word in the array.
But, there are times when all the words won't mesh.

Examples of meshed words:

"apply" and "plywood"

"apple" and "each"

"behemoth" and "mother"

Examples of words that do not mesh:

"apply" and "playground"

"apple" and "peggy"

"behemoth" and "mathematics"

If all the words in the given array mesh together, then your code should return the meshed letters in a string.
You should return the longest common substring. You won't know how many letters the meshed words have in common,
but it will be at least one.

If any pair of consecutive words fails to mesh, your code should return "failed to mesh".

Input: An array of strings. There will always be at least two words in the input array.

Output: Either a string of letters that mesh the words together or the string "failed to mesh".
---------------------------------------------------------------------------
*/

// ============================== MY SOLUTION =============================

function wordMesh(arr){
  let x = arr.join(' ').match(/(\w+)(?=\s\1)/gi);
  return x.length === arr.length - 1 ? x.join('') : "failed to mesh";
}

console.log(wordMesh(["beacon","condominium","umbilical","california"])); //"conumcal"
console.log(wordMesh(["allow","lowering","ringmaster","terror"])); // "lowringter"
console.log(wordMesh(["abandon","donation","onion","ongoing"])); // "dononon"
console.log(wordMesh(["jamestown","ownership","hippocampus","pushcart","cartographer","pheromone"])); // "ownhippuscartpher"
console.log(wordMesh(["kingdom", "dominator", "notorious", "usual", "allegory"])); // "failed to mesh"

/* ===================== CODEWER BEST PRACTICE SOLUTIONS ==================

1.
function wordMesh(arr){
  const meshed = arr.join` `.match(/(\w+)(?= \1)/g);
  return meshed.length === arr.length - 1 ? meshed.join`` : 'failed to mesh';
}
--------------------------------- MY NOTES --------------------------------

*/