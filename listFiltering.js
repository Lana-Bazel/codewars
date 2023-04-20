/*
============================= TASK ===============================
In this kata you will create a function that takes a list of
non-negative integers and strings and returns
a new list with the strings filtered out.
------------------------------------------------------------------

В этом ката вы создадите функцию, которая берет список неотрицательных
целых чисел и строк и возвращает новый список с отфильтрованными строками.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
 */
//===================== MY SOLUTION =======================
const filter_list = (l) => l.filter((i) => Number.isInteger(i));
/*    ^              ^          ^
      |              |          |
  --------       ---------      |
   func.          func.         |
   exp.           param.        |
                          ----------------------------
                          accepts a callback and
                          filters the array according
                          to given conditions

 */

//console.log(filter_list([1,2,'aasf','1','123',123]));

/* ============== CODEWARS BEST PRACTICE SOLUTIONS ====================

1.
function filter_list(l) {
  return l.filter(function(v) {return typeof v == 'number'})
}

2.
function filter_list(l) {
 return l.filter(v => typeof v == "number")
}

3.
function filter_list(l) {
  return l.filter(e => Number.isInteger(e));
}

 */