'use strict';
/* ================================= TASK =================================
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'
---------------------------------------------------------------------------
*/

// ============================== MY SOLUTION =============================

function removeDuplicateWords (s) {
  const uniqueValue = [...new Set(s.split(' '))];
  return Array.from(uniqueValue).join(' ');
}
/* ===================== CODEWER BEST PRACTICE SOLUTIONS ==================

1.
const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')
--------------------------------- MY NOTES --------------------------------

*/