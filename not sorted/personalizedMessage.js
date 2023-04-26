/*
========================= TASK ===========================
Create a function that gives a personalized greeting.
This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	                 return
name equals owner	    'Hello boss'
otherwise	            'Hello guest'
-----------------------------------------------------------

Создайте функцию, которая выдает персонализированное приветствие.
Эта функция принимает два параметра: имя и владелец.

Используйте условные выражения, чтобы вернуть правильное сообщение:

case                    return
имя равно владельцу     «Привет, босс»
иначе                   «Привет, гость»
*/

//===================== MY SOLUTION =======================

function greet (name, owner) {
  return name === owner ? 'Hello boss' : 'Hello guest';
}

//console.log(greet('Daniel', 'Daniel'));

