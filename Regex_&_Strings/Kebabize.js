'use strict';
/* ================================= TASK: Kebabize =================================
Modify the kebabize function so that it converts a camel case string into a kebab case.

"camelsHaveThreeHumps"  -->  "camels-have-three-humps"
"camelsHave3Humps"  -->  "camels-have-humps"
"CAMEL"  -->  "c-a-m-e-l"

Notes:
the returned string should only contain lowercase letters
---------------------------------------------------------------------------
*/

// ============================== MY SOLUTION =============================

function kebabize(str) {
  return str.replace(/[0-9]/g, '')
            .replace(/^[A-Z]/, (first) => `${first.toLowerCase()}`)
            .replace(/[A-Z]/g, (capital) => `-${capital.toLowerCase()}`);
}

console.log(kebabize('MyCamelCasedString'));
console.log(kebabize('myCamelHas3Humps'));
/* ===================== CODEWER BEST PRACTICE SOLUTIONS ==================

1.

--------------------------------- MY NOTES --------------------------------

*/