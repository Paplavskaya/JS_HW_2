let lastName = prompt('Введите ваше имя');
let age = prompt('Введите ваш возраст');
let city = prompt('Введите город проживания');
let phone = prompt('Ваш телефон');
let email = prompt('Ваш email');
let company = prompt('В какой компании Вы работаете?');

document.write(`<h2>Меня зовут ${lastName}. Мне ${age} лет. Я проживаю в 
городе ${city} и работаю в компании ${company}. Мои контактные данные: 
${phone}, ${email}</h2>`)


let yearOfBirth = 2023 - age

document.write(`<h2>${lastName} родился в ${yearOfBirth} году</h2>`)