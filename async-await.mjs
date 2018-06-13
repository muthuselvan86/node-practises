const value = async () => {
    let val = 100;
   await (()=>{
       return new Promise((resolve,reject)=>{
        setTimeout(function () {
            val = 200;
            resolve();
        }, 1000);
       });
   })();

    return val;
};

value()
    .then((val) => {
        console.log(`${val}`);
    })
    .catch((err) => {
        console.log(`${err}`);
    });