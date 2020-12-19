class BasicItemUpdater {
  constructor(item) {
    this.item = item;
  }

  update() {
    this.updateQuality();
    this.item.sellIn -= 1;
  }

  updateQuality() {
    const newQuality = this.getNewQuality();
    if (newQuality > 50) return (this.item.quality = 50);
    if (newQuality < 0) return (this.item.quality = 0);
    this.item.quality = newQuality;
  }

  getNewQuality() {
    return this.item.quality + 1 * this.getUpdateRatio();
  }

  getUpdateRatio() {
    if (this.item.sellIn <= 0) return -2;
    return -1;
  }
}

module.exports = BasicItemUpdater;
