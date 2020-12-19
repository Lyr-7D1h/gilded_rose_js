const BasicItemDecayer = require("./basic_item_updater");

class BackstagePassesUpdater extends BasicItemDecayer {
  getNewQuality() {
    if (this.item.sellIn <= 0) return 0;
    return this.item.quality + 1 * this.getUpdateRatio();
  }

  getUpdateRatio() {
    if (this.item.sellIn < 0) return 0;
    if (this.item.sellIn <= 5) return 3;
    if (this.item.sellIn <= 10) return 2;
    return 1;
  }
}

module.exports = BackstagePassesUpdater;
