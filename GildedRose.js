const Normal = require('./Normal');
const Brie = require('./Brie');
const Sulfuras = require('./Sulfuras');
const Passes = require('./Passes');

class GildedRose {

    constructor(name, quality, daysRemaining) {
        this.item = this.classFor(name, quality, daysRemaining);
    }

    classFor(name, quality, daysRemaining) {
        if (name === Normal.name) return new Normal(quality, daysRemaining);
        if (name === Brie.name) return new Brie(quality, daysRemaining);
        if (name === Passes.name) return new Passes(quality, daysRemaining);
        if (name === Sulfuras.name) return new Sulfuras(quality, daysRemaining);
    }

    tick() {
        this.item.tick();
    }

    get name() {
        return this.item.name;
    }

    get quality() {
        return this.item.quality;
    }

    get daysRemaining() {
        return this.item.daysRemaining;
    }

}

module.exports = GildedRose;