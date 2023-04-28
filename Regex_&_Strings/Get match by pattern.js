'use strict';
/* ================================= TASK:  =================================
You are given a string with three lowercase letters ( pattern ).

Your Task

Implement a function find_matched_by_pattern(pattern) that returns a predicate function, testing a string input and returning true if the string is matching the pattern, false otherwise.

A word is considered a match for a given pattern if the first occurrence of each letter of the pattern is found in the same order in the word. If a character in the pattern is duplicated, the same logic applies further.

The pattern will always be a string of size 3.
---------------------------------------------
Example of use:

predicate = find_matched_by_pattern('acs')
predicate('access') # True
predicate('sacrifice') # False
---------------------------------------------
Examples of inputs/outputs:

Pattern:  Word:     Match:
acs       access    true
          ascces    false
          scares    false
vvl       veturvel  true
          velivel   false
bmb       bomb      true
          babyboom  false
---------------------------------------------------------------------------


*/

// ============================== MY SOLUTION =============================

/*function findMatchedByPattern(pattern) {
  const regexp = RegExp(`${pattern[0]}.*${pattern[1]}.*${pattern[2]}`);
  return regexp.test(this);
}*/

const findMatchedByPattern = (p) => (s) => {
  return RegExp(`^[^${p[1]}${p[2]}]*${p[0]}[^${p[2]}]*${p[1]}.*${p[2]}`).test(s);
}

console.log(findMatchedByPattern('sus')('pressurizations'));
/* ===================== CODEWER BEST PRACTICE SOLUTIONS ==================

1.

--------------------------------- MY NOTES --------------------------------

*/