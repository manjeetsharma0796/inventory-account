const { describe, it } = require('node:test');
const { deepStrictEqual } = require('assert');
const { Inventory } = require('../src/inventory.js');

describe('inventory', function () {
  describe('getInventory', function () {
    it('Should have an empty inventory of department as nothing is added', function () {
      const icu = new Inventory();

      deepStrictEqual(icu.getInventory(), {});
    });
  });

  describe('stock', function () {
    it('Should stock an item with quantity', function () {
      const icu = new Inventory();
      icu.stock('syline', 30);

      deepStrictEqual(icu.getInventory(), { syline: 30 });
    });

    it('Should increase the quantity of an existing item', function () {
      const icu = new Inventory();
      icu.stock('ibuprofen', 1);

      deepStrictEqual(icu.getInventory(), { ibuprofen: 1 });

      icu.stock('ibuprofen', 2);
      deepStrictEqual(icu.getInventory(), { ibuprofen: 3 });
    });
  });

  describe('destock', function () {
    it('Should destock an item, when quantity is less or equal to its stock', function () {
      const icu = new Inventory();
      icu.stock('syline', 30);
      icu.destock('syline', 10);

      deepStrictEqual(icu.getInventory(), { syline: 20 });
    });

    it('Should not destock an item, when quantity is greater than its stock', function () {
      const icu = new Inventory();
      icu.stock('syline', 30);
      icu.destock('syline', 40);

      deepStrictEqual(icu.getInventory(), { syline: 30 });
    });
  });

  describe('loadItems', function () {
    it('Should read and load invnetory with set of item and quantity', function () {
      const icu = new Inventory();
      icu.loadItems({ para: 10, campol: 40 });

      deepStrictEqual(icu.getInventory(), { para: 10, campol: 40 });
    });
  });
});