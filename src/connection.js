'use strict';

const
  amqp = require('amqplib');

const
  _connection = Symbol('connection');

class Connection {
  constructor() {
    this[_connection] = null;
  }

  get connections() {
    return this[_connection];
  }

  assertConnection(url, socketOptions) {
    return amqp.connect(url, socketOptions);
  }
}

module.exports = new Connection();
