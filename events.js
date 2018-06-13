let Person = require('./lib/Person');

let man = new Person("Muthu");

man.on('hello', function(wish){
    console.log(`${this.name} says ${wish}`);
});

man.emit('hello', "Good Morning!");


// emitter = new events.EventEmitter();

// emitter.on('customEmit', (msg, status) => {
//     console.log(`${status} : ${msg} `);
// });

// emitter.emit('customEmit', "Success", 200);