import net from 'net';

let server = net.createServer((ser) => {
    console.log(`server : client connected`)
    ser.on('data', (data)=>console.log(`server: ${data.toString()}`));
    ser.on('close', ()=>console.log(`srever: client disconnected`));
    ser.write("server: This is response!!");
});

server.listen(8000,()=>console.log(`server started`));