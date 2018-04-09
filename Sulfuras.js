const Normal = require('./Normal');

class Sulfuras extends Normal {
    constructor(name, quality, daysRemaining) {
        super(name, quality, daysRemaining);
    }

    tick() {
    }
}

module.exports = Sulfuras;