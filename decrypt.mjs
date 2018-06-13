import fs from 'fs';
import crypto from 'crypto';

let rStream = fs.createReadStream('./Public/data/test1.encrypted'),
    password = new Buffer('passwords'),
    aes = crypto.createDecipher('aes-256-cbc', password);

rStream 
    .pipe(aes)
    .pipe(process.stdout)
    .on('error', (err)=>console.log(`Error ${err}`));