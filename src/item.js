class Item {
  /**
   * Create an Item
   * @param {string} name The name of the Item
   * @param {number} sellIn How many days left before quality update ratio changes
   * @param {number} quality The quality of the item can't be less than 0
   */
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

module.exports = Item;
