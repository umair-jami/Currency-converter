#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    PKR: 278.08,
    EURO: 0.92,
    POUND: 0.79,
    AED: 3.67,
    LKR: 298.61,
    QAR: 3.64,
    YER: 250.45,
    JPY: 151.61,
    BHD: 0.38,
};
let userInput = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "From Currency :",
        choices: [
            "USD",
            "PKR",
            "EURO",
            "POUND",
            "AED",
            "LKR",
            "QAR",
            "YER",
            "JPY",
            "BHD",
        ],
    },
    {
        name: "to",
        message: "To Currency :",
        type: "list",
        choices: [
            "USD",
            "PKR",
            "EURO",
            "POUND",
            "AED",
            "LKR",
            "QAR",
            "YER",
            "JPY",
            "BHD",
        ],
    },
    {
        name: "amount",
        type: "number",
        message: "Enter Amount",
    },
]);
let fromAmount = currency[userInput.from];
let toAmount = currency[userInput.to];
let amount = userInput.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
