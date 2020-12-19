const BasicItemUpdater = require("./basic_item_updater");

class AgedBrieUpdater extends BasicItemUpdater {
  getUpdateRatio() {
    return 1;
  }
}

module.exports = AgedBrieUpdater;
