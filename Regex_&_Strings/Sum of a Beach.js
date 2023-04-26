'use strict';
/* ================================= TASK: SUM OF BEACH =================================
Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words
"Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).

Examples:
sumOfABeach("WAtErSlIde")                    ==>  1
sumOfABeach("GolDeNSanDyWateRyBeaChSuNN")    ==>  3
sumOfABeach("gOfIshsunesunFiSh")             ==>  4
sumOfABeach("cItYTowNcARShoW")               ==>  0
---------------------------------------------------------------------------
*/

// ============================== MY SOLUTION =============================

function sumOfABeach(beach) {
  const occurrences = beach.match(/sand|water|fish|sun/gi);
  if (!occurrences) {
    return 0;
  } else {
    return occurrences.length;
  }
}

//console.log(sumOfABeach('sAnDsandwaTerwatErfishFishsunsunsandwater'));

/* ===================== CODEWER BEST PRACTICE SOLUTIONS ==================

1.
// обработан null
const sumOfABeach = beach => (beach.match(/sand|water|fish|sun/ig) || []).length

--------------------------------- MY NOTES --------------------------------
*/