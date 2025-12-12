const from = document.getElementById("from");
const to = document.getElementById("to");
const result = document.getElementById("result");
let rates = {};

// Fetch live exchange rates
fetch("https://api.exchangerate-api.com/v4/latest/USD")
    .then(res => res.json())
    .then(data => {
        rates = data.rates;
        const currencies = Object.keys(rates);

        currencies.forEach(curr => {
            from.innerHTML += `<option value="${curr}">${curr}</option>`;
            to.innerHTML += `<option value="${curr}">${curr}</option>`;
        });

        from.value = "USD";
        to.value = "INR";
    });

function convert() {
    let amount = document.getElementById("amount").value;

    if (amount === "" || amount <= 0) {
        result.innerText = "Please enter a valid amount!";
        return;
    }

    let fromRate = rates[from.value];
    let toRate = rates[to.value];

    let converted = (toRate / fromRate) * amount;

    result.innerText = `Converted Amount: ${converted.toFixed(2)} ${to.value}`;
}
