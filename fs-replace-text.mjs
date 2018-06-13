import fs from 'fs';
import jsonFile from './Public/data/sample.json'

const file = './Public/data/replace.txt';

console.log(`Data is :${JSON.stringify(jsonFile)}`);

fs.readFile(file, 'utf8', (err, data) => {
    if (err)
        return console.log(`${err}`);
    let replacedData = data.replace(/Dog/g, 'cat');
    console.log(`${replacedData}`);
    fs.writeFile(file, replacedData, (err) => {
        if (err)
            return console.log(`${err}`);
    })
});