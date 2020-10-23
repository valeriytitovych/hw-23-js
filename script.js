let userAge = prompt('Введіть, будь ласка, Ваш вік');

if (userAge < 12) {
    console.log('Дитина');
} else if (userAge < 18) {
    console.log('Підліток');
} else if (userAge < 60) {
    console.log('Дорослий');
} else {
    console.log('Пенсіонер');
}

let userNumber = prompt('Введіть, будь ласка, число від 1 до 0', 0);

if (userNumber === '0') {
    console.log(')');
} else if (userNumber === '1') {
    console.log('!');
} else if (userNumber === '2') {
    console.log('@');
} else if (userNumber === '3') {
    console.log('#');
} else if (userNumber === '4') {
    console.log('$');
} else if (userNumber === '5') {
    console.log('%');
} else if (userNumber === '6') {
    console.log('^');
} else if (userNumber === '7') {
    console.log('&');
} else if (userNumber === '8') {
    console.log('*');
} else if (userNumber === '9') {
    console.log('(');
} else {
    console.log('Число має бути від 0 до 9');
}

var tripleDigitNumber = prompt('Введіть, будь ласка, тризначне число', 0);
var number1 = parseInt(tripleDigitNumber / 100);
var number2 = parseInt(tripleDigitNumber / 10) % 10;
var number3 = tripleDigitNumber % 10;

if (number1 === number2 || number2 === number3 || number1 === number3) {
    console.log('Знайдено співпадіння цифр у числі, shame on you!');
} else {
    console.log('Маєте багату фантазію, співпадінь не знайддено!');
}

var userYear = prompt('Введіть, будь ласка, рік', 0);

if (userYear % 400 === 0 || userYear % 4 === 0 && userYear % 100 !== 0) {
    console.log('Чудовоий рік був, до речі він високосний!');
} else {
    console.log('Цей рік не високосний, але теж видався нічого!');
}

var fiveDigitNumber = prompt('Введіть, будь ласка, п\'ятизначне число', 0);

if (fiveDigitNumber === fiveDigitNumber.split('').reverse('').join('')) {
    console.log('Кмітливо, це число - паліндром!');
} else {
    console.log('Дане число не паліндром...');
}

let currencyAmount = prompt('Скільки баксів маєте на конвертацію?', 0);
let currencyRate = prompt('Введіть число валюти, яку купуємо? EUR = 1, UAH = 2, AZN = 3', 0);

switch (currencyRate) {
    case '1':
        console.log(currencyAmount * 0.85 + 'EUR');
        break;
    case '2':
        console.log(currencyAmount * 28.78 + 'UAH');
        break;
    case '3':
        console.log(currencyAmount * 1.69 + 'AZN');
        break;
}

var discountSum = prompt('Для розрахунку знижки введіть, будь ласка, суму покупки, грн.', 0);

if (discountSum >= 200 && discountSum < 300) {
    console.log('Сума знижки' + ' ' + discountSum * 0.03);
} else if (discountSum >= 300 && discountSum < 500) {
    console.log('Сума знижки' + ' ' + discountSum * 0.05);
} else if (discountSum >= 500) {
    console.log('Сума знижки' + ' ' + discountSum * 0.07);
} else {
    console.log('Недостатня сума покупки для отримання знижки');
}

var circle = prompt('Введіть, будь ласка, довжину окружності круга', 0);
var square = prompt('Введіть, будь ласка, периметр квадрата', 0);

if (circle / 3.14 <= square / 4) {
    console.log('Такий круг гарно впишеться у вказаний квадрат')
} else {
    console.log('Рекомендуємо взяти менший круг');
}

let choise = prompt('Which way shoul i go: right, where\'s nothing left or left, where\'s nothing right? \n 1 - Right 2 - Left 3 - You should listen to your heart');
let reson = prompt('Is there any reason to live in this World? \n 1 - There\'s no reason if life is not eternal... \n  2 - Don\'t seek a reason - create it \n 3 - I don\'t think there\'s right answer');
let king = prompt('In chess everyoue protects a king. If life was a chess, who would be a king to protect? \n 1 - President 2 - Oligarch 3 - Next generation');
let score = 0;

if (choise == 1)
    score += 2;
if (reson == 2)
    score += 2;
if (king == 3)
    score += 2;
console.log('Your score is ' + score);

let date = prompt('Введіть дату у форматі - ХХ-ХХ-ХХХХ');
date = date.split('-');

let oldDate = new Date(date[2], date[1] - 1, date[0]);

oldDate.setDate(oldDate.getDate() + 1);
console.log(oldDate);