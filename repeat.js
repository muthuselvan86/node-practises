let list = [
    "Hello Buddy",
    "How are you?",
    "How is your day",
    "Have a nice day"
];

let interval = setInterval(() => {
    let i = Math.floor(Math.random() * 4);
    process.stdout.write(`${list[i]} \n`)
}, 1000);

process.stdin.on('data', (data)=>{
    console.log(`data received : ${data.toString().trim()} `)
    clearInterval(interval);
    process.exit();
});