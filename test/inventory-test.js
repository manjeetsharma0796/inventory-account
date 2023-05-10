const { describe, it } = require('node:test');
const { deepStrictEqual } = require('assert');
const { Inventory } = require('../src/inventory.js');

describe('inventory', function () {
  describe('value', function () {
    it('Should have an empty inventory of department as nothing is added', function () {
      const ICU = new Inventory();

      deepStrictEqual(ICU.value(), {});
    });
  });

  describe('stock', function () {
    it('Should stock an item with quantity', function () {
      const ICU = new Inventory();
      ICU.stock('syline', 30);

      deepStrictEqual(ICU.value(), { syline: 30 });
    });

    it('Should increase the quantity of an existing item', function () {
      const ICU = new Inventory();
      ICU.stock('ibuprofen', 1);

      deepStrictEqual(ICU.value(), { ibuprofen: 1 });

      ICU.stock('ibuprofen', 2);
      deepStrictEqual(ICU.value(), { ibuprofen: 3 });
    });
  });

  describe('destock', function () {
    it('Should destock an item, when quantity is less or equal to its stock', function () {
      const ICU = new Inventory();
      ICU.stock('syline', 30);
      ICU.destock('syline', 10);

      deepStrictEqual(ICU.value(), { syline: 20 });
    });

    it('Should not destock an item, when quantity is greater than its stock', function () {
      const ICU = new Inventory();
      ICU.stock('syline', 30);
      ICU.destock('syline', 40);

      deepStrictEqual(ICU.value(), { syline: 30 });
    });
  });

  describe('loadItems', function () {
    it('Should read and load invnetory with set of item and quantity', function () {
      const ICU = new Inventory();
      ICU.loadItems({ para: 10, campol: 40 });

      deepStrictEqual(ICU.value(), { para: 10, campol: 40 });
    });
  });
});