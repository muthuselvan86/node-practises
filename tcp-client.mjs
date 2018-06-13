import net from 'net';

let client = net.connect({port:8000},()=>{
    console.log(`client : client connected`);
    client.write(`this is a request`);
});

client.on('data', (data)=>{
    console.log(`client : srever response is ${data}`);
    client.end();
});

client.on('end',()=>{
    console.log(`client: disconnected!`);
});