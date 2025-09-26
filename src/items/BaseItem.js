class BaseItem {
    constructor({ name, quality, daysRemaining }) {
        this.name = name;
        this.quality = quality;
        this.daysRemaining = daysRemaining;
    }

    tick() {
        this.updateQualityBeforeExpiration();
        this.updateSellIn();
        if (this.isExpired()) {
            this.handlePostExpiration();
        }
        return this;
    }

    updateQualityBeforeExpiration() {
        this.decreaseQuality();
    }

    handlePostExpiration() {
        this.decreaseQuality();
    }

    updateSellIn() {
        this.daysRemaining -= 1;
    }

    isExpired() {
        return this.daysRemaining < 0;
    }

    increaseQuality(amount = 1) {
        this.quality = Math.min(this.maxQuality, this.quality + amount);
    }

    decreaseQuality(amount = 1) {
        this.quality = Math.max(this.minQuality, this.quality - amount);
    }

    get minQuality() {
        return 0;
    }

    get maxQuality() {
        return 50;
    }
}

module.exports = BaseItem;
