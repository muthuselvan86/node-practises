import fs from 'fs';

const readFile = './Public/data/test.txt',
    writeFile = './Public/data/test1.txt';

let readStream = fs.createReadStream(readFile),
    writeStream = fs.createWriteStream(writeFile);

//option:1

// readStream.setEncoding('utf8');
// readStream.on('data', (chunk) => {
//     writeStream.write(chunk);
// });

//Option: 2
readStream.pipe(writeStream);