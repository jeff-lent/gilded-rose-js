const Normal = require('./Normal');

class Brie extends Normal {
    constructor(quality, daysRemaining) {
        super(quality, daysRemaining);
    }

    static get name() {
        return 'Aged Brie';
    }

    tick() {
        this.daysRemaining--;
        if (this.quality >= 50) return;
        this.quality++;
        if (this.daysRemaining < 0) this.quality++;
    }
}

module.exports = Brie;