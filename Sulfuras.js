const Normal = require('./Normal');

class Sulfuras extends Normal {
    constructor(quality, daysRemaining) {
        super(quality, daysRemaining);
    }

    static get name() {
        return 'Sulfuras, Hand of Ragnaros';
    }

    tick() {
    }
}

module.exports = Sulfuras;