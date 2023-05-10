class Inventory {
  // #inventory

  constructor() {
    this.inventory = {};
  };

  stock(item, quantity) {
    if (item in this.inventory) {
      this.inventory[item] += quantity;
      return;
    }

    this.inventory[item] = quantity;
  };

  destock(item, quantity) {
    if (this.inventory[item] >= quantity) {
      this.inventory[item] -= quantity;
      return;
    }

    return 'Quantity limit exceeded or does not exist';
  };

  loadItems(stockList) {
    for (const stock of Object.entries(stockList)) {
      const [item, quantity] = stock;
      this.stock(item, quantity);
    }
  };

  value() {
    return { ...this.inventory };
  };
};

exports.Inventory = Inventory;