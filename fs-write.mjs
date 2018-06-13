import fs from 'fs';

const file = './Public/data/test.txt';


fs.open(file, 'wx', (err,fd) => {
    if (err) {
        if (err.code === 'EEXIST')
            console.error(`File already exist`);
        else
            throw err;
    }

    fs.writeFile(file, "This is a test data", (err)=>{
        if(err)
            throw err;
        console.log(`Details updated successfully!`);
    });

});

