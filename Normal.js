const Item = require('./Item');

class Normal extends Item {
    constructor(quality, daysRemaining) {
        super(quality, daysRemaining);
    }

    static get name() {
        return 'normal';
    }

    tick() {
        this.daysRemaining--;
        if (this.quality === 0) return;
        this.quality--;
        if (this.daysRemaining < 0) this.quality--;
    }
}

module.exports = Normal;