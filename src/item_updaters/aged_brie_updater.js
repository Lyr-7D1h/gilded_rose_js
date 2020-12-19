const BasicItemDecayer = require("./basic_item_updater");

class AgedBrieUpdater extends BasicItemDecayer {
  getUpdateRatio() {
    return 1;
  }
}

module.exports = AgedBrieUpdater;
