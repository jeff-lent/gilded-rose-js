const Item = require('./Item');

class Sulfuras extends Item {
    constructor(quality, daysRemaining) {
        super(quality, daysRemaining);
    }

    static get name() {
        return 'Sulfuras, Hand of Ragnaros';
    }
}

module.exports = Sulfuras;