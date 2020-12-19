const BasicItemUpdater = require("./basic_item_updater");

class ConjuredUpdater extends BasicItemUpdater {
  getUpdateRatio() {
    return -2;
  }
}

module.exports = ConjuredUpdater;
