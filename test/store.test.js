const Shop = require("../src/shop");
const Item = require("../src/item");

describe("Shop", () => {
  let shop;

  const createShop = (...items) => {
    return new Shop(items);
  };

  const createItem = (name = "Test", sellIn = 5, quality = 5) => {
    return new Item(name, sellIn, quality);
  };

  const getQuality = (index = 0) => shop.items[index].quality;
  const getName = (index = 0) => shop.items[index].name;
  const getSellIn = (index = 0) => shop.items[index].sellIn;

  describe("Basic items", () => {
    it("names stays the same", () => {
      shop = createShop(createItem("This is an test"));
      shop.updateQuality();
      expect(getName()).toBe("This is an test");
    });

    it("degrades over time", () => {
      shop = createShop(createItem());
      const qualityBefore = getQuality();
      const sellInBefore = getSellIn();

      shop.updateQuality();

      expect(getSellIn()).toBe(sellInBefore - 1);
      expect(getQuality()).toBe(qualityBefore - 1);
    });

    it("degrades 2 times faster when over time", () => {
      shop = createShop(createItem("Test", 0, 10));
      const qualityBefore = getQuality();
      const sellInBefore = getSellIn();

      shop.updateQuality();
      expect(getQuality()).toBe(qualityBefore - 2);
      expect(getSellIn()).toBe(sellInBefore - 1);
    });

    it("quality can't be less than 0", () => {
      shop = createShop(createItem("Test", 1, 0));
      shop.updateQuality();
      expect(getQuality()).toBe(0);
      shop.updateQuality();
      expect(getQuality()).toBe(0);
    });
  });

  describe("Aged brie", () => {
    it("increases in quality over time", () => {
      shop = createShop(createItem("Aged Brie", 5, 5));
      const qualityBefore = getQuality();

      shop.updateQuality();
      expect(getQuality()).toBe(qualityBefore + 1);
    });

    it("quality does not go above 50", () => {
      shop = createShop(createItem("Aged Brie", 5, 49));
      const qualityBefore = getQuality();

      shop.updateQuality();
      expect(getQuality()).toBe(qualityBefore + 1);

      shop.updateQuality();

      expect(getQuality()).toBe(qualityBefore + 1);
    });
  });

  describe("Sulfuras", () => {
    beforeEach(() => {
      shop = createShop(createItem("Sulfuras, Hand of Ragnaros", 5, 80));
    });

    it("does not degrade over time", () => {
      const qualityBefore = getQuality();
      const sellInBefore = getSellIn();

      shop.updateQuality();

      expect(getQuality()).toBe(qualityBefore);
      expect(getSellIn()).toBe(sellInBefore);
    });
  });

  describe("Backstage passes", () => {
    it("quality does not go above 50", () => {
      shop = createShop(
        createItem("Backstage passes to a TAFKAL80ETC concert", 5, 49)
      );
      const qualityBefore = getQuality();

      shop.updateQuality();
      expect(getQuality()).toBe(qualityBefore + 1);
    });

    it("quality drops to 0 after sellIn is less than 0", () => {
      shop = createShop(
        createItem("Backstage passes to a TAFKAL80ETC concert", 0, 8)
      );

      shop.updateQuality();
      expect(getSellIn()).toBe(-1);
      expect(getQuality()).toBe(0);
    });

    it("quality increases by 1 when sellIn is bigger than 10", () => {
      shop = createShop(
        createItem("Backstage passes to a TAFKAL80ETC concert", 11, 8)
      );

      shop.updateQuality();

      expect(getSellIn()).toBe(10);
      expect(getQuality()).toBe(9);
    });

    it("quality increases by 2 when sellIn is 10 or less", () => {
      shop = createShop(
        createItem("Backstage passes to a TAFKAL80ETC concert", 10, 8)
      );

      shop.updateQuality();
      expect(getSellIn()).toBe(9);
      expect(getQuality()).toBe(10);
    });

    it("quality increases by 3 when sellIn is 3 or less", () => {
      shop = createShop(
        createItem("Backstage passes to a TAFKAL80ETC concert", 3, 5)
      );

      shop.updateQuality();

      expect(getSellIn()).toBe(2);
      expect(getQuality()).toBe(8);
    });
  });

  describe("Conjured", () => {
    it("degrades 2 times as fast", () => {
      shop = createShop(createItem("Conjured"));
      const qualityBefore = getQuality();

      shop.updateQuality();

      expect(getQuality()).toBe(qualityBefore - 2);
    });
  });
});
