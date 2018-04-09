class Item {
    constructor(quality, daysRemaining) {
        this.quality = quality;
        this.daysRemaining = daysRemaining;
    }

    static get name() {
        throw new Error('Cannot instantiate abstract base class');
    }

    tick() {
    }
}

module.exports = Item;