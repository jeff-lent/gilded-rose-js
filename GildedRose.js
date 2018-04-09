class GildedRose {

    constructor(name, quality, daysRemaining) {
        this.name = name;
        this.quality = quality;
        this.daysRemaining = daysRemaining;
    }

    normalTick() {
        this.daysRemaining--;
        if (this.quality === 0) return;
        this.quality--;
        if (this.daysRemaining < 0) this.quality--;
    }

    brieTick() {
        this.daysRemaining--;
        if (this.quality >= 50) return;
        this.quality++;
        if (this.daysRemaining < 0) this.quality++;
    }

    passTick() {
        this.daysRemaining--;
        this.quality = Math.min(50, this.quality + 3);
        if (this.daysRemaining < 0) this.quality = 0;
    }

    sulfurasTick() {

    }

    tick() {
        if (this.name === 'normal') return this.normalTick();
        if (this.name === 'Aged Brie') return this.brieTick();
        if (this.name === 'Backstage passes to a TAFKAL80ETC concert') return this.passTick();
        if (this.name === 'Sulfuras, Hand of Ragnaros') return this.sulfurasTick();
    }
}

module.exports = GildedRose;