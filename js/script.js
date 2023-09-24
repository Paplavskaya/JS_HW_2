// let lastName = prompt('Введите ваше имя');
// let age = prompt('Введите ваш возраст');
// let city = prompt('Введите город проживания');
// let phone = prompt('Ваш телефон');
// let email = prompt('Ваш email');
// let company = prompt('В какой компании Вы работаете?');

// document.write(`<h2>Меня зовут ${lastName}. Мне ${age} лет. Я проживаю в 
// городе ${city} и работаю в компании ${company}. Мои контактные данные: 
// ${phone}, ${email}</h2>`)


// let yearOfBirth = 2023 - age

// document.write(`<h2>${lastName} родился в ${yearOfBirth} году</h2>`)


let str = '123567'
let сhar1 = +str[0];
let сhar2 = +str[1];
let сhar3 = +str[2];
let сhar4 = +str[3];
let сhar5 = +str[4];
let сhar6 = +str[5];

let sum1 = сhar1 + сhar2 + сhar3;
let sum2 = сhar4 + сhar5 + сhar6;
sum1 === sum2 ? console.log('да') : console.log('нет');


let a = 1;
a > 0 ? console.log('Верно') : console.log('Неверно');


let a1 = 10;
let b1 = 2;

console.log(`Сумма: ${a1 + b1}`);
console.log(`Разность: ${a1 - b1}`);
console.log(`Произведение: ${a1 * b1}`);
console.log(`Частное: ${a1 / b1}`);
if ((a1 + b1) > 1 ) {
    console.log((a1 + b1) ** 2)
}


a1 > 2 && a1 < 11 || b1 >= 6 && b1 < 14 ? console.log('Верно') : console.log('Неверно');


let n = 35;
switch(true) {
    case n >= 0 && n < 15 :
        console.log('первая четверть');
        break;
    case n >= 15 && n < 30 :
        console.log('вторая четверть');
        break;
    case n >= 30 && n < 45 :
        console.log('третья четверть');
        break;
    case n >= 45 && n <= 59 :
            console.log('четвертая четверть');
            break;
    default: console.log('error');
}


let day = 20;

switch(true) {
    case day >= 1 && day <= 10 :
        console.log('первая декада');
        break;
    case day > 10 && day <= 20 :
        console.log('вторая декада');
        break;
    case day > 20 && day <= 31 :
        console.log('третья декада');
        break;
    default: console.log('error');
}


let day1 = 526;

let years = day1 / 365;
let months = day1 / 31;
let weeks = day1 / 7;
let hours = day1 * 24;
let minutes = hours * 60;
let seconds = minutes * 60;

if (day1 >= 365) {
    console.log(years);
}else {
    console.log(`Меньше года`);
}

if (day1 >= 31) {
    console.log(months);
}else {
    console.log(`Меньше месяца`);
}

if (day1 >= 7) {
    console.log(weeks);
}else {
    console.log(`Меньше недели`);
}

console.log(`${hours}, ${minutes}, ${seconds}`);


let days = 249;

let month = days / 31;
console.log(month)

switch(true) {
    case month >= 0 && month <= 2 || month > 11 && month <=12:
        console.log('зима');
        break;
    case month > 2 && month <= 5 :
        console.log('весна');
        break;
    case month > 5 && month <= 8 :
        console.log('лето');
        break;
    case month > 8 && month <= 11 :
            console.log('осень');
            break;
    default: console.log('error');
}
