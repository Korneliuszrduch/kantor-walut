{
    const onFormSubmit = (event) => {
        const amontElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        const amount = +amontElement.value;
        const currency = currencyElement.value;
        const result = calculateResult(currency, amount);

        event.preventDefault();
        console.log("przeliczono");
        upDateResultText(amount, result, currency);
    };
    
    const calculateResult = (currency, amount) => {
        const EURrate = 4.42;
        const USDrate = 3.90;
        const GBPrate = 4.93;

        switch (currency) {
            case "EUR":
                return amount / EURrate;

            case "USD":
                return amount / USDrate;

            case "GBP":
                return amount / GBPrate;
        }
    };

    const upDateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");

        resultElement.innerHTML = `Wynik: ${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
    };



    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();

};


