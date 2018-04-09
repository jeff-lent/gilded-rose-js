const Item = require('./Item');

class Passes extends Item {
    constructor(quality, daysRemaining) {
        super(quality, daysRemaining);
    }

    static get name() {
        return 'Backstage passes to a TAFKAL80ETC concert';
    }

    tick() {
        this.daysRemaining--;
        this.quality = Math.min(50, this.quality + 3);
        if (this.daysRemaining < 0) this.quality = 0;
    }
}

module.exports = Passes;