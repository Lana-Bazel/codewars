'use strict';
/* ================================= TASK:  =================================
Your task is to write a function that takes one parameter str that MUST be a string
and removes all capital and small letters B, M and W.
If data of the wrong data type was sent as a parameter the function must throw
an error with the following specific message:

new Error("This program only works for text.");
---------------------------------------------------------------------------


*/

// ============================== MY SOLUTION =============================

function removeBMW(str){
  const dataType= new Error("This program only works for text.");
  if (typeof str === 'string') {return str.replace(/b|m|w/gi, '');}
  else {console.log(dataType);}
}

//console.log(removeBMW(120));
/* ===================== CODEWER BEST PRACTICE SOLUTIONS ==================

1.
function removeBMW(str) {
  if (typeof str !== "string") {
    throw new Error("This program only works for text.")
  }
  return str.replace(/[bmw]+/gi, "")
}
--------------------------------- MY NOTES --------------------------------
??? throw
*/