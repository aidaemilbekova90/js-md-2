/*5. Составить скрипт, который запрашивает у пользователя ввести номер кредитной карты. Скрипт должен обработать полученный номер и показать на странице последние 4 цифры а остальные цифры карты должны заменены на *.
    
    **Пример: "Номер вашей карты: **********1245"**   */

let creditCard = prompt("введите номер кредитной карты");
let creditNumber = "*".repeat(creditCard.length - 4);
let result =
  creditNumber + creditCard.slice(creditCard.length - 4, creditCard.length);
alert("Номер вашей кредитной карты:${result}");

document.write(`<h1>Номер вашей кредитной карты: ${result}</h1>`);
