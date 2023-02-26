class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return Math.round((this.max + this.min) / 2)
    }

    lower() {
        return this.max = this.guess()
    }

    greater() {
        return this.min = this.guess()
    }
}

module.exports = GuessingGame;
