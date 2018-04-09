const Normal = require('./Normal');

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
        this._daysRemaining--;
        if (this._quality >= 50) return;
        this._quality++;
        if (this._daysRemaining < 0) this._quality++;
    }

    passTick() {
        this._daysRemaining--;
        this._quality = Math.min(50, this._quality + 3);
        if (this._daysRemaining < 0) this._quality = 0;
    }

    sulfurasTick() {

    }

    tick() {
        if (this._name === 'normal') return this.normalTick();
        if (this._name === 'Aged Brie') return this.brieTick();
        if (this._name === 'Backstage passes to a TAFKAL80ETC concert') return this.passTick();
        if (this._name === 'Sulfuras, Hand of Ragnaros') return this.sulfurasTick();
    }
}

module.exports = GildedRose;