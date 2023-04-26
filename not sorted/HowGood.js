/*
============================= TASK ===============================
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better
than the average student in your class.

You receive an array with your peers' test scores.
Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points.
For calculating the average point you may add your point to the given array!
------------------------------------------------------------------

В вашем классе был тест, и вы его прошли. Поздравляем!
Но вы амбициозный человек. Вы хотите знать, лучше ли вы,
чем средний ученик в вашем классе.

Вы получаете массив с результатами тестов ваших сверстников.
Теперь посчитайте среднее и сравните свой результат!

Верните True, если вы лучше, иначе False!

Примечание:
Ваши баллы не включены в массив баллов вашего класса.
Для расчета среднего балла вы можете добавить свой балл в данный массив!
 */

//========================= MY SOLUTION ==========================

function betterThanAverage(classPoints, yourPoints) {
  //classPoints.push(yourPoints);
  let average = classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
  return yourPoints > average;
}

//console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 55));