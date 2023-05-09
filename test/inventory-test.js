const {describe, it} = require('node:test');
const {strictEqual} = require('assert');
const {rename} = require('../src/inventory.js');

describe('inventory', function() {
  it('Should give true', function() {
    strictEqual(rename(), true);
  });
});