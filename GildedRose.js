const Normal = require('./Normal');
const Brie = require('./Brie');
const Sulfuras = require('./Sulfuras');
const Passes = require('./Passes');

class GildedRose {

    constructor(name, quality, daysRemaining) {
        this._name = name;
        this._quality = quality;
        this._daysRemaining = daysRemaining;
    }

    get name() {
        if(this.item) return this.item.name;
        return this._name;
    }

    get quality() {
        if(this.item) return this.item.quality;
        return this._quality;
    }

    get daysRemaining() {
        if(this.item) return this.item.daysRemaining;
        return this._daysRemaining;
    }

    normalTick() {
        this.item = new Normal(this._name, this._quality, this._daysRemaining);
        this.item.tick();
    }

    brieTick() {
        this.item = new Brie(this._name, this._quality, this._daysRemaining);
        this.item.tick();
    }

    passTick() {
        this.item = new Passes(this._name, this._quality, this._daysRemaining);
        this.item.tick();
    }

    sulfurasTick() {
        this.item = new Sulfuras(this._name, this._quality, this._daysRemaining);
        this.item.tick();
    }

    tick() {
        if (this._name === 'normal') return this.normalTick();
        if (this._name === 'Aged Brie') return this.brieTick();
        if (this._name === 'Backstage passes to a TAFKAL80ETC concert') return this.passTick();
        if (this._name === 'Sulfuras, Hand of Ragnaros') return this.sulfurasTick();
    }
}

module.exports = GildedRose;