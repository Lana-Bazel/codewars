'use strict';
/* ================================= TASK:  =================================
You will be given a meme (string), and your task is to identify its category, and send it to the right receiver: IT - 'Roma', chemistry - 'Maxim', design - 'Danik', or other - 'Vlad'.

IT meme has letters b, u, g.
Chemistry meme has letters b, o, o, m.
Design meme has letters e, d, i, t, s.
If there is more than 1 possible answer, the earliest match should be chosen.

Note: letters are case-insensetive and should come in the order specified above.

Examples:
(Matching letters are surrounded by curly braces for readability.)

this is programmer meme {b}ecause it has b{ug}
this is also program{bu}r meme {g}ecause it has needed key word
this is {ed}s{i}gner meme cause i{t} ha{s} key word

this could {b}e chemistry meme b{u}t our{g}Gey word 'boom' is too late
    instead of
this could {b}e chemistry meme but {o}ur gey w{o}rd 'boo{m}' is too late
---------------------------------------------------------------------------
*/

// ============================== MY SOLUTION =============================

const memesorting = meme => {
  const regex = /((?<=.*b.*u.*)g)|((?<=.*b.*o.*o.*)m)|((?<=.*e.*d.*i.*t.*)s)/i;
  if (!(regex.test(meme))) return 'Vlad';
  else {
    let match = meme.toLowerCase().match(regex)[0];
    return match === 'm' ? 'Maxim' : match === 's' ? 'Danik' : 'Roma';
  }
}

console.log(memesorting('This is ed programmer i b o uomeme tu gs o ecause mit has bug')); //Maxim
console.log(memesorting('This could be chemistry meme but our gey word boom is too late')); //Roma
console.log(memesorting('This is b o programmer b meme ecause b om git has')); //Roma
console.log(memesorting('This is edsigner meme cause it has key word')); //Danik
console.log(memesorting('This is lala bu mem')); //Vlad
/* ===================== CODEWER BEST PRACTICE SOLUTIONS ==================

1.

--------------------------------- MY NOTES --------------------------------

*/