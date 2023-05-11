class Inventory {
  // #inventory

  constructor() {
    this.inventory = {};
  };

  #isItemNotPresent(item) {
    return !(item in this.inventory);
  }

  stock(item, quantity) {
    if (this.#isItemNotPresent(item)) {
      this.inventory[item] = 0;
    }

    this.inventory[item] += quantity;
  };

  destock(item, quantity) {
    if (this.inventory[item] >= quantity) {
      this.inventory[item] -= quantity;
    }
  };

  loadItems(stockList) {
    for (const stock of Object.entries(stockList)) {
      const [item, quantity] = stock;
      this.stock(item, quantity);
    }
  };

  getInventory() {
    return { ...this.inventory };
  };
};

exports.Inventory = Inventory;