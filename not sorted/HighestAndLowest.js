/* ================================= TASK =================================
In this little assignment you are given a string of space separated numbers,
and have to return the highest and lowest number.

Examples:
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

Notes:
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space,
and highest number is first.
---------------------------------------------------------------------------

В этом небольшом задании вам дается строка чисел, разделенных пробелами,
и должны вернуть наибольшее и наименьшее число.

Примечания:
Все номера действительны Int32, их не нужно проверять.
Во входной строке всегда будет хотя бы одно число.
Выходная строка должна состоять из двух чисел, разделенных одним пробелом,
и наибольшее число является первым.
*/

// ============================== MY SOLUTION =============================

function highAndLow(numbers){
  let arrNums = numbers.split(' ');
  return `${Math.max(...arrNums)} ${Math.min(...arrNums)}`;
}

//console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4 63 -16"));

/* ===================== CODEWER BEST PRACTICE SOLUTIONS ==================

--------------------------------- MY NOTES --------------------------------

!!! Math.max и Math.min преобразовывает строку в число
*/