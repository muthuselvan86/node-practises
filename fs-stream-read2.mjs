import fs from 'fs';

const file = './Public/data/test.txt';
let readStream = fs.createReadStream(file),
    data = "";

readStream.on('data',(chunk)=>{
    console.log(`received data : ${chunk}`);
    readStream.pause();
    setTimeout(function(){
        readStream.resume();
        console.log(`Data Resumed`);
    },3000);
});