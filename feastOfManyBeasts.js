/*
========================= TASK ===========================
All of the animals are having a feast! Each animal is bringing one dish.
There is just one rule: the dish must start and end with the same letters
as the animal's name. For example, the great blue heron is bringing
garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments
and returns true or false to indicate whether the beast is allowed
to bring the dish to the feast.

Assume that beast and dish are always lowercase strings,
and that each has at least two letters.
beast and dish may contain hyphens and spaces,
but these will not appear at the beginning or end of the string.
They will not contain numerals.
----------------------------------------------------------------

У всех животных праздник! Каждое животное приносит одно блюдо.
Есть только одно правило: блюдо должно начинаться и заканчиваться
теми же буквами, что и имя животного. Например, большая голубая цапля
приносит чесночный наан, а синица приносит шоколадный торт.

Напишите функцию feast, которая принимает имя животного и блюдо
в качестве аргументов и возвращает true или false, чтобы указать,
разрешено ли животному приносить блюдо на пир.

Предположим, что зверь и блюдо всегда являются строками нижнего регистра
и каждая из них состоит как минимум из двух букв.
зверь и блюдо могут содержать дефисы и пробелы, но они не будут
появляться ни в начале, ни в конце строки. Они не будут содержать цифр.
 */

'use strict';

//===================== MY SOLUTION =======================
function feast(beast, dish) {
  return beast.slice(0, 1) === dish.slice(0, 1) && beast.slice(-1) === dish.slice(-1);
}

/* ============== CODEWARS BEST PRACTICE SOLUTIONS ====================

1.
function feast(beast, dish) {
	return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}

2.
function feast(beast, dish) {
  return beast[0]===dish[0] && beast.slice(-1)===dish.slice(-1);
}
 */
