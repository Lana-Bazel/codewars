/*
========================== TASK ==========================
Your task is to make two functions ( max and min)
that receive a list of integers as input,
and return the largest and lowest number in that list, respectively.

Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]           -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110]   -> min = -110, max = 56
* [42, 54, 65, 87, 0]               -> min = 0, max = 87
* [5]                               -> min = 5, max = 5

You may consider that there will not be any empty arrays/vectors.
----------------------------------------------------------------

Ваша задача состоит в том, чтобы сделать две функции (максимум и минимум),
которые получают на вход список целых чисел и возвращают
наибольшее и наименьшее число в этом списке соответственно.

Вы можете считать, что пустых массивов/векторов не будет.
 */

//===================== MY SOLUTION =======================

let min = function(list){
  list.sort(function(a,b){
    return a - b;
  })
  return list[0];
}

//console.log(min([-52, 56, 30, 29, -54, 0, -110]));

let max = function(list){
  list.sort(function(a,b){
    return b - a;
  })
  return list[0];
}

//console.log(max([4,6,2,1,9,63,-134,566]));

/* ============== CODEWARS BEST PRACTICE SOLUTIONS ====================

1.
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

2.
var min = function(list){
    list.sort((a, b) => (a - b));
    return list[0];
}

var max = function(list){
    list.sort((a, b) => (b - a));
    return list[0];
}
------------------------ MY NOTES -------------------------------

??? Math.min Math.max

 */
