const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
  log(msg) {
    this.emit('message', { id: uuid.v4(), msg });
  }
}

// Commented to use index.js
// module.exports = Logger;

// Files moved from index.js
const Logger = require('./logger');
const logger = new Logger();
logger.on('message', (data) => console.log('Called listener', data));
logger.log('Hello there');
