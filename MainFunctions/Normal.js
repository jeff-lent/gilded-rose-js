const GildedRose = require('./GildedRose');

class Normal extends GildedRose {
  constructor(name, quality, daysRemaining) {
    super(name, quality, daysRemaining);
  }

  norm_tick() {
    this.daysRemaining -= 1;
    if (this.quality > 0) {
      this.quality -= 1;
    }
    if (this.daysRemaining <= 0 && this.quality > 0) {
      this.quality -= 1;
    }
  }

  getQuality() {
    return this.quality;
  }

  getDaysRemaining() {
    return this.daysRemaining;
  }
}

module.exports = Normal;
