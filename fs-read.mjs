import fs from 'fs';

const file = "./Public/data/test.txt";

fs.exists(file, (exist) => {
    if (exist) {
        fs.stat(file, (errStat, stats) => {
            fs.open(file, 'r', (errOpen, fd) => {
                let buffer = new Buffer(stats.size);
                fs.read(fd, buffer, 0, buffer.length, null, (errRead, bytesRead, buffer) => {
                    let data = buffer.toString('utf8', 0, buffer.length);
                    console.log(data);
                    fs.closeSync(fd);
                });
            });
        });
    }
    // console.log(`File status is ${exist}`);
});