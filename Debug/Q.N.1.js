//  const displayMessage = () => {
//     let message = "Welcome to JavaScript!";
// }

// displayMessage();
// console.log(message);












//When console.log(message) runs outside the function,
//  JavaScript cannot find the variable.

// Declare message outside the function



let message = "Welcome to JavaScript!";

const displayMessage = () => {
    console.log(message);
}

displayMessage();