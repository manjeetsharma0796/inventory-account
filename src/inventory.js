class Inventory {
  #inventory

  constructor() {
    this.#inventory = {};  
  };

  stock(item, quantity) {
    if(this.#inventory[item] === undefined) {
      this.#inventory[item] = quantity;
      return;
    }

    this.#inventory[item] += quantity;
    return;
  };
  
  destock(item, quantity) {
    this.#inventory[item] -= quantity;
    return;
  }
  
  value() {
    return this.#inventory;
  };
};

exports.Inventory = Inventory;