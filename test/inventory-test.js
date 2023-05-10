const { describe, it } = require('node:test');
const { deepStrictEqual } = require('assert');
const { Inventory } = require('../src/inventory.js');

describe('inventory', function () {
  it('Should create an empty inventory of ICU', function () {
    const ICU = new Inventory();

    deepStrictEqual(ICU.value(), {});
  });

  it('Should stock an item with quantity in ICU inventory', function () {
    const ICU = new Inventory();
    ICU.stock('syline', 30)

    deepStrictEqual(ICU.value(), { syline: 30 });
  });

  it('Should destock an item with given quantity in ICU inventory', function () {
    const ICU = new Inventory();
    ICU.stock('syline', 30);
    ICU.destock('syline', 10);

    deepStrictEqual(ICU.value(), { syline: 20 });
  });

  it('Should read and load invnetory with set of item and quantity', function () {
    const ICU = new Inventory();
    ICU.loadItems({ para: 10, campol: 40 });

    deepStrictEqual(ICU.value(), { para: 10, campol: 40 });
  })
});