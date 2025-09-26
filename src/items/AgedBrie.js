const BaseItem = require('./BaseItem');

class AgedBrie extends BaseItem {
    updateQualityBeforeExpiration() {
        this.increaseQuality();
    }

    handlePostExpiration() {
        this.increaseQuality();
    }
}

module.exports = AgedBrie;
