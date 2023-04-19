/*
================== TASK ========================
Complete the function so that it finds the average of the three scores passed to it
and returns the letter value associated with that grade.
-------------------------------------------------------------------------------------------
Завершите функцию, чтобы она нашла среднее значение трех переданных ей баллов
и вернула буквенное значение, связанное с этой оценкой.

NumericalScore	     LetterGrade
90 <= score <= 100	 'A'
80 <= score < 90	   'B'
70 <= score < 80	   'C'
60 <= score < 70	   'D'
0 <= score < 60	     'F'

Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
--------------------------------------------------------------------------------------------------
Все проверенные значения находятся в диапазоне от 0 до 100.
Нет необходимости проверять наличие отрицательных значений или значений, превышающих 100.
 */

//===================== MY SOLUTION =======================

function getGrade (s1, s2, s3) {
  let average;
  const numbers = [s1, s2, s3];
  const letters = ['A', 'B', 'C', 'D', 'F'];
  average = numbers.reduce((acc, number) => acc + number, 0) / numbers.length;

  if (90 <= average && average <= 100) {
    return letters[0];
  }
  else if (80 <= average && average <= 90) {
    return letters[1];
  }
  else if (70 <= average && average <= 80) {
    return letters[2];
  }
  else if (60 <= average && average <= 70) {
    return letters[3];
  }
  else {
    return letters[4];
  }
}

console.log(getGrade(99, 99, 69));

/* ============== CODEWARS BEST PRACTICE SOLUTIONS ====================
1.
function getGrade (s1, s2, s3) {
  avg = (s1+s2+s3)/3;
  if (avg < 60)  return "F";
    else if (avg < 70) return "D";
    else if (avg < 80) return "C";
    else if (avg < 90) return "B";
    else return "A";
}

2.
function getGrade (s1, s2, s3) {
  var s = (s1 + s2 + s3) / 3
  return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
}

3.
function getGrade(...scores) {
  let average = scores.reduce((a, b) => a + b) / scores.length

  if (average >= 90) return 'A'
  else if (average >= 80) return 'B'
  else if (average >= 70) return 'C'
  else if (average >= 60) return 'D'
  else return 'F'
}

------------------------ MY NOTES -------------------------------

!!! Explore the topic 'Ternary operator'

https://www.freecodecamp.org/news/the-ternary-operator-in-javascript/

https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Conditional_operator

https://doka.guide/js/ternary-operator/
 */