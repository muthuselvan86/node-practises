const evevtEmitter = require("events");

class eventClass extends evevtEmitter {
  constructor() {
    super();
    this.interval = "";
    this.count = 2;
  }

  increment() {
    let self = this;
    this.interval = setInterval(() => {
      if (self.count % 2 === 0) self.emit("even");
      self.count++;
    }, 300);
  }
}

let childClass = new eventClass();
childClass.on("even", function(){
    console.log(`Here is your number  : ${this.count}`);
    if(this.count && this.count > 6) 
        // console.log(this.interval);
        clearInterval(this.interval);
});
childClass.increment();
