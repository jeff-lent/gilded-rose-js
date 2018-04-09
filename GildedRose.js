class GildedRose {

    constructor(name, quality, daysRemaining) {
        this.name = name;
        this.quality = quality;
        this.daysRemaining = daysRemaining;
    }

    normalTick() {
        this.daysRemaining--;
        if(this.quality === 0) return;
        this.quality--;
        if(this.daysRemaining < 0) this.quality--;
    }

    brieTick() {
        this.daysRemaining--;
        if(this.quality >= 50) return;
        this.quality++;
        if(this.daysRemaining < 0) this.quality++;
    }

    passTick() {
        this.daysRemaining--;
        this.quality = Math.min(50, this.quality + 3);
        if(this.daysRemaining < 0) this.quality = 0;
    }

    tick() {
        if(this.name === 'normal') return this.normalTick();
        if(this.name === 'Aged Brie') return this.brieTick();
        if(this.name === 'Backstage passes to a TAFKAL80ETC concert') return this.passTick();

        if (this.name !== 'Aged Brie' && this.name !== 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.quality > 0) {
                if (this.name !== 'Sulfuras, Hand of Ragnaros') {
                    this.quality -= 1;
                } else {
                    console.log();
                }
            } else {
                console.log();
            }
        } else {
            if (this.quality < 50) {
                this.quality += 1;
                if (this.name === 'Backstage passes to a TAFKAL80ETC concert') {
                    if (this.daysRemaining < 11) {
                        if (this.quality < 50) {
                            this.quality += 1;
                        } else {
                            console.log();
                        }
                    } else {
                        console.log();
                    }
                    if (this.daysRemaining < 6) {
                        if (this.quality < 50) {
                            this.quality += 1;
                        } else {
                            console.log();
                        }
                    } else {
                        console.log();
                    }
                } else {
                    console.log();
                }
            } else {
                console.log();
            }
        }
        if (this.name !== 'Sulfuras, Hand of Ragnaros') {
            this.daysRemaining -= 1;
        } else {
            console.log();
        }
        if (this.daysRemaining < 0) {
            if (this.name !== 'Aged Brie') {
                if (this.name !== 'Backstage passes to a TAFKAL80ETC concert') {
                    if (this.quality > 0) {
                        if (this.name !== 'Sulfuras, Hand of Ragnaros') {
                            this.quality -= 1;
                        } else {
                            console.log();
                        }
                    } else {
                        console.log();
                    }
                } else {
                    this.quality = this.quality - this.quality;
                }
            } else {
                if (this.quality < 50) {
                    this.quality += 1;
                } else {
                    console.log();
                }
            }
        } else {
            console.log();
        }
    }
}

module.exports = GildedRose;