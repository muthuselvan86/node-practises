import request from 'request';
import chalk from 'chalk';

let makeRequest = (method, url) => {
    let options = {
        method: method,
        url: url,
        headers: {
            'User-Agent': 'request'
        }
    };

    return new Promise((resolve, reject) => {
        request(options, (err, resp, body) => {
            if (err) {
                reject(err);
            } else {
                resolve(body);
            }
        });
    });
};

let failCallback = (err) => {
    console.log(`Error: ${err}`);
};

let successCallback = (data) => {
    console.log(`login : ${data.login}`);
};

makeRequest("get", "https://api.github.com/users/muthuselvan86")
    .then(JSON.parse, failCallback)
    .then(successCallback, failCallback);