class BasicItemUpdater {
  /**
   * Create an object that handles the update logic of an Item
   * @param {object} item An object with quality, name and sellIn properties
   */
  constructor(item) {
    this.item = item;
  }

  /** Update item */
  update() {
    this.updateQuality();
    this.item.sellIn -= 1;
  }

  /** Update Quality of item */
  updateQuality() {
    const newQuality = this.getNewQuality();
    if (newQuality > 50) return (this.item.quality = 50);
    if (newQuality < 0) return (this.item.quality = 0);
    this.item.quality = newQuality;
  }

  /** Calculate the new quality returns a number */
  getNewQuality() {
    return this.item.quality + 1 * this.getUpdateRatio();
  }

  /** Returns a value by how much the quality should be updated */
  getUpdateRatio() {
    if (this.item.sellIn <= 0) return -2;
    return -1;
  }
}

module.exports = BasicItemUpdater;
