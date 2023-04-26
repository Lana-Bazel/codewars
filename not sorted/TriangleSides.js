'use strict';
/* ================================= TASK =================================
Implement a function that accepts 3 integer values a, b, c.
The function should return true if a triangle can be built with the sides
of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).
---------------------------------------------------------------------------

Реализуйте функцию, которая принимает 3 целочисленных значения a, b, c.
Функция должна возвращать true, если можно построить треугольник со сторонами
заданной длины и ложно в любом другом случае.

(В этом кейсе все треугольники должны иметь поверхность больше 0, чтобы быть принятыми).
*/

// ============================== MY SOLUTION =============================

function isTriangle(a,b,c) {
  return a < (b + c) && b < (a + c) && c < (a + b);
}
//console.log(isTriangle(7,2,2));
/* ===================== CODEWER BEST PRACTICE SOLUTIONS ==================

1.

--------------------------------- MY NOTES --------------------------------

*/