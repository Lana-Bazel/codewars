/* ================================= TASK =================================
---------------------------------------------------------------------------

*/

// ============================== MY SOLUTION =============================

function countPositivesSumNegatives(input) {
  let countPositive = 0;
  let sumNegative = 0;
  let result = [];

  if (!input || !input.length) { // is checking array is null or empty
    result = [];
  } else {
    input.forEach(i => i > 0 ? countPositive++ : i < 0 ? sumNegative += i : sumNegative += 0);
    result.push(countPositive, sumNegative);
  }
  return result;
}

//console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));

/* ===================== CODEWER BEST PRACTICE SOLUTIONS ==================

1.
function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];

    var positive = 0;
    var negative = 0;

    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }

    return [positive, negative];
}

2.
function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}

--------------------------------- MY NOTES --------------------------------
*/