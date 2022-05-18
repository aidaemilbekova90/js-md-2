/* 1. Дана строка **'ddd@bbb@ccc'**. Замените все **@** на **'!'** */

let string = "ddd@bbb@ccc";
let changeStr = string.replaceAll("@", "!");
console.log(changeStr);
