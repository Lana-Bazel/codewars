'use strict';
/* ================================= TASK =================================
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which,
for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string.
For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used
three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string
is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer
as a string representing a rational whose numerator is the number of errors and the denominator the length
of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"
---------------------------------------------------------------------------

На заводе принтер печатает этикетки для коробок. Для одного вида коробок принтер должен использовать цвета, которые,
для простоты названы буквами от а до м.

Цвета, используемые принтером, записываются в управляющую строку.
Например, "хорошей" контрольной строкой будет aaabbbbhaijjjm, что означает, что принтер использовал
трижды цвет a, четыре раза цвет b, один раз цвет h, затем один раз цвет a...

Иногда возникают проблемы: отсутствие цветов, технический сбой и "плохая" управляющая строка.
производится напр. aaaxbbbbyyhwawiwjjjwwm с буквами не от a до m.

Вы должны написать функцию printer_error, которая с учетом строки будет возвращать частоту ошибок принтера
в виде строки, представляющей рациональное число, числитель которого — количество ошибок, а знаменатель —
длина управляющей строки. Не уменьшайте эту дробь до более простого выражения.

Строка имеет длину больше или равную единице и содержит только буквы от a до z.
*/

// ============================== MY SOLUTION =============================

function printerError(s) {
  const errors = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const counterErr = s.split('').filter(i => errors.includes(i)).length;
  return `${counterErr}/${s.length}`;
}

console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"));
/* ===================== CODEWER BEST PRACTICE SOLUTIONS ==================

1.
function printerError(s) {
    var count = 0;
    for(var i = 0; i < s.length; i++) {
      if (s[i] > "m") {
        count++;
      }
    }
    return count+"/"+s.length;
}

2.
const printerError = s => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;
--------------------------------- MY NOTES --------------------------------

*/