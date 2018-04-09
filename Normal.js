class Normal {
    constructor(name, quality, daysRemaining) {
        this.name = name;
        this.quality = quality;
        this.daysRemaining = daysRemaining;
    }

    tick() {
        this.daysRemaining--;
        if (this.quality === 0) return;
        this.quality--;
        if (this.daysRemaining < 0) this.quality--;
    }
}

module.exports = Normal;