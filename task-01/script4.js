/*Интернет-магазин занимается продажей различных сувениров и безделушек. Каждый сувенир весит 75 г, а безделушка – 112 г. Напишите программу, запрашивающую у пользователя количество тех и других покупок, после чего выведите на экран общий вес посылки.  */

const SOUVENIR_WEIGHT = 75;
const TRINKET_WEIGHT = 112;
let souvenir = Number(prompt("Введите количество сувениров"));
let trinket = Number(prompt("Введите количество безделушек"));
let totalWeight = SOUVENIR_WEIGHT * souvenir + TRINKET_WEIGHT * trinket;
document.write(`Общий вес посылки составляет : ${totalWeight} гр <br>`);
