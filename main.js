#!usr/bin/env node 
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.76,
    INR: 74.57,
    PKR: 280,
    OMR: 0.38,
    BDT: 109.50,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from Currency",
        type: "list",
        choices: ["USD", "EUR", "INR", "PKR", "OMR", "BDT"]
    },
    { name: "to",
        type: "list ",
        message: "Enter To Currency",
        choices: ["USD", "EUR", "INR", "PKR", "OMR", "BDT"] },
    {
        name: "amount",
        message: "Enter your Amount",
        type: "number"
    }
]);
let fromAmount = currency[user_answer.from]; // EXCHANGE RATE 
let toAmount = currency[user_answer.to]; // EXCHANGE RATE 
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; // USD BASE CURRENCY 
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
