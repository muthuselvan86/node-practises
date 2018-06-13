var spawn = require('child_process').spawn;

var cp = spawn("node" , ["repeat"]);

cp.stdout.on('data',(data)=>{
    console.log(`STDOUT DATA: ${data} \n`);
});

cp.on('close', ()=>{
    console.log(`closing the connection \n`);
    process.exit();
});

setTimeout(()=>{
    cp.stdin.write("stop");
},5000);

