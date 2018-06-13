import each from 'async/each';

let displayName = (item, callback) => {
        console.log(item);
        callback("1");
    },
    displayAsync = (items) => {
        each(items, displayName, (err) => {
            if(err)
                return console.log(`error ${err}`);
            console.log(`process completed!`);
        });
    };

displayAsync(["1", "2", "3"]);