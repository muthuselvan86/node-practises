/**
 * A quick http server.
 */
const http = require('http');

// let myServer = http.createServer((req,res)=>{
//     res.writeHead(200);
//     res.write("My First server");
//     res.end();
// });
// myServer.listen(5000);

// Async Mode
let onReq = (req, res) => {
    console.log("request received!");
    let data = "";
    req.on('data', (val) => data += val).on('end', () => console.log(`Posted Data  : ${data}`))
    res.writeHead(200);
    res.write("Hello World!");
    res.end();
};

http.createServer(onReq).listen(5000);
console.log(`server started`);