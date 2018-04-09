const Normal = require('./Normal');

class Brie extends Normal {
    constructor(name, quality, daysRemaining) {
        super(name, quality, daysRemaining);
    }

    tick() {
        this.daysRemaining--;
        if (this.quality >= 50) return;
        this.quality++;
        if (this.daysRemaining < 0) this.quality++;
    }
}

module.exports = Brie;