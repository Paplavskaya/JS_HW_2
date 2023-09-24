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
