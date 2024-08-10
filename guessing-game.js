function guessingGame() {
const target = Math.floor(Math.random() * 100);
let guesses = 0;
let gameOver = false;

return function(guess) {
    if (gameOver) {
        return "Game Over";
    }

    guesses++;
    
    if (guess > target) {
        return `Too high!`;
    } else if (guess < target) {
        return `Too low!`
    } else {
        gameOver = true;
        return `You win! You found ${guess} in ${guesses} guesses`;
    }
    };
}

module.exports = { guessingGame };
