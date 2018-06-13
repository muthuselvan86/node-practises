import fs from 'fs';

const file = './Public/data/test.txt';
let data = "",
    chunk,
    readStream = fs.createReadStream(file);

// readStream.on('data', (chunk) => {
//     data += chunk;
// });

readStream.on('readable', () => {
    while ((chunk = readStream.read()) !== null)
        data += chunk;
});

readStream.on('end', () => console.log(data));