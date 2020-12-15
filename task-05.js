// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов
 
let price;
let country;

let userCountry = prompt("Укажите страну для доставки товара?");
const normalCountry = userCountry.toLowerCase();
if (userCountry !== null) {
    switch (userCountry) {
        case "Китай": 
            country = "Китай";
            price = 100;
            break;
        
        case "Чили": 
            country = "Чили";
            price = 250;
            break;
        
        case "Австралия": 
            country = "Австралия";
            price = 170;
            break;
        
        case "Индия": 
            country = "Индия";
            price = 80;
            break;
        
        case "Ямайка": 
            country = "Ямайка";
            price = 120;
            break;
        
        default:
            country = 'вашей стране не доступна';
            price = 0;
    }
}
alert (`Доставка в ${country} будет стоить ${price} кредитов`);