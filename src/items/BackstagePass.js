const BaseItem = require('./BaseItem');

class BackstagePass extends BaseItem {
    updateQualityBeforeExpiration() {
        this.increaseQuality();

        if (this.daysRemaining <= 10) {
            this.increaseQuality();
        }

        if (this.daysRemaining <= 5) {
            this.increaseQuality();
        }
    }

    handlePostExpiration() {
        this.quality = this.minQuality;
    }
}

module.exports = BackstagePass;
