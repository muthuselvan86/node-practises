const eventEmitter = require('events').EventEmitter,
    util = require('util');

let Person = function(name){
    this.name = name;
};

util.inherits(Person, eventEmitter);

module.exports = Person;