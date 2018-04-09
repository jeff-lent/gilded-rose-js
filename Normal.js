class Normal {
    constructor(quality, daysRemaining) {
        this.quality = quality;
        this.daysRemaining = daysRemaining;
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