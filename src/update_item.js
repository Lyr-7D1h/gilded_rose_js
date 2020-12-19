const AgedBrieUpdater = require("./item_updaters/aged_brie_updater");
const BackstagePassesUpdater = require("./item_updaters/backstage_passes_updater");
const BasicItemUpdater = require("./item_updaters/basic_item_updater");
const ConjuredUpdater = require("./item_updaters/conjured_updater");
const SulfurasUpdater = require("./item_updaters/sulfuras_updater");

/** Classify item and update accordingly */
const updateItem = (item) => {
  const lowerCaseName = item.name.toLowerCase();

  let itemUpdater;
  if (lowerCaseName.includes("aged brie")) {
    itemUpdater = new AgedBrieUpdater(item);
  } else if (lowerCaseName.includes("sulfuras")) {
    itemUpdater = new SulfurasUpdater(item);
  } else if (lowerCaseName.includes("backstage passes")) {
    itemUpdater = new BackstagePassesUpdater(item);
  } else if (lowerCaseName.includes("conjured")) {
    itemUpdater = new ConjuredUpdater(item);
  } else {
    itemUpdater = new BasicItemUpdater(item);
  }

  itemUpdater.update();
};

module.exports = updateItem;
