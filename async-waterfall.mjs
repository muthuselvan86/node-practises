import waterfall from 'async/waterfall';

let test1 = (callback) => {
        return callback(null, "apple");
    },
    test2 = (arg, callback) => {
        return callback("Unexpected error", arg + "orange");
    },
    test3 = (arg, callback) => {
        return callback(null, arg + "mango");
    };


waterfall([test1, test2, test3], (err, result) => {
    if (err)
        console.log(`Error : ${err}`);
    else
        console.log(`Final answer is ${result}`);
});