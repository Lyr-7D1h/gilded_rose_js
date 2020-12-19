const AgedBrieDecayer = require("./item_updaters/aged_brie_updater");
const BackstagePassesDecayer = require("./item_updaters/backstage_passes_updater");
const BasicItemDecayer = require("./item_updaters/basic_item_updater");
const ConjuredUpdater = require("./item_updaters/conjured_updater");
const SulfurasDecayer = require("./item_updaters/sulfuras_updater");

const updateItem = (item) => {
  const lowerCaseName = item.name.toLowerCase();

  let itemDecayer;
  if (lowerCaseName.includes("aged brie")) {
    itemDecayer = new AgedBrieDecayer(item);
  } else if (lowerCaseName.includes("sulfuras")) {
    itemDecayer = new SulfurasDecayer(item);
  } else if (lowerCaseName.includes("backstage passes")) {
    itemDecayer = new BackstagePassesDecayer(item);
  } else if (lowerCaseName.includes("conjured")) {
    itemDecayer = new ConjuredUpdater(item);
  } else {
    itemDecayer = new BasicItemDecayer(item);
  }

  itemDecayer.update();
};

module.exports = updateItem;
