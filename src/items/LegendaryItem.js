const BaseItem = require('./BaseItem');

class LegendaryItem extends BaseItem {
    tick() {
        return this;
    }

    updateQualityBeforeExpiration() {}

    handlePostExpiration() {}

    updateSellIn() {}

    get minQuality() {
        return this.quality;
    }

    get maxQuality() {
        return this.quality;
    }
}

module.exports = LegendaryItem;
