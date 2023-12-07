// Generate a random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

function checkGuess() {
    const userGuess = document.getElementById("user-input").value;
    const resultMessage = document.getElementById("result");
    attempts++;

    if (userGuess == secretNumber) {
        resultMessage.textContent = `Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`;
        resultMessage.style.color = "green";
        disableInputAndButton();
    } else if (userGuess < secretNumber) {
        resultMessage.textContent = "Too low! Try again.";
        resultMessage.style.color = "red";
    } else {
        resultMessage.textContent = "Too high! Try again.";
        resultMessage.style.color = "red";
    }
}

function disableInputAndButton() {
    document.getElementById("user-input").disabled = true;
    document.querySelector("button").disabled = true;
}
