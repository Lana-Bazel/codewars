/*
================== TASK ========================

Your task is to create a function that does four basic mathematical operations.
The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.
--------------------------------------------------------------------------------------------------
Ваша задача — создать функцию, которая выполняет четыре основные математические операции.
Функция должна принимать три аргумента - операция(строка/символ), значение1(число), значение2(число).
Функция должна возвращать числовой результат после применения выбранной операции.

Examples(Operator, value1, value2) --> output
('+', 4, 7)   --> 11
('-', 15, 18) --> -3
('*', 5, 5)   --> 25
('/', 49, 7)  --> 7
 */

//===================== MY SOLUTION =======================

function basicOp(operation, value1, value2) {
  if (operation === '+') return value1 + value2;
  else if (operation === '-') return value1 - value2;
  else if (operation === '*') return value1 * value2;
  else if (operation === '/') return value1 / value2;
}

/*
============== CODEWARS BEST PRACTICE SOLUTIONS ====================

1.
function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}

2.
function basicOp(o, a, b) {
  return eval(a+o+b);
}

3.
function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+': return value1 + value2;
        case '-': return value1 - value2;
        case '*': return value1 * value2;
        case '/': return value1 / value2;
        default: return 'Operation must be one of + - * /';
    }
}

4.
function basicOp(operation, value1, value2)
{
  var cases = {
    '+': value1 + value2,
    '-': value1 - value2,
    '*': value1 * value2,
    '/': value1 / value2
  };
  return cases[operation]
}

------------------------ MY NOTES -------------------------------

??? switch

https://learn.javascript.ru/switch

https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/switch

??? eval

https://learn.javascript.ru/eval

https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/eval
 */