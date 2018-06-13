import fs from 'fs';
import path from 'path';

export const start = () => {

    let content;

    try {
        content = fs.readFileSync('./Public/index.html', 'utf-8');
    } catch (error) {
        content = `<h1> Error Reading content! ${error} </h1>`;
    }

    return content;

    // fs.readFile('../Public/index.html', (err, data) => {

    //     if (err)
    //         return `<h4>Error reading the content ${err}</h4>`;
    //     return data;
    // });
};

export const login = () => {
    console.log(`Request Handler : 'login' called`);
    return "Handler: login called!!";
};