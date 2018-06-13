const waiTime = 5000,
    interval = 500;
let currTime = 0,
percent = 0;

function printPercent(val){
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`completed percentage : ${val}%`);
}

// Keep firing in interva mean time.
const timeInterval = setInterval(() => {
    // console.log(`Interval Time : ${currTime}`)
    currTime += interval;
    percent = Math.floor(currTime/waiTime * 100);
    printPercent(percent);
}, interval);

// Fire once after the wait time.
setTimeout(() => {
    printPercent(100);
    process.stdout.write(`\n\n`);
    clearInterval(timeInterval);
}, waiTime);

printPercent(percent);