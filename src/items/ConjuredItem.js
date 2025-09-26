const BaseItem = require('./BaseItem');

class ConjuredItem extends BaseItem {
    updateQualityBeforeExpiration() {
        this.decreaseQuality(2);
    }

    handlePostExpiration() {
        this.decreaseQuality(2);
    }
}

module.exports = ConjuredItem;
