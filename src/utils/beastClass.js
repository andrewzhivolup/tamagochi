class Beast {

    constructor() {
        this._alive = true;
        this._hunger = 100;
        this._sleep = 100;
        this._purity = 100;
    }

    isAlive() {
        return this._alive;
    }

    die() {
        this._alive = false;
    }

    getHunger() {
        return this._hunger;
    }

    getSleep() {
        return this._sleep;
    }

    getPurity() {
        return this._purity;
    }

}

// Использование:
const beast = new Beast();

