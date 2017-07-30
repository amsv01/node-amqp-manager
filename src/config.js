'use strict';

const
  _configurations = Symbol('configuration');

class Configure {
  constructor() {
    this[_configurations] = {};
  }
}
module.exports = new Configure();
