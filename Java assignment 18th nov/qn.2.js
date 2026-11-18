const prompt = require("prompt-sync")();

let hour = Number(prompt("Enter the hour of the day (0-23): "));

if (hour >= 5 && hour <= 11) {
    console.log("Good Morning");
} else if (hour >= 12 && hour <= 17) {
    console.log("Good Afternoon");
} else if (hour >= 18 && hour <= 21) {
    console.log("Good Evening");
} else {
    console.log("Good Night");
}