class Inventory {
  // #inventory

  constructor() {
    this.inventory = {};  
  };

  stock(item, quantity) {
    if(this.inventory[item] === undefined) {
      this.inventory[item] = quantity;
      return;
    }

    this.inventory[item] += quantity;
  };
  
  destock(item, quantity) {
    this.inventory[item] -= quantity;
  }
  
  loadItems(stockList) {
    for(const stock of Object.entries(stockList)) {
      const [item, quantity] = stock;
      this.stock(item, quantity);
    }
  };

  value() {
    return this.inventory;
  };
};

// class Account {
//   constructor(location, inventory) {
//     this[location] = inventory;
//   }
// }
exports.Inventory = Inventory;