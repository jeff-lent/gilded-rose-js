const Normal = require('./Normal');
const Brie = require('./Brie');
const Sulfuras = require('./Sulfuras');
const Passes = require('./Passes');

const itemTypes = [Normal, Brie, Sulfuras, Passes];

class GildedRose {

    constructor(name, quality, daysRemaining) {
        this.item = this.classFor(name, quality, daysRemaining);
    }

    classFor(name, quality, daysRemaining) {
        const Item = itemTypes.find(i => i.name === name);
        return new Item(quality, daysRemaining);
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