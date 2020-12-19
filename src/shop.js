const updateItem = require("./update_item");

class Shop {
  /**
   * Create a shop
   * @constructor
   * @param {object[]} items All items of the shop
   */
  constructor(items = []) {
    this.items = items;
  }

  /**
   * Decrease SellIn for each item with one and update quality accordingly.
   * Returns updated items
   */
  updateQuality() {
    return this.items.forEach((item) => updateItem(item));
  }
}

module.exports = Shop;
