import fs from 'fs';
import zlib from 'zlib';

let gzip = zlib.createGzip(),
    rStream = fs.createReadStream('./Public/data/test.txt'),
    wStream = fs.createWriteStream('./Public/data/test.txt.gz');

rStream
    .pipe(gzip)
    .pipe(wStream)
    .on('finish', () => console.log(`Task completed!`));