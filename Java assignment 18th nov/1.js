const prompt = require("prompt-sync")();

let price = Number(prompt("Enter the price of the item: "));

if (price >= 100) {
    let final_price = price - (20 / 100 * price);
    console.log("Final Price:", final_price);
} else if (price >= 50 && price < 100) {
    let final_price = price - (10 / 100 * price);
    console.log("Final Price:", final_price);
} else {
    console.log("No discount");
}