import fs from 'fs';
import crypto from 'crypto';

let rStream = fs.createReadStream('./Public/data/test.txt'),
    wStream = fs.createWriteStream('./Public/data/test1.encrypted'),
    password = new Buffer("password"),
    aes = crypto.createCipher('aes-256-cbc', password);

rStream
    .pipe(aes)
    .pipe(wStream)
    .on('finish', ()=>console.log(`Encryption completed!`));