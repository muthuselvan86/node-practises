// ** Node core modules **
const path = require('path'), // deals with filepath
    util = require('util'),
    v8 = require('v8');

// using path
console.log(path.basename(__filename));
console.log(path.join(__dirname, "js", "test"));

// using utils
util.log("test");

console.log(v8.getHeapStatistics());