const Normal = require('./Normal');

class Passes extends Normal {
    constructor(name, quality, daysRemaining) {
        super(name, quality, daysRemaining);
    }

    tick() {
        this.daysRemaining--;
        this.quality = Math.min(50, this.quality + 3);
        if (this.daysRemaining < 0) this.quality = 0;
    }
}

module.exports = Passes;