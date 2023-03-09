
let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result")


formElement.addEventListener("submit", (event) => { event.preventDefault();console.log("formlarz wysłany")

let amount = +amountElement.value;
let currency = currencyElement.value;
let result;

let rateEUR = 4.42;
let rateGBP = 4.93;
let rateUSD = 3.90;

switch (currency)
{

    case "EUR":
        result = amount / rateEUR;
        break;

    case "GBP":
        result = amount / rateGBP;
        break;
    case "USD":
        result = amount / rateUSD;
        break;
}

resultElement.innerHTML = `Wynik: ${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`

});