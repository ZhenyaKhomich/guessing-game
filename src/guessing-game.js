class GuessingGame {
    constructor() {
        this.min = null;
        this.max = null;
        this.currentGuess = null;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.guess;
    }

    guess() {
        this.currentGuess = Math.round((this.min + this.max) / 2);
        return this.currentGuess;
    }

    lower() {
        this.max = this.currentGuess - 0,5;
    }

    greater() {
        this.min = this.currentGuess + 0,5;
    }
}

module.exports = GuessingGame;
