'use strict';
/* ================================= TASK: Hide password from jdbc url=================================
Preconditions:

- non empty valid url
- password always next to string section password=
- assume password will not contain ampersand sign for sake of simplicity
- to make it more real it has non ASCII characters
- "password=" and "user" will occur only once
- empty passwords are not validated but best solutions take empty passwords into account

Example:
input:
jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?user=root&password=12345

output:
jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?user=root&password=*****

---------------------------------------------------------------------------


*/

// ============================== MY SOLUTION =============================

/*function hidePasswordFromConnection(urlString){
  const pattern = /((?<=d=)(\S|[^\x00-\x7F])*(?=&u))|(?<=d=)(\S|[^\x00-\x7F])*!/gi;
  let pass = urlString.match(pattern)[0].split('');
  let passInvisible  = pass.map(i => '*').join('');
  return urlString.replace(pattern, passInvisible);
}*/

function hidePasswordFromConnection(urlString) {
  return urlString.replace(/(?<=password=)([^&]*)/, (p) => '*'.repeat(p.length));
}

console.log(hidePasswordFromConnection('jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?user=root&password=mysql'));
/* ===================== CODEWER BEST PRACTICE SOLUTIONS ==================

1.
function hidePasswordFromConnection(urlString){
  return urlString.replace(/\bpassword=([^&]*)/, (m,p) => 'password=' + '*'.repeat(p.length))
}
--------------------------------- MY NOTES --------------------------------

*/