import fs from 'fs';
import zlib from 'zlib';

let rStream = fs.createReadStream('./Public/data/test.txt.gz'),
    unzip = zlib.createGunzip();

rStream
    .pipe(unzip)
    .pipe(process.stdout);
